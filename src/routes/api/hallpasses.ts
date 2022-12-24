import express from 'express';
import * as hallpassController from '../../controllers/hallpassController';

const router = express.Router();

router.route('/').post(hallpassController.postHallpass).get(hallpassController.getHallpasses);

router
  .route('/:hallpassId')
  .get(hallpassController.getHallpass)
  .put(hallpassController.putHallpass)
  .delete(hallpassController.deleteHallpass);

export default router;
