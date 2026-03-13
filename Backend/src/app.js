import { cacheMiddleware } from "./middlewares/cachemiddleware";
import { getAllProducts } from "./controllers/product.controller";
const router = express();
router.get(
  "/products",
  cacheMiddleware("all_products"),
  getAllProducts
);