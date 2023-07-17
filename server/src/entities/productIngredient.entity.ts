import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Product } from './product.entity';

@Entity('product_ingredient')
export class ProductIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public product_id: number;

  @Column()
  public ingredient_id: number;

  @Column()
  public quantity: number;

  @Column()
  public unit_of_measure: number;

  @ManyToOne(() => Product, (product) => product.productIngredient)
  public product: Product;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.productIngredient)
  public ingredient: Ingredient;
}
