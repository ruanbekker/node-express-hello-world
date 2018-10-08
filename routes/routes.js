var faker = require("faker");
var appRouter = function (app) {

  app.get("/", function (req, res) {
    var message = 'hello, world!';
    res.status(200).send(message + '\n');
  });

  app.get("/user", function (req, res) {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.header("Content-Type",'application/json');
    res.status(200).send(JSON.stringify(data, null, 2) + '\n');
  });

 app.get("/users/:num", function (req, res) {
   var users = [];
   var num = req.params.num;

   if (isFinite(num) && num  > 0 ) {
     for (i = 0; i <= num-1; i++) {
       users.push({
           firstName: faker.name.firstName(),
           lastName: faker.name.lastName(),
           username: faker.internet.userName(),
           email: faker.internet.email()
        });
     }

     res.status(200).send(JSON.stringify(users, null, 2) + '\n');
    
   } else {
     res.status(400).send({ message: 'invalid number supplied' });
   }

 });
}

module.exports = appRouter;
