// src/api.ts
import axios from "axios";

const API_BASE = "https://docpak-production.up.railway.app";
// const API_BASE = "http://127.0.0.1:8080";

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

// Fetch doctor counts by specialty
export const fetchSpecialties = async () => {
  const res = await axios.get(`${API_BASE}/doctors/specialties`);
  return res.data; // [{ name: string, count: number }, ... ]
};

// Fetch total doctor count
export const fetchDoctorCount = async () => {
   const res = await axios.get(`${API_BASE}/doctors/count`);
  //  const res = await axios.get(`127.0.0.1:8080/doctors/count`);
  return res.data; // { DoctorCount: number }
};
