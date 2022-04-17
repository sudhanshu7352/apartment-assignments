const express = require("express");

const Block = require("../model/block.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const block = await Block.create(req.body);
    return res.status(200).send(block);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const block = await Block.find()
      .populate({ path: "flat_id", select: ["flatNo","flatType"] })
      .populate({ path: "resident_id", select: ["name", "gender", "age"] })
      .lean()
      .exec();
    return res.status(200).send(block);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const block = await Block.findById(req.params.id)
      //   .populate("blockId")
      .lean()
      .exec();
    return res.status(200).send(block);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;