import {Router} from "express";
import userRouter from "./userRouter";
const router = Router();
router.use('/auth',userRouter)

export default router;