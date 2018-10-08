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
$ npm install faker --save
```

Run Server:

```
$ node app.js 
Server Running
```

Test:

```
$  curl -i http://localhost:3000/
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 14
ETag: W/"e-6RuglyuQVRh/ou+otcFW9IeoKTo"
Date: Mon, 08 Oct 2018 20:39:23 GMT
Connection: keep-alive

hello, world!
```

- `/user`

```
$ curl -i http://localhost:3000/user
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 124
ETag: W/"7c-WvSVtAsd35wVy0Xnhbp7u4Hv1ms"
Date: Mon, 08 Oct 2018 20:40:03 GMT
Connection: keep-alive

{
  "firstName": "Devyn",
  "lastName": "Huels",
  "username": "Marcia_Reynolds",
  "email": "Chaz_McDermott93@yahoo.com"
}
```

- `/users/:num`

```
$ curl -i http://localhost:3000/users/2
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 276
ETag: W/"114-4u1ivAD9hvYKqgHJ4qtO6zJXgLE"
Date: Mon, 08 Oct 2018 20:40:13 GMT
Connection: keep-alive

[
  {
    "firstName": "Aurelie",
    "lastName": "Halvorson",
    "username": "Delfina12",
    "email": "Cassandra47@gmail.com"
  },
  {
    "firstName": "Chelsea",
    "lastName": "Bernhard",
    "username": "Lincoln.Wilderman",
    "email": "Carter_Crooks@yahoo.com"
  }
]
```
