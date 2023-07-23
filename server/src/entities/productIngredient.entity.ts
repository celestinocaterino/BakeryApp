import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Product } from './product.entity';

@Entity('product_ingredient')
export class ProductIngredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public quantity: number;

  @Column()
  public unit_of_measure: string;

  @ManyToOne(() => Product, (product) => product.product_ingredients, {onDelete:'CASCADE'})
  @JoinColumn({ name: 'product_id' })
  public product: Product;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.product_ingredients, {onDelete:'CASCADE'})
  @JoinColumn({ name: 'ingredient_id' })
  public ingredient: Ingredient;
}
