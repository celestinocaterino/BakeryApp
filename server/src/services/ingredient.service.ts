import { Repository } from 'typeorm';
import { Ingredient } from './../entities/ingredient.entity';
import { Product } from './../entities/product.entity';
import { dataSource } from './../config/database';

class IngredientService {
  private ingredientRepository;
  private productRepository;

  constructor(
    ingredientRepository: Repository<Ingredient>,
    productRepository: Repository<Product>
  ) {
    this.ingredientRepository = ingredientRepository;
    this.productRepository = productRepository;
  }

  getIngredients = async () => {
    return await this.ingredientRepository
      .createQueryBuilder('ingredients')
      .getMany();
  };

  getIngredient = async (id: number) => {
    return await this.ingredientRepository.find({ where: { id } });
  };

  createIngredient = async (ingredient: Partial<Ingredient>) => {
    return await this.ingredientRepository.save(ingredient);
  };

  updateIngredient = async (id: number, ingredient: Partial<Ingredient>) => {
    return await this.ingredientRepository.update(id, ingredient);
  };

  deleteIngredient = async (id: number) => {
    return await this.ingredientRepository.delete(id);
  };
}

export default new IngredientService(
  dataSource.getRepository(Ingredient),
  dataSource.getRepository(Product)
);
