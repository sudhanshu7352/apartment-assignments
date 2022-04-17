
const express =require("express")

const connect =require("./configs/db")

const app =express()

app.use(express.json())

const residentController =require("./controllers/resident.controller")

app.use("/resident",residentController)


app.listen(2222,async()=>{
    try{
        await connect()
        console.log("running on port 2222")
    }
    catch(e){
        console.log(e.message)
    }
})