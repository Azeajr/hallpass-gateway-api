import express from 'express';
import userController from '../../controllers/userController';

const router = express.Router();

router.route('/:userId').get(userController.getUserData);

export default router;
