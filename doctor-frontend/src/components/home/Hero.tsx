import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroImage from "@/assets/main_banner.jpg";
import { fetchDoctorCount } from "@/api";
import { useEffect, useState } from "react";

export const Hero = () => {

  const [doctorCount, setDoctorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

     const loadDoctorCount = async () => {
      try {
        const data = await fetchDoctorCount();
        setDoctorCount(data.DoctorCount);
      } catch (err) {
        console.error("Error fetching doctor count:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDoctorCount();
  }, []);


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAxNjYsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="container relative">
        <div className="grid gap-12 py-12 md:py-20 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in text-center sm:text-left">
            <div className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs sm:text-sm font-medium text-primary">
              ✨ Trusted by 50,000+ Patients
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Find & Book <span className="text-gradient">Top Doctors</span> Near You
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto sm:mx-0">
              Access quality healthcare instantly. Browse specialists, check availability, and book appointments in seconds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to="/search">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-glow shadow-medium">
                  <Search className="mr-2 h-5 w-5" />
                  Find Doctors
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-6 pt-6">
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-foreground">{doctorCount}+</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-foreground">50,000+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl hidden lg:block" />
            <img 
              src={heroImage} 
              alt="Healthcare professionals" 
              className="relative rounded-2xl shadow-glow object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
