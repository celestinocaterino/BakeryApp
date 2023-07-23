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
      response.status(500).json({ message: error.message, status: 400 });
    }
  };

  getProduct = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const product = await this.service.getProduct(id);

      response.status(200).json(product);
    } catch (error) {
      response.status(500).json({ message: error.message, status: 400 });
    }
  };

  insertProduct = async (request: Request, response: Response) => {
    try {
      const product = await this.service.createProduct(request.body);
      await this.service.addProductIngredients(
        product.id,
        request.body.ingredients
      );

      response.status(200).json(product);
    } catch (error) {
      response.status(500).json({ message: error.message, status: 400 });
    }
  };

  updateProduct = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const product = await this.service.updateProduct(id, request.body);

      response.status(200).json(product);
    } catch (error) {
      response.status(500).json({ message: error.message, status: 400 });
    }
  };

  deleteProduct = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const product = await this.service.deleteProduct(id);

      response.status(200).json(product);
    } catch (error) {
      response.status(500).json({ message: error.message, status: 400 });
    }
  };
}

export default new ProductController(productService);
