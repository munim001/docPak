// src/config/db.js
import mysql from "mysql2/promise";

let pool;

export const connectDB = async () => {
  try {
    pool = mysql.createPool({
      host: "localhost",      // your MySQL server host
      user: "root",           // your MySQL username
      password: "Root@1234", // your MySQL password
      database: "doctorsappointment",  // your database name
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    console.log("✅ Connected to MySQL database");
    return pool;
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
};

export const getDB = () => pool;
