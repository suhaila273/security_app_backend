const mongoose=require("mongoose")

const securitySchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        empid:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phno:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("secuirty",securitySchema)