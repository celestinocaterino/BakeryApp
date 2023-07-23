import productsRoutes from './products.route';
import ingredientsRoutes from './ingredients.route';
import authRoutes from './auth.route';
import {Router} from 'express';

const router = Router();

router.use('/products', productsRoutes);
router.use('/ingredients', ingredientsRoutes);
router.use('/auth', authRoutes);

export default router;