import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  dialect: "postgres",
  logging: false, 
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(" PostgreSQL Connected...");
  } catch (error) {
    console.error(" Database connection failed:", error);
    process.exit(1);
  }
};
