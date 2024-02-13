const express = require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app =express()

const securityRoute=require("./controllers/securityRouter")
const visitorRoute=require("./controllers/visitorRouter")

app.use(express.json())
app.use(cors())

//connecting to monngodb
mongoose.connect("mongodb+srv://suhaila:suhaila273@cluster0.azy349s.mongodb.net/securityDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)


app.use("/api/sec",securityRoute)
app.use("/api/visitor",visitorRoute)

app.listen(3001,()=>{
    console.log("server running")
})