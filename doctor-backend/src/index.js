// src/index.js
import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Doctor Appointment API is running...");
});

// Connect to MySQL
connectDB().then(async (db) => {
  try {
    const [rows] = await db.query("SHOW TABLES");
    console.log("📂 Tables in DB:", rows.map((r) => Object.values(r)[0]));
  } catch (err) {
    console.error("❌ Test query failed:", err.message);
  }

  // ✅ Get all doctors
  app.get("/doctors", async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM railway.doctors_lnh");
      res.json(rows);
    } catch (err) {
      console.error("❌ Error fetching doctors:", err);
      res.status(500).json({ message: "Error fetching doctors" });
    }
  });

  // ✅ Get doctors by specialty
  app.get("/doctors/specialty/:specialty", async (req, res) => {
    try {
      const { specialty } = req.params;
      const [rows] = await db.query(
        "SELECT * FROM railway.doctors_lnh WHERE specialty = ?",
        [specialty]
      );

      if (rows.length === 0) {
        return res
          .status(404)
          .json({ message: "No doctors found for this specialty" });
      }

      res.json(rows);
    } catch (err) {
      console.error("❌ Error fetching doctors by specialty:", err);
      res.status(500).json({ message: "Error fetching doctors by specialty" });
    }
  });

  // ✅ Get specialty suggestions (autocomplete)
  app.get("/doctors/suggestions/:term", async (req, res) => {
    try {
      const { term } = req.params;

      const [rows] = await db.query(
        "SELECT DISTINCT specialty FROM railway.doctors_lnh WHERE specialty LIKE ? LIMIT 10",
        [`%${term}%`]
      );

      const suggestions = rows.map((row) => row.specialty);
      res.json(suggestions);
    } catch (err) {
      console.error("❌ Error fetching suggestions:", err);
      res.status(500).json({ message: "Error fetching suggestions" });
    }
  });

  // ✅ Signup (auth)
  app.post("/auth/signup", async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const [existingUser] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      await db.query(
        "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)",
        [name, email, phone, password]
      );

      res.status(201).json({ message: "Account created successfully" });
    } catch (err) {
      console.error("❌ Error during signup:", err);
      res.status(500).json({ message: "Error creating account" });
    }
  });

  // ✅ Get all specialties and counts
  app.get("/doctors/specialties", async (req, res) => {
    try {
      const [rows] = await db.query(`
        SELECT LOWER(TRIM(specialty)) AS name, COUNT(*) AS count
        FROM railway.doctors_lnh
        WHERE specialty IS NOT NULL AND TRIM(specialty) != ''
        GROUP BY LOWER(TRIM(specialty))
        ORDER BY name;
      `);

      const result = rows.map((r) => ({
        name: r.name
          .split(" ")
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" "),
        count: r.count,
      }));

      res.json(result);
    } catch (err) {
      console.error("❌ Error fetching specialties:", err);
      res.status(500).json({ message: "Error fetching specialties" });
    }
  });

  // ✅ Get total count of doctors
  app.get("/doctors/count", async (req, res) => {
    try {
      const [rows] = await db.query(
        "SELECT COUNT(*) AS DoctorCount FROM railway.doctors_lnh"
      );
      res.json({ DoctorCount: rows[0].DoctorCount });
    } catch (err) {
      console.error("❌ Error fetching doctor count:", err);
      res.status(500).json({ message: "Error fetching doctor count" });
    }
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
