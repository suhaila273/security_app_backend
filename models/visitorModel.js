const mongoose=require("mongoose")

const visitorSchema=new mongoose.Schema(
    {
        securityId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"secuirty"
        },
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        purpose:{
            type:String,
            required:true
        },
        postedDate:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("visitors",visitorSchema)