var Sequelize = require("sequelize");

var sequelize = new Sequelize("blog", "admin", "1234", {
    dialect: "sqlite",
    sync: {
        force: true
    },
    storage: __dirname + "/db"
});

var BlogEntry = sequelize.define('BlogEntry', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        unique: true
    },
    body: Sequelize.TEXT
});

var Blog = sequelize.define('Blog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

Blog.hasMany(BlogEntry, {as: 'Entries'});

BlogEntry.sync();
Blog.sync();

function addBlogEntry(title, body) {

    Blog.find({ where: { title: "hsaNode" }})
        .success(function (blog) {

            BlogEntry.create({
                title: title,
                body: body
            }).success(function (entry) {

                    blog.setEntries([entry])
                        .success(function () {
                            console.log("added to blog");
                        })
                        .fail(function (err) {
                            console.log("could not add:", err);
                        });
                })
                .fail(function (err) {
                    console.log("could not create entry add:", err);
                });

        })
        .fail(function (err) {
            console.log("could not find blog: ", err);
        });
}

function findBlog() {

    Blog.find({ where: { title: "hsaNode" }})
        .success(function (blog) {

            if (blog.dataValues) {
                console.log(blog.selectedValues);
            }
            else {
                console.log(blog);
            }

        })
        .fail(function (err) {
            console.log("could not find blog:", err);
        });

}

function getEntries() {
    Blog.find({ where: { title: "hsaNode" }})
        .success(function (blog) {
            blog.getEntries().success(function(entries) {
                console.log("entries", entries.map(function(e) {
                    return e.dataValues;
                }));
            });
        })
        .fail(function (err) {
            console.log("could not find blog:", err);
        });

}

function createBlog() {

    Blog.create({ id: 1, title: "hsaNode" })
        .success(function () {
            console.log("Blog created");
        })
        .fail(function (err) {
            console.log("could not create blog:", err);
        });

}


exports.addBlogEntry = addBlogEntry;
exports.findBlog = findBlog;
exports.createBlog = createBlog;
exports.getEntries = getEntries;
exports.Blog = Blog;

