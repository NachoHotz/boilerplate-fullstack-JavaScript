import { Router } from 'express';

import * as controller from '../controllers/basicController.controller';

const router = Router();

router.get('/', controller.basicController);

export default router;
