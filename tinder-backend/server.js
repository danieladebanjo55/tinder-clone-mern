import express from "express";
import mongoose from "mongoose";
import Cors from 'cors';
import Cards from "./dbCards.js";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:e2aAmKh0DS0y1veR@cluster0.lbgzfej.mongodb.net/tinderDatabase?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello, Hippie"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//Listener
app.listen(port, () => console.log(`listening on ${port}`));
