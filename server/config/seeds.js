const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.create({
    Name: "Pamela",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    Name: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
