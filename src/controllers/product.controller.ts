import { Request,Response } from "express";
import { ProductService } from "../services/product.service.controller";
const productService = new ProductService()

export class ProductController {

    public async getProductControllerHandler(req: Request, res: Response) {
        try {
            const productId = req.params.productId;
            const data = await productService.getProductService({ _id: productId });
            return res.send(data);
            
        } catch (error) {
            res.status(400).send(error);
            
        }
    }

    public async createProductControllerHandler(req: Request, res: Response) {
        try {
            const product = req.body;

            const data = await productService.createProduct(product);
            console.log(data);
            
            return res.send(data);
            
        } catch (error) {
            res.status(400).send(error);
            
        }
    }
}