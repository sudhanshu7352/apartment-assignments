const express = require("express");

const Resident = require("../model/resident.model");

const router = express.Router();

//-----------post--------------

router.post("", async (req, res) => {
  try {
    const resident = await Resident.create(req.body);
    res.status(200).send(resident);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//-----------get------------------
router.get("", async (req, res) => {
  try {
    const resident = await Resident.find().lean().exec();
    res.status(200).send(resident);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id",async(req,res)=>{
    try{
        const resident =await Resident.findById(req.params.id).lean().exec()
        res.status(200).send(resident)
    }
    catch(e){
        res.status(404).send(e.message)
    }
})
router.patch("/:id",async(req,res)=>{
    try {
        const resident = await Resident.findByIdAndUpdate(req.params.id, req.body, {
          true: 1,
        });
        res.status(200).send(resident);
      } catch (e) {
        res.status(404).send(e.message);
      }
})
router.delete("/:id",async(req,res)=>{
    try{
       const resident=await Resident.findByIdAndDelete(req.params.id).lean().exec()

       res.status(200).send(resident);
    }
    catch(e){
        res.status(404).send(e.message);
    }
})

module.exports = router;
