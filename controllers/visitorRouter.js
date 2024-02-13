const express=require("express")
const visitorModel = require("../models/visitorModel")
const { route } = require("./securityRouter")
const router=express.Router()

//add visitor
router.post("/add",async(req,res)=>{
let data=req.body
let visitor=new visitorModel(data)
let result=await visitor.save()
res.json({status:"success"})

})

//view visitor with populate
router.get("/viewall",async(req,res)=>{
let result=await visitorModel.find()
.populate("securityId","name empid -_id")
.exec()
res.json(result)
})

module.exports=router