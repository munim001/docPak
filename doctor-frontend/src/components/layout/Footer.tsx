import { Link } from "react-router-dom";
import { Heart, Hospital, Mail, MapPin, Phone } from "lucide-react";
import hospital from "@/assets/Doctors_Pak_logo.jpg";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
               <img 
                src={hospital} 
                alt="DocPak Logo" 
                className="h-14 w-15 object-cover rounded-full shadow-md border border-gray-300"
              />
              <span className="text-xl font-heading font-bold">DocPak</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for quality healthcare. Book appointments with top doctors instantly.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">Home</Link></li>
              <li><Link to="/search" className="text-muted-foreground hover:text-primary transition-smooth">Find Doctors</Link></li>
              <li><Link to="/specialties" className="text-muted-foreground hover:text-primary transition-smooth">Specialties</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-smooth">Health Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">For Doctors</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/doctors/register" className="text-muted-foreground hover:text-primary transition-smooth">Join as Doctor</Link></li>
              <li><Link to="/doctors/login" className="text-muted-foreground hover:text-primary transition-smooth">Doctor Login</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-smooth">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">Decent Towers, Gulistan e Johar Bl-15</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+92 (308) 211-1101</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">doctorzpak@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DocPak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
