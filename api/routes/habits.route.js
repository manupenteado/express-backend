// routes/habitRoutes.js
import express from 'express';
import habitController from '../controller/habit.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

// Adicione temporariamente no início do arquivo de rotas
console.log('Tipo do createHabit:', typeof habitController.createHabit);

const router = express.Router();

router.use(verifyToken);

router.post('/', habitController.createHabit);
router.get('/', habitController.getAllHabits);
router.get('/:id', habitController.getHabitById);
router.put('/:id', habitController.updateHabit);
router.patch('/:id', habitController.partialUpdateHabit);
router.delete('/:id', habitController.deleteHabit);

export default router;