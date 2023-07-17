import {Router} from 'express';
import ingredientController from './../../controllers/ingredient.controller';
import { auth } from './../../middleware/auth.middleware';

const router = Router();

router.get('/', ingredientController.getIngredients);
router.get('/:id', ingredientController.getIngredient);
router.post('/', auth, ingredientController.insertIngredient);
router.patch('/:id', auth, ingredientController.updateIngredient);
router.delete('/:id', auth, ingredientController.deleteIngredient);

export default router;