import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarIcon, Clock, MapPin, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [consultType, setConsultType] = useState<"in-person" | "video">("in-person");
  const navigate = useNavigate();

  const handleBooking = () => {
    if (!selectedTime) {
      toast.error("Please select a time slot");
      return;
    }
    toast.success("Appointment booked successfully!");
    setTimeout(() => navigate("/patient/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="container py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-heading font-bold mb-2">Book Appointment</h1>
              <p className="text-muted-foreground">Choose your preferred date and time</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary-light text-primary text-xl font-bold">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">Dr. Sarah Johnson</h3>
                      <p className="text-muted-foreground">Cardiologist</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>New York, NY</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <Label>Consultation Type</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setConsultType("in-person")}
                        className={`p-4 rounded-lg border-2 transition-smooth ${
                          consultType === "in-person"
                            ? "border-primary bg-primary-light"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <MapPin className="h-5 w-5 mx-auto mb-2 text-primary" />
                        <p className="font-medium">In-Person</p>
                        <p className="text-xs text-muted-foreground">Visit clinic</p>
                      </button>
                      <button
                        onClick={() => setConsultType("video")}
                        className={`p-4 rounded-lg border-2 transition-smooth ${
                          consultType === "video"
                            ? "border-primary bg-primary-light"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Video className="h-5 w-5 mx-auto mb-2 text-primary" />
                        <p className="font-medium">Video Call</p>
                        <p className="text-xs text-muted-foreground">Online consult</p>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      Select Date
                    </Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-lg border shadow-soft p-3 pointer-events-auto"
                    />
                  </div>

                  <div className="space-y-4 mt-6">
                    <Label className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Available Time Slots
                    </Label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 text-sm font-medium rounded-lg border-2 transition-smooth ${
                            selectedTime === time
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Visit</Label>
                      <Textarea
                        id="reason"
                        placeholder="Briefly describe your symptoms or reason for consultation..."
                        rows={4}
                      />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24 space-y-6">
                  <h3 className="font-semibold text-lg">Booking Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Consultation Fee</span>
                      <span className="font-medium">$150</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service Fee</span>
                      <span className="font-medium">$10</span>
                    </div>
                    {date && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">{date.toLocaleDateString()}</span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type</span>
                      <Badge variant="secondary">
                        {consultType === "video" ? "Video Call" : "In-Person"}
                      </Badge>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold text-lg mb-6">
                      <span>Total</span>
                      <span className="text-primary">$160</span>
                    </div>

                    <Button 
                      onClick={handleBooking}
                      className="w-full bg-primary hover:bg-primary-glow"
                      size="lg"
                    >
                      Confirm Booking
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By booking, you agree to our terms and conditions
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
