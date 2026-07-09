import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors({
origin:process.env.CORS_ORIGIN,
credentials:true
}))//connect to front end api integtation
app.use(express.json({limit:"16kb"}))//accept json file
app.use(express.urlencoded({extended:true,limit:"16kb"}))//accept extended object
app.use(express.static("public"))//use public folder
app.use(cookieParser())//miidleware .it allow server to easity read,autheticate and manage session cookie


//routes
import userRouter from "./routes/user.routes.js"
app.use("/api/v1/users",userRouter)


export default app