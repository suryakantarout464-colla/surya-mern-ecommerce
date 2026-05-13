import { products } from "./constants/data.js";
import Product from "./models/product-schema.js";

const DefaultData = async () => {
  try {
    for (let product of products) {
      await Product.updateOne(
        { id: product.id },   // find by unique product id
        { $set: product },    // update if exists
        { upsert: true }      // insert if not exists
      );
    }
    console.log("✅ Default products synced successfully");
  } catch (error) {
    console.log("❌ Error while inserting default data:", error.message);
  }
};

export default DefaultData;
