import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { fetchSpecialties } from "@/api";

// lucide icons
import {
  Heart, Brain, Bone, Eye, Baby, Stethoscope, Activity,Ear,
  Thermometer, Scissors, FlaskRound, Bandage, Microscope,
  Shield, Droplet, Wind, Hospital, Beaker, Syringe, User, Radiation
} from "lucide-react";

import skinImg from "@/assets/skin.png"; // dermatology image (optional)
import anesthesia from "@/assets/anesthesia.png"; // anesthesia image (optional)

type SpecialtyItem = { name: string; count: number };

const toKey = (s: string) => s.trim().toLowerCase();

// map normalized name => icon component or image path
const iconMap: Record<string, any> = {
  cardiology: Heart,
  cardiologist: Heart,
  neurology: Brain,
  neurosurgery: Brain,
  orthopaedic: Bone,
  "orthopaedic surgery": Bone,
  ophthalmology: Eye,
  pediatrics: Baby,
  "paediatric medicine": Baby,
  paediatric: Baby,
  pediatric: Baby,
  general: Stethoscope,
  "general medicine": Stethoscope,
  dermatology: skinImg, // image
  dermatologists: skinImg,
  internal: Activity,
  "internal medicine": Activity,
  endocrinology: FlaskRound,
  gastroenterology: Thermometer,
  "general surgery": Scissors,
  dentistry: Bandage,
  psychiatry: Brain,
  radiology: Radiation,
  pulmonology: Wind,
  nephrology: Droplet,
  urology: Droplet,
  rheumatology: Shield,
  haematology: Droplet,
  oncology: Beaker,
  "plastic surgery": Scissors,
  "emergency medicine": Hospital,
  "infectious diseases": Microscope,
  pathology: Microscope,
  physiotherapy: Activity,
  "speech and occupational therapy": User,
  "rehabilitative medicine": Shield,
  "pain medicine": Syringe,
  "palliative care": Heart,
  "vascular surgery": Droplet,
  "ent surgery": Ear,
  anaesthesiology: anesthesia, // image
};

export const Specialties = () => {
  const [specialties, setSpecialties] = useState<SpecialtyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchSpecialties();
        // defensively normalize response shape
        const normalized = (data || []).map((d: any) => ({
          name: (d.name || "").toString(),
          count: Number(d.count || 0),
        }));
        setSpecialties(normalized);
      } catch (err) {
        console.error(err);
        setError("Failed to load specialties.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading specialties…</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;
  if (specialties.length === 0) return <p className="text-center mt-8">No specialties found.</p>;

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
          {specialties.map((s) => {
            const key = toKey(s.name);
            const IconOrImg = iconMap[key];
            const countText = s.count > 0 ? `${s.count} Doctors` : "No Doctors";

            return (
              <Link key={s.name} to={`/search?specialty=${encodeURIComponent(s.name)}`}>
                <Card className="group cursor-pointer p-6 hover:shadow-medium transition-smooth border-2 hover:border-primary/50">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary-light group-hover:bg-primary group-hover:scale-110 transition-smooth">
                      {typeof IconOrImg === "string" ? (
                        <img src={IconOrImg} alt={s.name} className="h-8 w-8 object-contain" />
                      ) : IconOrImg ? (
                        <IconOrImg className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                      ) : (
                        // fallback icon
                        <Stethoscope className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                        {s.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {countText}
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
