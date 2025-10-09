import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Award, GraduationCap, Clock, Video, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const DoctorProfile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="border-b bg-background">
          <div className="container py-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-32 w-32 border-4 border-primary-light">
                  <AvatarImage src="" alt="Dr. Sarah Johnson" />
                  <AvatarFallback className="bg-primary-light text-primary text-3xl font-bold">
                    SJ
                  </AvatarFallback>
                </Avatar>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    <div className="mr-1.5 h-2 w-2 rounded-full bg-success" />
                    Available
                  </Badge>
                  <Badge variant="secondary">
                    <Video className="mr-1 h-3 w-3" />
                    Online
                  </Badge>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-3xl font-heading font-bold">Dr. Sarah Johnson</h1>
                  <p className="text-lg text-muted-foreground">Cardiologist</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-warning text-warning" />
                    <span className="font-semibold">4.9</span>
                    <span className="text-muted-foreground">(256 reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-5 w-5" />
                    <span>15 years experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>New York, NY</span>
                  </div>
                </div>

                <p className="text-muted-foreground max-w-3xl">
                  Board-certified cardiologist specializing in interventional cardiology and heart failure management. 
                  Committed to providing compassionate, evidence-based care to patients with cardiovascular conditions.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link to="/booking/1">
                    <Button size="lg" className="bg-primary hover:bg-primary-glow">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Appointment
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    <Video className="mr-2 h-5 w-5" />
                    Video Consult
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Education & Training</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex flex-col">
                    <span className="font-medium text-foreground">MD - Harvard Medical School</span>
                    <span className="text-sm">Graduated 2008</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium text-foreground">Residency - Johns Hopkins Hospital</span>
                    <span className="text-sm">Internal Medicine, 2008-2011</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium text-foreground">Fellowship - Mayo Clinic</span>
                    <span className="text-sm">Cardiology, 2011-2014</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Specializations</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Heart Failure", "Coronary Artery Disease", "Hypertension", "Arrhythmia", "Preventive Cardiology"].map((spec) => (
                    <Badge key={spec} variant="secondary">{spec}</Badge>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="availability">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Available Time Slots</h3>
                </div>
                <div className="space-y-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                    <div key={day} className="flex items-center justify-between p-4 rounded-lg border">
                      <span className="font-medium">{day}</span>
                      <div className="flex gap-2">
                        <Badge variant="outline">9:00 AM</Badge>
                        <Badge variant="outline">2:00 PM</Badge>
                        <Badge variant="outline">4:30 PM</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>P{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Patient {i}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      Dr. Johnson is an excellent cardiologist. Very thorough in her examination and takes time to explain everything clearly. Highly recommend!
                    </p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
