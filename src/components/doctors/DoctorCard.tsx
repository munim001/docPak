import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, Clock, Video } from "lucide-react";
import { Link } from "react-router-dom";

interface DoctorCardProps {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: string;
  location: string;
  nextAvailable: string;
  image?: string;
  isOnline?: boolean;
}

export const DoctorCard = ({
  id,
  name,
  specialty,
  rating,
  reviews,
  experience,
  location,
  nextAvailable,
  image,
  isOnline,
}: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-medium transition-smooth">
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            <Avatar className="h-20 w-20 border-2 border-primary-light">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback className="bg-primary-light text-primary text-lg font-semibold">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            {isOnline && (
              <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-background bg-success" />
            )}
          </div>

          <div className="flex-1 space-y-2">
            <div>
              <Link to={`/doctor/${id}`}>
                <h3 className="font-semibold text-lg hover:text-primary transition-smooth">
                  {name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground">{specialty}</p>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-medium">{rating}</span>
                <span className="text-muted-foreground">({reviews})</span>
              </div>
              <span className="text-muted-foreground">{experience}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Next available:</span>
            </div>
            <Badge variant="secondary" className="font-medium">
              {nextAvailable}
            </Badge>
          </div>

          <div className="flex gap-2">
            <Link to={`/booking/${id}`} className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary-glow">
                Book Appointment
              </Button>
            </Link>
            {isOnline && (
              <Button variant="outline" size="icon">
                <Video className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
