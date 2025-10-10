// src/index.js
import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors()); // allow all origins for testing
app.use(express.json()); // parse application/json

app.get("/", (req, res) => {
  res.send("Doctor Appointment API is running...");
});

connectDB().then(async (db) => {
  try {
    const [rows] = await db.query("SHOW TABLES"); // test query
    console.log("📂 Tables in DB:", rows);
  } catch (err) {
    console.error("❌ Test query failed:", err.message);
  }

  // ✅ Doctors API 
  // --- Get All Doctors ---
  app.get("/doctors", async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM doctors_lnh");
      res.json(rows);
    } catch (err) {
      console.error("❌ Error fetching doctors:", err);
      res.status(500).json({ message: "Error fetching doctors" });
    }
  });

  // --- Get Doctors by Specialty ---
  app.get("/doctors/specialty/:specialty", async (req, res) => {
    try {
      const { specialty } = req.params;
      const [rows] = await db.query(
        "SELECT * FROM doctors_lnh WHERE specialty = ?",
        [specialty]
      );

      if (rows.length === 0) {
        return res.status(404).json({ message: "No doctors found for this specialty" });
      }

      res.json(rows);
    } catch (err) {
      console.error("❌ Error fetching doctors by specialty:", err);
      res.status(500).json({ message: "Error fetching doctors by specialty" });
    }
  });

  // In your index.js
// ✅ Get specialty suggestions (autocomplete)
app.get("/doctors/suggestions/:term", async (req, res) => {
  try {
    const { term } = req.params;

    // MySQL query to find specialties that match user input
    const [rows] = await db.query(
      "SELECT DISTINCT specialty FROM doctors_lnh WHERE specialty LIKE ? LIMIT 10",
      [`%${term}%`]
    );

    // Convert to simple array of strings
    const suggestions = rows.map((row) => row.specialty);

    res.json(suggestions);
  } catch (err) {
    console.error("❌ Error fetching suggestions:", err);
    res.status(500).json({ message: "Error fetching suggestions" });
  }
});



  app.post("/auth/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const [existingUser] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
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


// ✅ Get count of doctors by specialty
app.get("/doctors/count-by-specialty", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT specialty, COUNT(*) AS count
      FROM railway.doctors_lnh
      GROUP BY specialty
      ORDER BY specialty;
    `);

    res.json(rows);
  } catch (err) {
    console.error("❌ Error fetching doctor counts:", err);
    res.status(500).json({ message: "Error fetching doctor counts" });
  }
});


  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
