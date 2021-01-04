import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from "helmet"
import apiRoutes from "../routes";
import * as express from "express";

// to avoid cors exception
const setHeader = (req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization,Origin, X-Requested-With, Content-Type, Accept")
    if(req.method === "OPTIONS"){
        return res.sendStatus(200)
    }
    next()
}

export default (app)=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(morgan('dev'));
    app.use(helmet())
    app.use((req,res,next)=>{
        setHeader(req,res,next)
    })
    app.use('/api',apiRoutes)
    app.use(function (req, res, next) {
        console.log("error")
        return res.status(404).send({ error: "no page" });
    });
}
