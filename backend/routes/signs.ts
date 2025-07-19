import { Router, Request, Response } from 'express';
const router = Router();

//health status endpoint
router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    message: "Signs API is running smoothly!"
  });
});

export default router;