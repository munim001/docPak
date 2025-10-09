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
    }
  };

  return (
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
