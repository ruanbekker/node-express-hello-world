# node-express-hello-world
Hello World App on Nodejs and Express

## Setup

```bash
$ mkdir node-app
$ cd node-app
$ npm init
```

Install Dependencies:

```bash
$ npm install express --save
$ npm install body-parser --save
```

Run Server:

```
$ node app.js 
Server Running
```

Test:

```
$  curl -iv http://localhost:3000/
*   Trying 127.0.0.1...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.47.0
> Accept: */*
> 
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< X-Powered-By: Express
X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8
< Content-Length: 28
Content-Length: 28
< ETag: W/"1c-gJ7gJTdIAdRbRMrgqh4CBhUmU+Y"
ETag: W/"1c-gJ7gJTdIAdRbRMrgqh4CBhUmU+Y"
< Date: Mon, 08 Oct 2018 20:05:35 GMT
Date: Mon, 08 Oct 2018 20:05:35 GMT
< Connection: keep-alive
Connection: keep-alive

< 
{"message":"hello, world!"}
* Connection #0 to host localhost left intact
```
