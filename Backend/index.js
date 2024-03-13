const express = require("express")
const dotenv = require("dotenv")
dotenv.config({path: "../.env"})
const cors = require("cors")
const path = require("path")

const IndexRoute = require("./Routers/index")
const connectDatabase = require("./Helpers/database/connectDatabase")
const customErrorHandler = require("./Middlewares/Errors/customErrorHandler")
connectDatabase()


const PORT = process.env.PORT ;


const app = express() ;

app.use(express.json())
app.use(cors())

app.use("/",IndexRoute)

app.use(customErrorHandler)



app.use(express.static(path.join(__dirname , "public") ))

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

process.on("unhandledRejection",(err , promise) =>{
    console.log(`Logged Error : ${err}`)

    server.close(()=>process.exit(1))
})