import { Card } from "@/components/ui/card";
// import {  Eye, Baby, Stethoscope, Activity, Pill } from "lucide-react";
import { Link } from "react-router-dom";
import skinDermatology from "@/assets/dermatology.svg";
import {
  Heart,
  Brain,
  Bone,
  Eye,
  Baby,
  Stethoscope,
  Pill,
  Activity,
  Hospital,
  Microscope,
  Syringe,
  FlaskRound,
  User,
  Radiation,
  Scissors,
  Droplets,
  // Lungs,
  // DNA,
  Shield,
  Sparkles,
  Bandage,
  Beaker,
  Thermometer,
  Wind,
  icons,
} from "lucide-react";

export const specialties = [
  { name: "All Specialties", icon: Stethoscope, count: "1200+ Doctors", color: "text-primary" },
  { name: "Cardiology", icon: Heart, count: "320+ Doctors", color: "text-red-500" },
  { name: "Neurology", icon: Brain, count: "180+ Doctors", color: "text-purple-500" },
  { name: "Orthopaedic Surgery", icon: Bone, count: "250+ Doctors", color: "text-blue-500" },
  { name: "Ophthalmology", icon: Eye, count: "140+ Doctors", color: "text-cyan-500" },
  { name: "Paediatric Medicine", icon: Baby, count: "290+ Doctors", color: "text-pink-500" },
  { name: "Internal Medicine", icon: Activity, count: "220+ Doctors", color: "text-orange-500" },
  { name: "Dermatology", image: skinDermatology, count: "160+ Doctors", color: "text-green-500" },
  { name: "Endocrinology", icon: FlaskRound, count: "100+ Doctors", color: "text-amber-500" },
  { name: "Gastroenterology", icon: Thermometer, count: "120+ Doctors", color: "text-yellow-600" },
  { name: "General Surgery", icon: Scissors, count: "200+ Doctors", color: "text-gray-600" },
  { name: "Obstetrics and Gynaecology", icon: Baby, count: "170+ Doctors", color: "text-pink-400" },
  { name: "Dentistry", icon: Bandage, count: "150+ Doctors", color: "text-indigo-500" },
  { name: "Psychiatry", icon: Brain, count: "110+ Doctors", color: "text-purple-400" },
  { name: "Radiology", icon: Radiation, count: "90+ Doctors", color: "text-gray-500" },
  { name: "Pulmonology", icon: Wind, count: "80+ Doctors", color: "text-sky-500" },
  { name: "Nephrology", icon: Droplets, count: "70+ Doctors", color: "text-blue-400" },
  { name: "Urology", icon: Droplets, count: "60+ Doctors", color: "text-teal-500" },
  { name: "Rheumatology", icon: Shield, count: "65+ Doctors", color: "text-emerald-500" },
  { name: "Haematology", icon: Droplets, count: "75+ Doctors", color: "text-red-400" },
  { name: "Oncology", icon: Beaker, count: "90+ Doctors", color: "text-rose-600" },
  { name: "Plastic Surgery", icon: Scissors, count: "85+ Doctors", color: "text-gray-700" },
  { name: "Emergency Medicine", icon: Hospital, count: "130+ Doctors", color: "text-rose-500" },
  { name: "Infectious Diseases", icon: Microscope, count: "100+ Doctors", color: "text-green-700" },
  { name: "Pathology", icon: Microscope, count: "110+ Doctors", color: "text-indigo-400" },
  { name: "Physiotherapy", icon: Activity, count: "90+ Doctors", color: "text-teal-400" },
  { name: "Speech and Occupational Therapy", icon: User, count: "60+ Doctors", color: "text-lime-600" },
  { name: "Rehabilitative Medicine", icon: Shield, count: "70+ Doctors", color: "text-emerald-600" },
  { name: "Pain Medicine – Anaesthesiology", icon: Syringe, count: "100+ Doctors", color: "text-amber-600" },
  { name: "Palliative Care", icon: Heart, count: "80+ Doctors", color: "text-rose-400" },
  { name: "Vascular Surgery", icon: Droplets, count: "95+ Doctors", color: "text-red-600" },
];


export const Specialties = () => {
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
            const Icon = specialty.icon;
            return (
              <Link key={specialty.name} to={`/search?specialty=${specialty.name}`}>
                <Card className="group cursor-pointer p-6 hover:shadow-medium transition-smooth border-2 hover:border-primary/50">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary-light group-hover:bg-primary group-hover:scale-110 transition-smooth">
                      {Icon ? (
                        <Icon
                          className={`h-8 w-8 ${specialty.color} group-hover:text-primary-foreground`}
                        />
                      ) : (
                        <img
                          src={specialty.image}
                          alt={specialty.name}
                          className="h-10 w-10 object-contain rounded-full"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                        {specialty.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{specialty.count}</p>
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
