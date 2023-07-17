import { Request, Response } from 'express';
import ingredientService from '../services/ingredient.service';

class IngredientController {
  private service;

  constructor(ingredientService: any) {
    this.service = ingredientService;
  }

  getIngredients = async (request: Request, response: Response) => {
    try {
      const ingredients = await this.service.getIngredients();

      response.status(200).json(ingredients);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };

  getIngredient = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const ingredient = await this.service.getIngredient(id);

      response.status(200).json(ingredient);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };

  insertIngredient = async (request: Request, response: Response) => {
    try {
      const ingredient = await this.service.createIngredient(request.body);

      response.status(200).json(ingredient);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };

  updateIngredient = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const response = await this.service.updateIngredient(id, request.body);

      response.status(200).json(response);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };

  deleteIngredient = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const response = await this.service.deleteIngredient(id);

      response.status(200).json(response);
    } catch (error) {
      response.status(400).json(error.message);
    }
  };
}

export default new IngredientController(ingredientService);
