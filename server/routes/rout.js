
import express from "express";
import {userSignup,userLogin} from '../controller/user-controller.js'
import { getProducts,getProductById } from "../controller/product-controller.js";
// import {addPaymentGateway} from '../controller/payment-controller.js';
const router = express.Router();
import Order from "../models/order.js";

router.post('/signup', userSignup);
router.post('/login', userLogin)

router.get('/products', getProducts)

router.get('/product/:id',getProductById)

// router.post('/payment', addPaymentGateway);

router.post('/create-order', async (req, res) => {
  try {
    console.log("Incoming order:", req.body);   // 👈 yahan

    const newOrder = new Order(req.body);
    await newOrder.save();

    console.log("Order saved");  // 👈 yahan

    res.status(200).json({ message: "Order saved successfully" });

  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;