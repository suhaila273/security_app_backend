const express=require("express")
const visitorModel = require("../models/visitorModel")
const router=express.Router()



router.post("/add",async(req,res)=>{
let data=req.body
let visitor=new visitorModel(data)
let result=await visitor.save()
res.json({status:"success"})

})

module.exports=router