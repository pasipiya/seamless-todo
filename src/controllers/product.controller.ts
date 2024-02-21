import { Request,Response,NextFunction } from "express";
import { ProductService } from "../services/product.service";
import { BaseResponseUtil } from '../utils/base.response.util';

const productService = new ProductService();
const baseResponseUtil = new BaseResponseUtil();

export class ProductController {

    public async getProductControllerHandler(req: Request, res: Response) {
        try {
            const productId = req.params.productId;
            const data = await productService.getProductService({ _id: productId });
            const response = await baseResponseUtil.baseResponse(data,"Data Fetched Successfully",0);
            return res.send(response);
            
        } catch (e:any) {
            const response = baseResponseUtil.baseResponse(null,e.error_message,e.error_code);
            res.status(400).send(response);
            
        }
    }

    public async createProductControllerHandler(req: Request, res: Response) {
        try {
            const product = req.body;

            const data = await productService.createProduct(product);
            const response = await baseResponseUtil.baseResponse(data,"Data Fetched Successfully",0);
            
            return res.send(response);
            
        } catch (e:any) {
            const response = baseResponseUtil.baseResponse(null,e.error_message,e.error_code)
            res.status(400).send(response);
            
        }
    }

    public async updateProductControllerHandler(req: Request, res: Response) {
        try {
            const productId = req.params.productId;
            const product = req.body;
            const data = await productService.updateProduct({productId},product, {
                new:true,
            });
            const response = await baseResponseUtil.baseResponse(data,"Data Update Successfully",0);
            
            return res.send(response);
            
        } catch (e:any) {
            const response = baseResponseUtil.baseResponse(null,e.error_message,e.error_code)
            res.status(400).send(response);
            
        }
    }

    public async deleteProductControllerHandler(req: Request, res: Response) {
        try {
            const productId = req.params.productId;

            const data = await productService.deleteProduct({ _id: productId });
            const response = await baseResponseUtil.baseResponse(data,"Data Deleted Successfully",0);
            
            return res.send(response);
            
        } catch (e:any) {
            const response = baseResponseUtil.baseResponse(null,e.error_message,e.error_code)
            res.status(400).send(response);
            
        }
    }

    static routerLogger (req:Request, res:Response, next:NextFunction) {
        next();
    }
}