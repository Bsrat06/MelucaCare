"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  Scissors,
  Palette,
  Sparkles,
  Heart,
  Star,
  CheckCircle,
  Award,
  Users
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState('hair');

  const services = {
    hair: {
      title: "Hair Salon Services",
      description: "Professional hair care and styling services",
      icon: <Scissors className="h-8 w-8" />,
      items: [
        {
          title: "Haircuts & Styling",
          description: "Professional haircuts and styling for all hair types",
          price: "950 - 1,500 ETB",
          features: ["Women's Haircuts", "Kids' Haircuts", "Blowouts & Styling", "Iron Finish"]
        },
        {
          title: "Hair Coloring",
          description: "Expert coloring services with premium products",
          price: "2,500 - 12,000 ETB",
          features: ["Full Hair Color", "Highlights & Lowlights", "Balayage & Ombre", "Root Touch-Up"]
        },
        {
          title: "Hair Treatments",
          description: "Restorative treatments for healthy, beautiful hair",
          price: "500 - 10,000 ETB",
          features: ["Keratin Treatment", "Deep Conditioning", "Scalp Treatments", "Protein Treatment"]
        },
        {
          title: "Braiding & Protective Styles",
          description: "Traditional and modern protective styling",
          price: "500 - 3,000 ETB",
          features: ["Box Braids", "Cornrows", "Twists & Locs", "Kids Braiding"]
        },
        {
          title: "Hair Extensions",
          description: "Premium hair extensions for length and volume",
          price: "250 - 1,000 ETB",
          features: ["Clip-In Extensions", "Sew-In Weaves", "Custom Wigs", "Lace Fronts"]
        },
        {
          title: "Bridal & Event Styling",
          description: "Special occasion hair styling",
          price: "1,500 - 2,500 ETB",
          features: ["Bridal Hair", "Event Styling", "Traditional Styles", "Updos"]
        }
      ]
    },
    makeup: {
      title: "Makeup Services",
      description: "Professional makeup artistry for all occasions",
      icon: <Palette className="h-8 w-8" />,
      items: [
        {
          title: "Bridal Makeup",
          description: "Complete bridal makeup package",
          price: "3,000 - 5,000 ETB",
          features: ["Trial Session", "Day-of Service", "Traditional Styles", "Touch-up Kit"]
        },
        {
          title: "Event Makeup",
          description: "Glamorous makeup for special events",
          price: "2,000 - 3,500 ETB",
          features: ["Evening Glam", "Natural Look", "Photo Ready", "Long-lasting"]
        },
        {
          title: "Editorial Makeup",
          description: "Creative makeup for photoshoots",
          price: "2,500 - 4,000 ETB",
          features: ["Creative Designs", "High Fashion", "Character Makeup", "Special Effects"]
        }
      ]
    },
    nails: {
      title: "Nail Care Services",
      description: "Professional manicure and pedicure services",
      icon: <Sparkles className="h-8 w-8" />,
      items: [
        {
          title: "Classic Manicure",
          description: "Basic nail care and polish",
          price: "300 - 500 ETB",
          features: ["Nail Shaping", "Cuticle Care", "Hand Massage", "Standard Polish"]
        },
        {
          title: "Gel Manicure",
          description: "Long-lasting gel polish",
          price: "500 - 800 ETB",
          features: ["Gel Application", "2-3 Week Wear", "Strengthening", "Chip-resistant"]
        },
        {
          title: "Spa Pedicure",
          description: "Luxurious foot care treatment",
          price: "600 - 1,000 ETB",
          features: ["Foot Soak", "Exfoliation", "Foot Massage", "Callus Treatment"]
        }
      ]
    },
    skincare: {
      title: "Skin Care Services",
      description: "Professional facial and skin treatments",
      icon: <Heart className="h-8 w-8" />,
      items: [
        {
          title: "Basic Facial",
          description: "Cleansing and hydrating facial",
          price: "800 - 1,200 ETB",
          features: ["Deep Cleansing", "Exfoliation", "Extraction", "Hydration"]
        },
        {
          title: "Anti-Aging Treatment",
          description: "Rejuvenating facial treatment",
          price: "1,500 - 2,500 ETB",
          features: ["Collagen Boost", "Wrinkle Reduction", "Firmening", "Radiance"]
        },
        {
          title: "Acne Treatment",
          description: "Specialized acne care",
          price: "1,200 - 2,000 ETB",
          features: ["Deep Cleaning", "Medicated", "Soothing", "Prevention"]
        }
      ]
    }
  };

  const pricingTables = {
    hair: [
      { service: "Shampoo", price: "200 ETB" },
      { service: "Hair Treatments", price: "500 ETB" },
      { service: "Hair Cuts", price: "950 to 1,500 ETB" },
      { service: "Shampoo & Blowdry", price: "950+ ETB" },
      { service: "Iron Finish", price: "500 ETB" },
      { service: "Special Occasion Updo", price: "1,500 to 2,500 ETB" },
      { service: "Basic Braid", price: "500 ETB" },
      { service: "Single Braid Extensions", price: "250+ ETB" },
      { service: "Full Sew-in Extension", price: "850 ETB" },
      { service: "1/2 Sew-in Extension", price: "600 ETB" }
    ],
    color: [
      { service: "Hana", price: "850 ETB" },
      { service: "Shampoo Color", price: "400 ETB" },
      { service: "Single Application Color", price: "2,500+ ETB" },
      { service: "Full Highlights", price: "7,500+ ETB" },
      { service: "Partial Highlights", price: "4,000 ETB" },
      { service: "Framing Highlights", price: "2,500 ETB" },
      { service: "Balayage", price: "8,000 ETB" },
      { service: "Fashion Color", price: "7,500 ETB" },
      { service: "Corrective Color", price: "10,000 ETB" }
    ],
    texture: [
      { service: "Virgin relaxer", price: "700 ETB" },
      { service: "Retouch relaxer", price: "400 ETB" }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-800">
              Premium Beauty Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of professional beauty services designed to enhance your natural beauty and boost your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <a href="https://calendly.com/melucacare">
                  Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50" asChild>
                <a href="#pricing">
                  View Pricing
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
              <TabsList className="flex flex-wrap md:grid md:grid-cols-4 mb-12 bg-emerald-50 p-1 rounded-xl">
                {Object.entries(services).map(([key, service]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm rounded-lg flex-1 md:flex-none"
                  >
                    <div className="flex items-center gap-2 py-2">
                      {service.icon}
                      <span className="hidden sm:inline">{service.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(services).map(([key, service]) => (
                <TabsContent key={key} value={key} className="mt-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-800">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {service.items.map((item, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow group border-0 shadow-md">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                          <CardDescription className="text-gray-600">{item.description}</CardDescription>
                          <div className="text-2xl font-bold text-emerald-600 mt-2">{item.price}</div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mb-6">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                            <a href="https://calendly.com/melucacare">Book This Service</a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Pricing Tables */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Detailed Pricing</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transparent pricing for all our hair services. All prices are in Ethiopian Birr.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(pricingTables).map(([category, items]) => (
                <Card key={category} className="border-0 shadow-lg">
                  <CardHeader className="bg-emerald-600 text-white rounded-t-lg">
                    <CardTitle className="text-xl capitalize">{category} Services</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-200">
                      {items.map((item, index) => (
                        <div key={index} className="p-4 flex justify-between items-center">
                          <span className="text-gray-700">{item.service}</span>
                          <span className="font-semibold text-emerald-600">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Meluca Care?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference of premium beauty services in Addis Ababa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                    <Award className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Stylists</h3>
                <p className="text-gray-600">Our skilled professionals stay updated with the latest techniques and trends.</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                    <Star className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
                <p className="text-gray-600">We use only high-quality, hair-friendly products to keep your hair healthy.</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                    <Users className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customized Experience</h3>
                <p className="text-gray-600">Personalized services tailored to your preferences and style.</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                    <Sparkles className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Luxurious Atmosphere</h3>
                <p className="text-gray-600">Enjoy a relaxing, stress-free experience in our modern salon.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Look?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Book your appointment today and experience the Meluca Care difference. Your journey to beautiful hair starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
                <a href="https://calendly.com/melucacare">
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white/10" asChild>
                <a href="tel:0930963333">
                  Call Us: 093 096 3333
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;