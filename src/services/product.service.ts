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

  public async updateProduct(query: FilterQuery<ProductDocument>,
    update: UpdateQuery<ProductDocument>,
    options: QueryOptions) {
    return ProductModel?.findOneAndUpdate(query, update, options)
  }
  public async deleteProduct(query: FilterQuery<ProductDocument>) {
    return ProductModel?.deleteOne(query)
  }

}