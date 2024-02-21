import {
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import ProductModel, { ProductDocument, ProductInput } from "../models/product.model";

export class ProductService {

  public async getProductService(
    query: FilterQuery<ProductDocument>,
    options: QueryOptions = { lean: true }
  ) {

    return ProductModel?.findOne(query, {}, options) ?? null;
  }

  public async createProduct(input: ProductInput) {
    return ProductModel?.create(input);
  }


}