import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MelucaCare from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Palette, Scissors, Sparkles, Heart } from "lucide-react";
import AboutPage from "./pages/AboutPage";
import PreviousWorksPage from "./pages/PreviousWorksPage";
import ContactPage from "./pages/ContactPage";

const services = [
  {
    title: "Professional Makeup",
    description: "Expert makeup artistry for all occasions - weddings, events, photoshoots",
    icon: <Palette className="h-8 w-8" />,
    features: ["Bridal Makeup", "Event Makeup", "Photoshoot Ready", "Long-lasting"],
    popular: true,
  },
  {
    title: "Hair Salon",
    description: "Complete hair care services from cuts to styling and treatments",
    icon: <Scissors className="h-8 w-8" />,
    features: ["Hair Cuts", "Styling", "Treatments", "Color Services"],
  },
  {
    title: "Nail Care",
    description: "Professional manicure and pedicure services for beautiful hands and feet",
    icon: <Sparkles className="h-8 w-8" />,
    features: ["Manicure", "Pedicure", "Nail Art", "Gel Polish"],
  },
  {
    title: "Skin Care",
    description: "Rejuvenating treatments for healthy, glowing skin",
    icon: <Heart className="h-8 w-8" />,
    features: ["Facials", "Deep Cleansing", "Anti-aging", "Hydration"],
  },
];

function App() {
  return (
    <Router>
      <Navbar services={services} />
      <main>
        <Routes>

          {/* Meluca Care Demo */}
          <Route path="/" element={<MelucaCare />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/previousworks" element={<PreviousWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
