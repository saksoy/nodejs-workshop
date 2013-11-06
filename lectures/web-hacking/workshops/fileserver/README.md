## Workshop Fileserver

In diesem Workshop sollt ihr einen kleinen, statischen File-Server bauen.

### a)

Legt die Datei `fileserver/app/start.js` an.

### b)

`start.js` soll einen HTTP-Server starten, der sich an den Port `3000` bindet.

### c)

Damit die Tests laufen müsst ihr die erzeugte Serverinstanz über `module.exports` exportieren. Dadurch wissen die
Tests, wann der Server für Anfragen bereit ist.

### d)

Alle HTTP-Anfragen, die nicht `GET` als Methode haben, sollen mit dem Statuscode `403` (Method not allowed) beantwortet werden

### e)

Die HTTP-Anfrage `GET /` soll die Datei `public/index.html` mit dem `Content-Type` `text/html; charset=utf8` ausliefern.

### f)

Die HTTP-Anfrage `GET /logo.gif` soll die Datei `public/logo.gif` mit dem `Content-Type` `image/gif` ausliefern.

### g)

Die HTTP-Anfrage `GET /main.css` soll die Datei `public/main.css` mit dem `Content-Type` `text/css; charset=utf8` ausliefern.

### h)

Alle anderen HTTP-`GET`-Anfragen sollen die Datei `public/404.html` mit dem `Content-Type` `text/html; charset=utf8` ausliefern.

### Hinweis:
Alle Anfragen müssen **asynchron** beantwortet werden, d.h. es dürfen keine `fs`-Funktionen verwendet werden, die auf `Sync` enden.