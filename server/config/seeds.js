const db = require("./connection");
const { User, Item } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  const users = await User.create([
    {
      name: "A",
      email: "A@gmail.com",
      password: "admin",
      wishlist: [],
    },
    {
      name: "B",
      email: "B@gmail.com",
      password: "admin",
      wishlist: [],
    },
    {
      name: "C",
      email: "C@gmail.com",
      password: "admin",
      wishlist: [],
    },
    {
      name: "D",
      email: "D@gmail.com",
      password: "admin",
      wishlist: [],
    },
  ]);

  console.log("users seeded");

  await Item.deleteMany();

  console.log("items seeded");

  const item = await Item.insertMany([
    {
      name: "Item1",
      description: "SOmethin Item1",
      image: "something",
      price: "100",
    },
    {
      name: "Item2",
      description: "SOmethin Item2",
      image: "something",
      price: "200",
    },
    {
      name: "Item3",
      description: "SOmethin Item3",
      image: "something",
      price: "300",
    },
    {
      name: "Item4",
      description: "SOmethin Item4",
      image: "something",
      price: "400",
    },
  ]);
  process.exit();
});
