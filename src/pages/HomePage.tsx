"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Scissors,
  Palette,
  Sparkles,
  Star,
  Award,
  Users,
  Heart,
} from "lucide-react"
import { cn } from "@/lib/utils"

const MelucaCare = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      name: "Qabso K.",
      content:
        "Wanted to give credit where credit is due because every time I come see Meluca, she never disappoints me! I am very happy with my results EVERY TIME! The vibe in the salon is very enjoyable as well!",
      image: "/melucacare/testimonials/Qabso.png",
      rating: 5,
      service: "Hair & Makeup",
    },
    {
      name: "Mahilet G.",
      content:
        "If you're looking for the best in hair and makeup artistry, look no further than this incredible hairstylist! From the moment you sit in their chair, you're greeted with a warm and welcoming energy.",
      image: "/melucacare/testimonials/mahilet.png",
      rating: 5,
      service: "Makeup Artistry",
    },
    {
      name: "Deebisaa F.",
      content:
        "This Salon is the best one I've been to for years. Excellent staff, service and I always love my haircut every time. My first visit today was wonderful. Everybody was pleasant and professional.",
      image: "/melucacare/beautiful-african-woman-salon-client.png",
      rating: 5,
      service: "Hair Salon",
    },
  ]

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
  ]

  const stats = [
    { number: "2,000+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "4.9", label: "Average Rating", icon: <Star className="h-6 w-6" /> },
    { number: "100%", label: "Satisfaction Rate", icon: <Heart className="h-6 w-6" /> },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16 md:pt-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 transition-transform duration-1000"
            style={{ backgroundImage: "url('/melucacare/DJI_0169-scaled.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>
          

          <div
            className={cn(
              "container mx-auto px-4 relative z-10 text-center text-white transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Badge className="mb-4 sm:mb-6 bg-emerald-600/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
              ✨ Premium Beauty Experience in Addis Ababa
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
              Beauty <span className="text-emerald-400">Transforms</span>
              <br className="hidden sm:inline" />
              <span className="text-2xl md:text-4xl font-light">Lives</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
              Experience world-class beauty services at Ethiopia's premier salon. Where artistry meets luxury, and every
              visit leaves you glowing with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://calendly.com/melucacare">
                  Book Your Transformation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                asChild
              >
                <a href="/services">Explore Services</a>
              </Button>
            </div>
          </div>
        </section>

        

        {/* Stats Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">About Meluca Care</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                  Where <span className="text-emerald-600">Beauty</span> Meets
                  <br className="hidden md:block" />
                  Excellence
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Located in the heart of Addis Ababa, Meluca Care has been transforming lives through the art of beauty
                  for over three years. We believe that true beauty comes from confidence, and our mission is to help
                  every client discover their most radiant self.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of expert stylists and beauty professionals brings international standards to Ethiopia,
                  offering personalized services that celebrate your unique beauty while incorporating the latest trends
                  and techniques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href="https://calendly.com/melucacare">
                      Book Your Appointment <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                    asChild
                  >
                    <a href="/previouswork">View Our Work</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <img
                    src="/melucacare/luxury-beauty-salon-interior-modern-elegant.png"
                    alt="Salon Interior"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src="/melucacare/professional-makeup-artist-working-client.png"
                    alt="Makeup Service"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-12">
                  <img
                    src="/melucacare/hair-styling-professional-salon-service.png"
                    alt="Hair Styling"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src="/melucacare/nail-care-manicure-professional-service.png"
                    alt="Nail Care"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">Our Services</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Premium Beauty Services</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of beauty services, each designed to enhance your natural radiance and
                boost your confidence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white"
                >
                  <CardHeader className="text-center pb-4">
                    {service.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white">
                        Most Popular
                      </Badge>
                    )}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-emerald-100 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors duration-300 bg-transparent"
                      asChild
                    >
                      <a href="/services">Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        

        {/* Testimonials Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="mb-4 bg-emerald-600 text-white">Client Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Clients Say</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our satisfied clients have to say about their
                transformative experiences at Meluca Care
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 text-8xl text-emerald-100 font-serif mt-4 ml-4 select-none">"</div>
                <div className="absolute bottom-0 right-0 text-8xl text-emerald-100 font-serif mb-4 mr-4 rotate-180 select-none">
                  "
                </div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg md:text-2xl text-gray-700 mb-6 italic leading-relaxed text-center">
                    {testimonials[activeTestimonial].content}
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full mr-4 object-cover shadow-lg"
                    />
                    <div className="text-center">
                      <p className="font-semibold text-lg">{testimonials[activeTestimonial].name}</p>
                      <p className="text-emerald-600 font-medium">{testimonials[activeTestimonial].service}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-4 h-4 rounded-full transition-all duration-300",
                      index === activeTestimonial ? "bg-emerald-600 scale-125" : "bg-emerald-300 hover:bg-emerald-400",
                    )}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        

        {/* Contact & Hours Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">Get In Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Visit Our Salon</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to transform your look? Contact us today or visit our beautiful salon in Addis Ababa
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Salon Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-emerald-50 rounded-2xl">
                    <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 mr-4 mt-1">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Our Location</h4>
                      <p className="text-gray-600 leading-relaxed">
                        2Q79+CM8, Guinea Conakry St, Addis Ababa 9568
                        <br />
                        Kazanchis, Opposite to Elilly Hotel, 1st Floor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start p-6 bg-emerald-50 rounded-2xl">
                    <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 mr-4 mt-1">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Opening Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-emerald-600 mt-1">Walk-ins welcome, appointments preferred</p>
                    </div>
                  </div>
                  <div className="flex items-start p-6 bg-emerald-50 rounded-2xl">
                    <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 mr-4 mt-1">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Contact Details</h4>
                      <p className="text-gray-600 mb-2">
                        Phone:{" "}
                        <a href="tel:0930963333" className="text-emerald-600 hover:text-emerald-700 font-medium">
                          093 096 3333
                        </a>
                      </p>
                      <p className="text-gray-600">
                        Email:{" "}
                        <a
                          href="mailto:hello@meluca251.com"
                          className="text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          hello@meluca251.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
                <Card className="shadow-xl border-0">
                  <CardContent className="p-6 md:p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          placeholder="Your phone number"
                          className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm font-medium">
                          Service Interest
                        </Label>
                        <Input
                          id="service"
                          placeholder="Which service are you interested in?"
                          className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your beauty goals..."
                          rows={4}
                          className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MelucaCare