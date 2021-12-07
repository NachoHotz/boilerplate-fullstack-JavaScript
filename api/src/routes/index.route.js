import { Router } from 'express';

import basicController from '../controllers/basicController.controller';

const router = Router();

router.get('/', basicController);

export default router;
