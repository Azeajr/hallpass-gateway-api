import express from 'express';
import userController from '../../controllers/userController';
import ROLES_LIST from '../../config/roles_list';
import verifyRoles from '../../middleware/verifyRoles';

const router = express.Router();

router
  .route('/:userId')
  .get(
    verifyRoles(ROLES_LIST.User, ROLES_LIST.Editor, ROLES_LIST.Admin),
    userController.getUserData
  );

export default router;
