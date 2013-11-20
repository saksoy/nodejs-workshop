var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/blog');

var BlogEntrySchema = mongoose.Schema({
    title : {
        type : String,
        unique: true,
        required : true
    },
    body : String
});

var BlogSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    entries : [BlogEntrySchema],
    createdAt : {
        type : Date,
        "default" : Date.now
    }
});

var Blog = mongoose.model('Blog', BlogSchema);

function createHsaNodeBlog() {

    var hsaNodeBlog = new Blog({ title : "hsaNode"});

    hsaNodeBlog.save(function(err, createdBlog) {

        if(err) {
            console.log(err);
        }

        console.log("Blog created: " + createdBlog);
    });
}

function findHsaNodeBlog() {

    Blog.findOne({ title : "hsaNode"}, function(err, hsaNodeBlog) {

        if(err) { throw err; }

        console.log("found blog: ", hsaNodeBlog);
    });
}

function addBlogEntry(title, body) {

    Blog.findOne({ title : "hsaNode"}, function(err, hsaNodeBlog) {

        if(err) { throw err; }

        var entry = {
            title : title,
            body : body
        };

        hsaNodeBlog.entries.push(entry);

        hsaNodeBlog.save(function(err, savedNodeBlog) {
            if(err) {
                throw err;
            }

            console.log(savedNodeBlog);
        });
    });

}

exports.addBlogEntry = addBlogEntry;
exports.findHsaNodeBlog = findHsaNodeBlog;
exports.createHsaNodeBlog = createHsaNodeBlog;
exports.Blog = Blog;


