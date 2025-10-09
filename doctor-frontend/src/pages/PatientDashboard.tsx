import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Video, FileText, Download, X } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "Today",
    time: "2:00 PM",
    type: "video",
    status: "confirmed",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Neurologist",
    date: "Tomorrow",
    time: "10:00 AM",
    type: "in-person",
    status: "confirmed",
  },
];

const pastAppointments = [
  {
    id: 3,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    date: "May 15, 2024",
    time: "3:00 PM",
    type: "in-person",
    status: "completed",
  },
];

const PatientDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">My Dashboard</h1>
            <p className="text-muted-foreground">Manage your appointments and health records</p>
          </div>

          <div className="grid gap-6 mb-8 md:grid-cols-3">
            <Card className="p-6 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
              <div className="space-y-2">
                <p className="text-sm opacity-90">Upcoming Appointments</p>
                <p className="text-4xl font-bold">{upcomingAppointments.length}</p>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-success to-success/80 text-white">
              <div className="space-y-2">
                <p className="text-sm opacity-90">Completed Visits</p>
                <p className="text-4xl font-bold">{pastAppointments.length}</p>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-warning to-warning/80 text-white">
              <div className="space-y-2">
                <p className="text-sm opacity-90">Health Records</p>
                <p className="text-4xl font-bold">5</p>
              </div>
            </Card>
          </div>

          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Appointments</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary-light text-primary text-xl font-bold">
                          {appointment.doctor.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{appointment.time}</span>
                          </div>
                          <Badge variant="secondary">
                            {appointment.type === "video" ? (
                              <><Video className="mr-1 h-3 w-3" /> Video Call</>
                            ) : (
                              <><MapPin className="mr-1 h-3 w-3" /> In-Person</>
                            )}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {appointment.type === "video" && (
                        <Button className="bg-primary hover:bg-primary-glow">
                          <Video className="mr-2 h-4 w-4" />
                          Join Call
                        </Button>
                      )}
                      <Button variant="outline">
                        Reschedule
                      </Button>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

              {upcomingAppointments.length === 0 && (
                <Card className="p-12 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="font-semibold text-lg mb-2">No upcoming appointments</h3>
                  <p className="text-muted-foreground mb-6">Book your first appointment with our expert doctors</p>
                  <Link to="/search">
                    <Button className="bg-primary hover:bg-primary-glow">
                      Find Doctors
                    </Button>
                  </Link>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              {pastAppointments.map((appointment) => (
                <Card key={appointment.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary-light text-primary text-xl font-bold">
                          {appointment.doctor.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg">{appointment.doctor}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{appointment.time}</span>
                          </div>
                          <Badge variant="secondary" className="bg-success/10 text-success">
                            Completed
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        View Report
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Link to={`/booking/${appointment.id}`}>
                        <Button className="bg-primary hover:bg-primary-glow">
                          Book Again
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PatientDashboard;
