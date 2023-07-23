import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  AfterLoad,
} from 'typeorm';
import { ProductIngredient } from './productIngredient.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 6, scale: 2 })
  price: number;

  @Column()
  to_remove: number;

  @Column({
    nullable: true,
  })
  discount: number;

  @Column()
  quantity: number;

  @Column()
  currency: string;

  @AfterLoad()
  getDiscount() {
    const today = Date.now();
    const createdAt = new Date(this.created_at);
    const difference = today - createdAt.getTime();
    const passedDays = Math.abs(difference / (1000 * 3600 * 24));

    let discount = null;

    if (passedDays >= 2) {
      discount = (this.price * 80) / 100;
    }

    if (passedDays >= 3) {
      discount = (this.price * 20) / 100;
    }

    if (passedDays >= 4) {
      discount = null;
      this.to_remove = 1;
    }

    discount = parseFloat(discount?.toFixed(2));

    this.discount = discount;
  }

  @OneToMany(
    () => ProductIngredient,
    (productIngredient) => productIngredient.product
  )
  public product_ingredients: ProductIngredient[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
