import express from "express";
import db from "../db/connector.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  let collection = await db.collection("blog");
  let results = await collection.find({})
    .limit(50)
    .toArray();

  res.send(results).status(200);
});

// Get a single post
router.get("/:id", async (req, res) => {
  let collection = await db.collection("blog");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;