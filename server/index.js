import express from "express" 
import middlware from "./config/middleware.config";  
const app = express()

app.get('/',(req,res)=>{
    res.json({message : "its worked"})
})

middlware(app)

const server = async ()=>{
    app.listen(6001,err =>{
        if(err){
            console.error(err)
        }else{
            console.log('App listen to port '+6001)
        }
    });
}

server().then(() => console.log("connected"))
