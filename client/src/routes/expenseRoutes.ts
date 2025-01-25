import { Router } from "express";
import { getExpensesByCategory } from "../controllers/dashboardController";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;