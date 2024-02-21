import express,{ Express,Request,Response,NextFunction } from "express";
import dotenv, { config } from "dotenv";
import {ApplicationRoters} from '../src/routes/routes';

dotenv.config();

const app:Express = express();
const port = process.env.PORT || 4000;

const myLogger = function (req:Request, res:Response, next:NextFunction) {
    console.log('LOGGED')
    next();
}

app.use(myLogger);

app.use(express.json());

app.listen(port, ()=>{
    console.log(`server running ${port}`);
    new ApplicationRoters(app);
});