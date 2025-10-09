import { Card } from "@/components/ui/card";
import { Search, Calendar, Video, FileText } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search for Doctors",
    description: "Browse through our extensive network of verified healthcare professionals by specialty, location, or availability.",
  },
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Select your preferred time slot from the doctor's real-time availability and instantly confirm your appointment.",
  },
  {
    icon: Video,
    title: "Consult Online or In-Person",
    description: "Meet your doctor through secure video consultation or visit the clinic based on your preference.",
  },
  {
    icon: FileText,
    title: "Get Prescription & Follow-up",
    description: "Receive digital prescriptions, medical records, and schedule follow-up appointments with ease.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-heading font-bold md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to get quality healthcare
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative p-6 shadow-soft hover:shadow-medium transition-smooth">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
