import { Request, Response } from "express";


//controllers for business logic
// controller for api health check
const healthCheck = (req: Request, res: Response) => {
    res.status(200).json({
        status: "ok",
        message: "Signs API is running smoothly from the controller!"
    });
};

export default healthCheck;