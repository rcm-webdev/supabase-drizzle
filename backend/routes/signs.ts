import { Router } from 'express';
import healthCheck from '../controllers/signsController';
const router = Router();


//health status endpoint
router.get("/health", healthCheck);

export default router;