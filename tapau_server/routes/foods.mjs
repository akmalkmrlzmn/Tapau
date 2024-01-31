import express from "express";
import db from "../db/connector.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 food
router.get("/", async (req, res) => {
  let collection = await db.collection("food");
  let results = await collection.find({})
    .limit(50)
    .toArray();

  res.send(results).status(200);
});
// Get a single food
router.get("/:id", async (req, res) => {
  let collection = await db.collection("food");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Get a list of food by category
router.get("/:category", async (req, res) => {
    let collection = await db.collection("food");
    let query = {category: req.params.category};
    let results = await collection.find(query)
      .toArray();
  
    res.send(results).status(200);
  });

// Get a single food by category
router.get("/:category/:id", async (req, res) => {
  let collection = await db.collection("food");
  let query1 = {_id: new ObjectId(req.params.id)};
  let query2 = {category: req.params.category};
  let result = await collection.findOne({$and: [query1,query2]});
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;