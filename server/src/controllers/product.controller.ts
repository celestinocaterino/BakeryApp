import { Request, Response } from 'express';
import productService from '../services/product.service';

class ProductController {

	private service;

	constructor(productService: any) {
		this.service = productService;
	}

  getProducts = async (request: Request, response: Response) => {
    try {
      const products = await this.service.getProducts();

      response.status(200).json(products);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };

  getProduct = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const product = await this.service.getProduct(id);

      response.status(200).json(product);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };

  insertProduct = async (request: Request, response: Response) => {
    try {
      const product = await this.service.createProduct(request.body);

      response.status(200).json(product);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };

  updateProduct = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const product = await this.service.updateProduct(id, request.body);

      response.status(200).json(product);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };

  deleteProduct = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const product = await this.service.deleteProduct(id);

      response.status(200).json(product);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };
}

export default new ProductController(productService);