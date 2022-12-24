import express from 'express';
import destinationController from '../../controllers/destinationController';

const router = express.Router();

router
  .route('/')
  .post(destinationController.postDestination)
  .get(destinationController.getDestinations);

router
  .route('/:destinationId')
  .get(destinationController.getDestination)
  .put(destinationController.putDestination)
  .delete(destinationController.deleteDestination);

export default router;
