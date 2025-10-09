import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Target, Users, Award, Shield, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl font-heading font-bold md:text-5xl lg:text-6xl">
                About DocPak

              </h1>
              <p className="text-lg text-muted-foreground">
                Transforming healthcare access with technology. Connecting patients with 
                trusted doctors for better health outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary-light">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold md:text-4xl">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground">
                  To make quality healthcare accessible to everyone by connecting patients 
                  with verified medical professionals through a seamless digital platform.
                </p>
                <p className="text-muted-foreground">
                  We believe that finding the right doctor and booking an appointment 
                  should be simple, transparent, and instant. Our platform eliminates the 
                  traditional barriers of healthcare access, bringing together patients and 
                  doctors in a trusted environment.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Card className="p-6 space-y-3">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-xl">50,000+</h3>
                  <p className="text-sm text-muted-foreground">Patients Trust Us</p>
                </Card>
                <Card className="p-6 space-y-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-xl">2,000+</h3>
                  <p className="text-sm text-muted-foreground">Verified Doctors</p>
                </Card>
                <Card className="p-6 space-y-3">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-xl">4.8/5</h3>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </Card>
                <Card className="p-6 space-y-3">
                  <Clock className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-xl">24/7</h3>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-heading font-bold md:text-4xl">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Trust & Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Every doctor is thoroughly verified with credentials checked and 
                  background screened to ensure patient safety.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Patient First</h3>
                <p className="text-sm text-muted-foreground">
                  Your health and convenience come first. We design every feature with 
                  the patient experience in mind.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest standards of quality in our platform, services, 
                  and partner network.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Healthcare should be accessible to all. We work to remove barriers and 
                  make quality care available everywhere.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  We value your time. Our platform is designed for quick, seamless 
                  interactions from search to consultation.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We continuously improve and innovate to provide better healthcare 
                  solutions and experiences.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-heading font-bold md:text-4xl text-center">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MediCare was founded in 2020 with a simple vision: make healthcare 
                  accessible to everyone. Our founders experienced firsthand the 
                  frustrations of finding quality doctors, booking appointments, and 
                  managing healthcare needs in a digital age that still relied on 
                  outdated systems.
                </p>
                <p>
                  What started as a small team of developers and healthcare professionals 
                  has grown into a comprehensive platform serving thousands of patients 
                  and doctors across the country. We've built partnerships with leading 
                  medical institutions, integrated cutting-edge technology, and maintained 
                  our commitment to patient-first care.
                </p>
                <p>
                  Today, MediCare continues to innovate in the healthcare space, adding 
                  new features like telemedicine, prescription management, and health 
                  records integration. But our core mission remains the same: connecting 
                  patients with the right care at the right time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );

}
