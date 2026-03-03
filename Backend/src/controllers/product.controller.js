import Product from "../models/Productmodel.js";
import uploadImageToCloudinary from "../utils/uploadToCloudinary.js";

export const createProduct = async (req, res) => {
  try {
    // 1️⃣ Get text data
    const { name, price } = req.body;

    // 2️⃣ Get uploaded file from multer
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    // 3️⃣ Upload image to cloudinary
    const cloudinaryResponse = await uploadImageToCloudinary(
      file.buffer
    );

    // 4️⃣ Save product to DB
    const newProduct = await Product.create({
      name,
      price,
      image: cloudinaryResponse.secure_url,
    });

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};