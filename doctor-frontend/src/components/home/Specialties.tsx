import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { fetchDoctorCounts } from "@/api";

// ✅ Import icons
import {
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Stethoscope,
  Activity,
  Thermometer,
  Scissors,
  FlaskRound,
  Bandage,
  Microscope,
  Shield,
  Droplets,
  Wind,
  Hospital,
  Beaker,
  Syringe,
  User,
  Radiation,
} from "lucide-react";

import skinDermatology from "@/assets/skin.png"; // your custom dermatology image

export const Specialties = () => {
  const [specialties, setSpecialties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Map icons/images by specialty name
  const iconMap: Record<string, any> = {
    cardiology: Heart,
    neurology: Brain,
    orthopaedic: Bone,
    ophthalmology: Eye,
    paediatric: Baby,
    general: Stethoscope,
    dermatology: skinDermatology, // image
    internal: Activity,
    endocrinology: FlaskRound,
    gastroenterology: Thermometer,
    "general surgery": Scissors,
    dentistry: Bandage,
    psychiatry: Brain,
    radiology: Radiation,
    pulmonology: Wind,
    nephrology: Droplets,
    urology: Droplets,
    rheumatology: Shield,
    haematology: Droplets,
    oncology: Beaker,
    "plastic surgery": Scissors,
    "emergency medicine": Hospital,
    "infectious diseases": Microscope,
    pathology: Microscope,
    physiotherapy: Activity,
    "speech and occupational therapy": User,
    "rehabilitative medicine": Shield,
    "pain medicine – anaesthesiology": Syringe,
    "palliative care": Heart,
    "vascular surgery": Droplets,
  };

  useEffect(() => {
    const loadSpecialties = async () => {
      setLoading(true);
      try {
        const data = await fetchDoctorCounts();
        setSpecialties(data);
      } catch (err) {
        console.error("Error fetching specialties:", err);
      } finally {
        setLoading(false);
      }
    };

    loadSpecialties();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading specialties...</p>;

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-heading font-bold md:text-4xl lg:text-5xl">
            Browse by Specialty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find expert doctors across various medical specialties
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty) => {
            const key = specialty.name.toLowerCase();
            const IconOrImg = iconMap[key];

            return (
              <Link key={specialty.name} to={`/search?specialty=${specialty.name}`}>
                <Card className="group cursor-pointer p-6 hover:shadow-medium transition-smooth border-2 hover:border-primary/50">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary-light group-hover:bg-primary group-hover:scale-110 transition-smooth">
                      {typeof IconOrImg === "string" ? (
                        <img
                          src={IconOrImg}
                          alt={specialty.name}
                          className="h-8 w-8 object-contain"
                        />
                      ) : IconOrImg ? (
                        <IconOrImg className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                      ) : (
                        <Stethoscope className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                        {specialty.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {specialty.count}+ Doctors
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
