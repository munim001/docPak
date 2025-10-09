<<<<<<< HEAD
import { useState } from "react";
import { fetchDoctors } from "./../api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<any[]>([]);

  const handleFindDoctors = async () => {
    try {
      const data = await fetchDoctors();
      setDoctors(data);
    } catch (err) {
      console.error(err);
=======
import React, { useState } from "react";

function FindDoctors() {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5000/doctors");
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
>>>>>>> 67cfa2a (initial commit with frontend and backend)
    }
  };

  return (
<<<<<<< HEAD
    <div className="p-6">
      <Button onClick={handleFindDoctors}>Find Doctors</Button>

      <div className="grid gap-4 mt-6">
        {doctors.map((doc) => (
          <Card key={doc.id}>
            <CardContent className="p-4">
              <h3 className="font-bold">{doc.name}</h3>
              <p>{doc.specialty}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
=======
    <div>
      <button onClick={fetchDoctors}>Find Doctors</button>

      <ul>
        {doctors.map((doc) => (
          <li key={doc.id}>
            {doc.name} - {doc.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FindDoctors;
>>>>>>> 67cfa2a (initial commit with frontend and backend)
