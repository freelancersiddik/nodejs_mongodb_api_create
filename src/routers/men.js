const express = require("express");
const router = new express.Router();
const MensRnking = require("../moduls/mens");

router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRnking(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get all document
router.get("/mens", async (req, res) => {
  try {
    const findData = await MensRnking.find().sort({ ranking: 1 });
    res.status(201).send(findData);
  } catch (error) {
    res.status(404).send(error);
  }
});
// get one doc
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const findONe = await MensRnking.findById(_id);
    res.status(201).send(findONe);
  } catch (error) {
    res.status(404).send(error);
  }
});
// patch to update mens
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UpdateOne = await MensRnking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(UpdateOne);
  } catch (error) {
    res.status(500).send(error);
  }
});
// delete to update mens
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const DeletOne = await MensRnking.findByIdAndDelete(_id);
    res.send(DeletOne);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
