import { Repository } from 'typeorm';
import { Ingredient } from './../entities/ingredient.entity';
import { Product } from './../entities/product.entity';
import { dataSource } from './../config/database';

class ProductService {

  private productRepository;
  private ingredientRepository;

	constructor(
    productRepository: Repository<Product>, 
    ingredientRepository: Repository<Ingredient>
  ) {
		this.productRepository = productRepository;
    this.ingredientRepository = ingredientRepository;
	}

  getProducts = async () => {
    return await this.productRepository.createQueryBuilder('users').getMany();
  };

  getProduct = async (id: number) => {
    return await this.productRepository.find({ where: { id } });
  };

	createProduct = async (product: Partial<Product>) => {
    return await this.productRepository.save(product);
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
  dataSource.getRepository(Ingredient)
);