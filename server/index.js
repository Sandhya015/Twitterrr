const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");

const uri = "mongodb+srv://admin:admin@twiller.duxqf.mongodb.net/?retryWrites=true&w=majority&appName=twiller";
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const postcollection = client.db("database").collection("posts");
    const usercollection = client.db("database").collection("users");

    app.post("/register", async (req, res) => {
      const user = req.body;
      const result = await usercollection.insertOne(user);
      res.send(result);
    });

    app.get("/loggedinuser", async (req, res) => {
      const email = req.query.email;
      const user = await usercollection.find({ email: email }).toArray();
      res.send(user);
    });

    app.post("/post", async (req, res) => {
      const post = req.body;
      const result = await postcollection.insertOne(post);
      res.send(result);
    });

    app.get("/post", async (req, res) => {
      const posts = (await postcollection.find().toArray()).reverse();
      res.send(posts);
    });

    app.get("/userpost", async (req, res) => {
      const email = req.query.email;
      const posts = (await postcollection.find({ email: email }).toArray()).reverse();
      res.send(posts);
    });

    app.get("/user", async (req, res) => {
      const users = await usercollection.find().toArray();
      res.send(users);
    });

    app.patch("/userupdate/:email", async (req, res) => {
      const filter = { email: req.params.email };
      const profile = req.body;
      const options = { upsert: true };
      const updateDoc = { $set: profile };
      const result = await usercollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.get("/", (req, res) => {
      res.send("Twiller is working");
    });

    app.listen(port, () => {
      console.log(`Twiller clone is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

run().catch(console.dir);
