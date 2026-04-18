const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// CREATE product
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      price: Number(req.body.price),
      description: req.body.description || "",
      image: req.file.filename,
    });
    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// READ all products
router.get("/", async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

module.exports = router;