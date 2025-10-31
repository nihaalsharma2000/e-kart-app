import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController";
import upload from "../utils/multer";

const router = Router();

router.get("/product", getAllProduct);
router.get("/product/:id", getSingleProduct);
router.post("/addproduct",upload.single('image'), createProduct);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);

export default router;
