const { User } = require("../models");

const userData = [
  {
    username: "Vivi",
    password: "secretsecret",
  },
  {
    username: "Zara",
    password: "secret",
  },
  {
    username: "Pepper",
    password: "secret123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
