import { Router } from "express";
import validate from "middleware/validator";
import authRouter from "./auth";
import { isAuth } from "middleware/auth";
import {
  getListings,
  getUser,
  getUserPostingStats,
  updateStatus,
  updateUserStatus,
} from "controllers/admin";

const adminRouter = Router();

adminRouter.get("/listings", isAuth, getListings);
adminRouter.patch("/check-active/:id", isAuth, updateStatus);
adminRouter.get("/user-listing", isAuth, getUser);
adminRouter.patch("/check-user-active/:id", isAuth, updateUserStatus);
adminRouter.get("/user-stats/:userId", isAuth, getUserPostingStats);

export default adminRouter;
