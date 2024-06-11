const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()

const course = require("./models/course")

const {courseModel}=require("./models/course")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://orwel000:orwel123@cluster0.hyugd.mongodb.net/courseDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input = req.body
    let course= new courseModel(input)
    // console.log(course)
    course.save()
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    courseModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.get("/search",(req,res)=>{
    res.send("Search DATA")
})

app.listen(8080,()=>{
    console.log("Server Started")
})