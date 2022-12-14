import express from 'express';
import destinationController from '../../controllers/destinationController';

const router = express.Router();

router.route('/').get(destinationController.getDestinations);

export default router;
