import mongoose from "mongoose";

export const Connection = async () => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
 
const URL = `mongodb+srv://${username}:${password}@ecommerce-web.bmwqy9x.mongodb.net/ECOMMERCE?retryWrites=true&w=majority&appName=ecommerce-web`;





  try {
    await mongoose.connect(URL); 
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.log("❌ Error While Connecting with the Database:", error.message);
  }
};

export default Connection;
