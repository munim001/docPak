// src/config/db.js
import mysql from "mysql2/promise";

let pool;

export const connectDB = async () => {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST ,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "Root@1234", 
      database: process.env.DB_NAME || "doctorsappointment",
      port: process.env.DB_PORT ,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });


    // Test connection
    const [rows] = await pool.query("SELECT 1");
    console.log("✅ Connected to MySQL database successfully");
    return pool;
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
};

export const getDB = () => pool;
