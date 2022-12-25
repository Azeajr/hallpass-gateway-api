import express from 'express';
import rosterController from '../../controllers/rosterController';
import ROLES_LIST from '../../config/roles_list';
import verifyRoles from '../../middleware/verifyRoles';

const router = express.Router();

router
  .route('/user/:userId')
  .get(
    verifyRoles(ROLES_LIST.User, ROLES_LIST.Editor, ROLES_LIST.Admin),
    rosterController.getUserRosters
  )
  .post(rosterController.postRoster);

router
  .route('/:rosterId')
  .get(rosterController.getRoster)
  .put(rosterController.putRoster)
  .delete(rosterController.deleteRoster);

export default router;
