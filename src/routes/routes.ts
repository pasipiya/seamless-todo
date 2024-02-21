import express, { Express, Request, Response, NextFunction } from "express";
import { ProductController } from '../controllers/product.controller'
import logger from "../logger";
import { BaseResponseUtil } from '../utils/base.response.util';

const productController = new ProductController();
const baseResponseUtil = new BaseResponseUtil();

export class ApplicationRoters {
    private express: Express;

    constructor(express: Express) {

        this.express = express;
        this.initializeRouters();

    }

    private initializeRouters() {
        this.express.get("/api/product/:productId", this.getProductHandler.bind(this));
        this.express.post("/api/product", this.createProductHandler.bind(this));
        this.express.put("/api/product", this.updateProductHandler.bind(this));
        this.express.delete("/api/product", this.deleteProductHandler.bind(this));
    }

    private async getProductHandler(req: express.Request, res: express.Response) {
        try {
            logger.info("getProductHandler!");
            const data = await productController.getProductControllerHandler(req, res);

            return data;
        } catch (e:any) {
            logger.error(e);
            const response = await baseResponseUtil.baseResponse(null,e.error_message,e.error_code);
            res.status(400).send(response);
        }
    }

    private async createProductHandler(req: express.Request, res: express.Response) {
        try {
            logger.info("createProductHandler!");
            const data = await productController.createProductControllerHandler(req, res);

            return data;
        } catch (e:any) {
            logger.error(e);
            const response = await baseResponseUtil.baseResponse(null,e.error_message,e.error_code);
            res.status(400).send(response);
        }
    }

    private async updateProductHandler(req: express.Request, res: express.Response) {
        try {
            logger.info("updateProductHandler!");
            const data = await productController.createProductControllerHandler(req, res);

            return data;
        } catch (e:any) {
            logger.error(e);
            const response = await baseResponseUtil.baseResponse(null,e.error_message,e.error_code);
            res.status(400).send(response);

        }
    }

    private async deleteProductHandler(req: express.Request, res: express.Response) {
        try {
            logger.info("deleteProductHandler!");
            const data = await productController.deleteProductControllerHandler(req, res);
            return data;
        } catch (e:any) {
            logger.error(e);
            const response = await baseResponseUtil.baseResponse(null,e.error_message,e.error_code);
            res.status(400).send(response);
        }
    }

}