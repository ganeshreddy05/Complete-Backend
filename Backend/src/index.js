import express from "express";
import cors from "cors";
import connectDB from "./config/mongoDB.js";
import cookieParser from "cookie-parser";
//  import productRoutes from  "../src/Routes/product.routes.js"
import authRoutes from "../src/Routes/auth.routes.js"

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
// app.use("/api/products", productRoutes);

app.use(express({ limit: "16kb" }));
app.use(express.json());
app.use(express.urlencoded({extended :true,limit:"16kb"}))
app.use(express.static("public"))
app.use("/api/auth", authRoutes);

async function startingBackendApplication() {
  await connectDB();
  runningServer();
}
function runningServer() {
  app.listen(PORT, () => {
    console.log("Server is running");
  });
}
startingBackendApplication();
