// src/api.ts
import axios from "axios";

const API_BASE = "http://localhost:5000";

// Fetch all doctors
export const fetchDoctors = async () => {
  const res = await axios.get(`${API_BASE}/doctors`);
  return res.data;
};

// Fetch doctors by specialty
export const fetchDoctorsBySpecialty = async (specialty: string) => {
  const res = await axios.get(`${API_BASE}/doctors/specialty/${specialty}`);
  return res.data;
};

export const fetchSpecialtySuggestions = async (term: string) => {
  if (!term.trim()) return [];
  const res = await axios.get(`${API_BASE}/doctors/suggestions/${term}`);
  return res.data;
};

