var jwt = require("jsonwebtoken");
require("dotenv").config();

const dataBase = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];
exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send({ error: "Missing data" });
  const user = dataBase.find(
    (u) => u.username == username && u.password == password
  );
    if (user) {
      jwt.sign(
        { id: user.id, username: user.username },
        process.env.Secret_Token,
        { expiresIn: "7h" },
        (err, token) => {
          if (err) res.json({ error: err });
          console.log(token);
          res.send(token);
        }
      );

  } else {
    return res.status(400).send({ error: "Wrong username or password." });
  }
};
exports.register = (req, res) => {
  const { username, password } = req.body;
  const id = dataBase.length + 1;
  const newUser = { id, username, password };
  dataBase.push(newUser);
  return res.send(dataBase);
};

exports.protected = (req, res) => {
let user = req.user
  res.send(user)
};
