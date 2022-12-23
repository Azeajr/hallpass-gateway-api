import express from 'express';
import * as hallpassController from '../../controllers/hallpassController';

const router = express.Router();

router.route('/').get(hallpassController.getHallpasses).post(hallpassController.postHallpass);

router.route('/:hallpassId').get(hallpassController.getHallpass);

export default router;
