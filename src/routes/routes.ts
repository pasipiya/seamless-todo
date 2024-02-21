import express,{ Express, Request,Response,NextFunction } from "express";
import {ProductController} from '../controllers/product.controller'

const productController = new ProductController();

export class ApplicationRoters {
    private express: Express;
    
    constructor(express: Express) {

        this.express = express;
        this.initializeRouters();
        
    }

    private initializeRouters(){
        this.express.get("/api/products/:productId",this.getProductHandler.bind(this));
        this.express.post("/api/products",this.createProductHandler.bind(this));
    }

    private async getProductHandler(req: express.Request, res: express.Response) {
        try {

            const data = await productController.getProductControllerHandler(req,res);
 
            return data;
        } catch (error) {
            console.log(error);
            
        }
    }

    private async createProductHandler(req: express.Request, res: express.Response) {
        try {

            const data = await productController.createProductControllerHandler(req,res);
 
            return data;
        } catch (error) {
            console.log(error);
            
        }
    }

}

interface AuthenticatedRequest extends Request {
    user?: any; // Modify 'any' to match the type of your user object
}