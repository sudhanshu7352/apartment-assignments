
const express =require("express")

const connect =require("./configs/db")

const app =express()

app.use(express.json())

const residentController =require("./controllers/resident.controller")

app.use("/resident",residentController)

const flatController =require("./controllers/flat.controller")

app.use("/flat",flatController)


const blockController =require("./controllers/block.controller")

app.use("/block",blockController)

const {register,login} =require("./controllers/auth.controller");
app.post("/register",register);

app.post("/login",login);
app.listen(2222,async()=>{
    try{
        await connect()
        console.log("running on port 2222")
    }
    catch(e){
        console.log(e.message)
    }
})