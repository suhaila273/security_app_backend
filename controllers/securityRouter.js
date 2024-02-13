const express=require("express")

const router=express.Router()

const securityModel=require("../models/securityModel")
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/add",async(req,res)=>{

    let {data}={"data":req.body}
    let password=req.body.password

    const hashPassword=await hashPasswordGenerator(password)
    data.password=hashPassword
    let secuirtyUser=new securityModel(data)
    let result=await secuirtyUser.save()
    res.json({
        status:"success"
    })

})

module.exports=router