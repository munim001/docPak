import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hospital, Menu, X, User } from "lucide-react";
import hospital from "@/assets/Doctors_Pak_logo.jpg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
       <Link to="/" className="flex items-center space-x-2">
          <img 
            src={hospital} 
            alt="DocPak Logo" 
            className="h-14 w-15 object-cover rounded-full shadow-md border border-gray-300"
          />
          <span className="text-xl font-heading font-bold text-foreground">DocPak</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Home
          </Link>
          <Link to="/search" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Find Doctors
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Sign In Button (Desktop only) */}
          <Link to="/auth/login" className="hidden md:flex">
            <Button variant="ghost" size="sm">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </Link>

          {/* Get Started Button */}
          <Link to="/auth/signup">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-glow">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/search"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link to="/auth/login" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full">
                <User className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
