import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search as SearchIcon, Filter } from "lucide-react";
import {
  fetchDoctors,
  fetchDoctorsBySpecialty,
  fetchSpecialtySuggestions,
} from "@/api";

const specialties = [
  "All Specialties",
  "Cardiology",
  "Neurology",
  "Orthopaedic Surgery",
  "Ophthalmology",
  "Paediatric Medicine",
  "Internal Medicine",
  "Dermatology",
  "Endocrinology",
  "Gastroenterology",
  "General Surgery",
  "Obstetrics and Gynaecology",
  "Dentistry",
  "Psychiatry",
  "Radiology",
  "Pulmonology",
  "Nephrology",
  "Urology",
  "Rheumatology",
  "Haematology",
  "Oncology",
  "Plastic Surgery",
  "Emergency Medicine",
  "Infectious Diseases",
  "Pathology",
  "Physiotherapy",
  "Speech and Occupational Therapy",
  "Rehabilitative Medicine",
  "Pain Medicine – Anaesthesiology",
  "Palliative Care",
  "Vascular Surgery",
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔍 autocomplete
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // ✅ Fetch doctors (all or by specialty)
  useEffect(() => {
    const loadDoctors = async () => {
      setLoading(true);
      try {
        const specialty = searchParams.get("specialty");
        let data;

        if (specialty && specialty !== "All Specialties") {
          setSelectedSpecialty(specialty);
          data = await fetchDoctorsBySpecialty(specialty);
        } else {
          data = await fetchDoctors();
        }

        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDoctors();
  }, [searchParams]);

  // 🧠 handle typing in search bar
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 1) {
      try {
        const results = await fetchSpecialtySuggestions(value);
        setSuggestions(results);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  // ✅ Filter doctors locally (after fetching)
  const filteredDoctors = doctors.filter((doc) => {
    const matchesSpecialty =
      selectedSpecialty === "All Specialties" ||
      doc.specialty?.toLowerCase() === selectedSpecialty.toLowerCase();

    const matchesSearch =
      doc.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="border-b bg-background">
          <div className="container py-8 space-y-6">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">
                Find Your Doctor
              </h1>
              <p className="text-muted-foreground">
                Search from {doctors.length}+ verified healthcare professionals
              </p>
            </div>

            {/* 🔍 Search Bar + Filters */}
            <div className="flex flex-col md:flex-row gap-4 relative">
              {/* Search input */}
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by doctor name or specialty..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 h-12"
                />

                {/* 🧩 Autocomplete dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-20 mt-1 w-full bg-white shadow-lg border rounded-md">
                    {suggestions.map((s, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 hover:bg-primary-light cursor-pointer"
                        onClick={() => {
                          setSearchQuery(s);
                          setSelectedSpecialty(s);
                          setShowSuggestions(false);
                          navigate(`/search?specialty=${s}`);
                        }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialty dropdown */}
              <Select
                value={selectedSpecialty}
                onValueChange={(value) => {
                  setSelectedSpecialty(value);
                  navigate(`/search?specialty=${value}`);
                }}
              >
                <SelectTrigger className="w-[250px] h-12">
                  <SelectValue placeholder="Select Specialty" />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {specialties.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Filters button */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow md:w-auto"
              >
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* 🩺 Doctor Cards */}
        <div className="container py-8">
          {loading ? (
            <p>Loading doctors...</p>
          ) : filteredDoctors.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">No doctors found.</p>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredDoctors.length} doctors
                </p>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
                    <SelectItem value="availability">
                      Next Available
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} {...doctor} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
