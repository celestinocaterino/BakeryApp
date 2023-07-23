import { Repository } from 'typeorm';
import { Ingredient } from './../entities/ingredient.entity';
import { Product } from './../entities/product.entity';
import { ProductIngredient } from './../entities/productIngredient.entity';
import { dataSource } from './../config/database';

class ProductService {
  private productRepository;
  private ingredientRepository;
  private productIngredientRepository;

  constructor(
    productRepository: Repository<Product>,
    ingredientRepository: Repository<Ingredient>,
    productIngredientRepository: Repository<ProductIngredient>
  ) {
    this.productRepository = productRepository;
    this.ingredientRepository = ingredientRepository;
    this.productIngredientRepository = productIngredientRepository;
  }

  getProducts = async () => {
    return await this.productRepository.createQueryBuilder('products').orderBy('products.id', 'DESC').getMany();
  };

  getProduct = async (id: number) => {
    const product = this.productRepository.findOne(
      { 
        relations: ['product_ingredients', 'product_ingredients.ingredient'], 
        where: { id } 
      }
    );

    return await product;
  };

  createProduct = async (product: Partial<Product>) => {
    return await this.productRepository.save(product);
  };

  addProductIngredients = async (productId: number, ingredients: []) => {
    ingredients.forEach(async (element: any) => {
      if( element.name ) {
        const { id } = await this.findIngredient(element.name) ?? await this.createIngredient(element.name);
        await this.productIngredientRepository.save(
          {
            product: productId,
            ingredient: id,
            quantity: element.quantity as number,
            unit_of_measure: element.unit_of_measure,
          } as unknown as Partial<ProductIngredient>
        );
      }
    });
  };
  
  createIngredient = async (name: string) => {
    return await this.ingredientRepository.save({name});
  };

  findIngredient = async (name: string) => {
    return await await this.ingredientRepository.findOne(
        { 
          where: { name }
        }
      );
  };

  updateProduct = async (id: number, product: Partial<Product>) => {
    return await this.productRepository.update(id, product);
  };

  deleteProduct = async (id: number) => {
    return await this.productRepository.delete(id);
  };
}

export default new ProductService(
  dataSource.getRepository(Product),
  dataSource.getRepository(Ingredient),
  dataSource.getRepository(ProductIngredient)
);
