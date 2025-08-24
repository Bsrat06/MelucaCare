"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  Heart,
  CheckCircle,
  Shield,
  Gem,
  Sparkle,
} from "lucide-react"
import { cn } from "@/lib/utils"

const AboutPage = () => {
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

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every service, ensuring exceptional results that exceed expectations.",
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: "Innovation",
      description: "Staying ahead of beauty trends with the latest techniques and premium products from around the world.",
      icon: <Sparkle className="h-8 w-8" />,
    },
    {
      title: "Care",
      description: "Your comfort and satisfaction are our top priorities, with personalized attention to your unique needs.",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      title: "Integrity",
      description: "Honest recommendations, transparent pricing, and ethical practices in everything we do.",
      icon: <Shield className="h-8 w-8" />,
    },
  ]

  const teamMembers = [
    {
      name: "Melat Founder",
      role: "Lead Stylist & Founder",
      image: "/melucacare/about/Screenshot 2025-08-24 182326.png",
      specialties: ["Bridal Makeup", "Hair Coloring", "Special Events"],
      experience: "15+ years",
    },
    {
      name: "Sarah M.",
      role: "Senior Hair Specialist",
      image: "/melucacare/hair-stylist-professional-portrait.png",
      specialties: ["Hair Extensions", "Protective Styles", "Chemical Treatments"],
      experience: "6+ years",
    },
    {
      name: "Liya T.",
      role: "Skincare Expert",
      image: "/melucacare/skincare-specialist-portrait.png",
      specialties: ["Facials", "Skin Analysis", "Treatment Plans"],
      experience: "5+ years",
    },
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
        <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16 md:pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 transition-transform duration-1000"
            style={{ backgroundImage: "url('/melucacare/luxury-beauty-salon-interior-modern-elegant.png')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>

          <div
            className={cn(
              "container mx-auto px-4 relative z-10 text-center text-white transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <Badge className="mb-6 bg-emerald-600/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              About <span className="text-emerald-400">Meluca Care</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
              Ethiopia's premier beauty destination where elegance meets expertise, and every client becomes family.
            </p>
          </div>
        </section>

        

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="space-y-6">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Our Journey</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                  The Best Beauty Salon in <span className="text-emerald-600">Addis Ababa</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Welcome to Meluca Care, your premier beauty salon in Addis Ababa, where elegance meets expertise.
                  We specialize in makeup, hair care, skin care, and manicure & pedicure services, providing top-tier
                  beauty treatments that enhance your natural glow.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Meluca Care, we believe that beauty is more than just looking good—it's about feeling confident,
                  empowered, and comfortable in your own skin. That's why our team of highly skilled professionals is
                  dedicated to delivering exceptional beauty services tailored to your needs.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-700 mb-2">3+</div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-700 mb-2">500+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/melucacare/about/Screenshot 2025-08-24 183414.png"
                  alt="Meluca Care Salon"
                  className="rounded-2xl shadow-xl w-full h-auto md:h-96 object-cover"
                />
                <div className="absolute -bottom-6 right-1/2 transform translate-x-1/2 md:-right-6 md:translate-x-0 bg-white p-6 rounded-2xl shadow-lg w-3/4">
                  <div className="flex items-center">
                    <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 mr-4">
                      <Gem className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Premium Experience</h4>
                      <p className="text-sm text-gray-600">Luxury treatments at accessible prices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Why Choose Us Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-600 text-white">Why Choose Us</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Meluca Care Difference</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the exceptional quality and personalized service that sets us apart from other beauty salons
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-white group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    Expert Stylists & Beauty Specialists
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our team is trained in the latest beauty trends and techniques, ensuring you receive the highest
                    quality service from professionals who are passionate about their craft.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    High-Quality Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We use only the best beauty brands for safe and long-lasting results. Our products are carefully
                    selected for their effectiveness and compatibility with diverse skin and hair types.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                    Hygienic & Relaxing Atmosphere
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Clean, comfortable, and designed for ultimate relaxation. Our salon maintains the highest standards
                    of cleanliness to ensure your safety and comfort.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">Our Team</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Meet Our Experts</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our talented team of beauty professionals is dedicated to helping you look and feel your absolute best
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="relative mx-auto w-48 h-48 mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="rounded-full object-cover w-full h-full shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {member.experience}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{member.name}</CardTitle>
                    <CardDescription className="text-emerald-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {member.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-600 text-white">Our Values</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What We Stand For</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do at Meluca Care
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="text-center border-0 shadow-lg group hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader>
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-emerald-100 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        {value.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-3">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        

        {/* Testimonials Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-600 text-white">Client Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our satisfied clients have to say about their transformative experiences at Meluca Care
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 text-8xl text-emerald-100 font-serif mt-4 ml-4 select-none">"</div>
                <div className="absolute bottom-0 right-0 text-8xl text-emerald-100 font-serif mb-4 mr-4 rotate-180 select-none">
                  "
                </div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed text-center">
                    {testimonials[activeTestimonial].content}
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full mr-4 object-cover shadow-lg"
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

        

        {/* Location Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">Find Us</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Visit Our Salon</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conveniently located in the heart of Addis Ababa with easy access and ample parking
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
                      <Button variant="link" className="p-0 h-auto text-emerald-600 font-medium mt-2" asChild>
                        <a href="https://maps.google.com/maps?q=2Q79+CM8,%20Guinea%20Conakry%20St,%20Addis%20Ababa%209568&z=15&output=embed" target="_blank" rel="noopener noreferrer">
                          Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
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

              <div className="rounded-2xl overflow-hidden h-96 relative w-full shadow-lg">
                {/* Embed Google Map using iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.894979302429!2d38.7690163!3d9.013772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850028a59299%3A0xb54e0608ed93eb4a!2sMeluca%20Beauty%20Salon!5e1!3m2!1sen!2set!4v1756049260939!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-20 bg-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Experience Meluca Care?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book your appointment today and discover why we're Addis Ababa's premier beauty destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://calendly.com/melucacare">
                  Book Your Appointment <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                asChild
              >
                <a href="tel:0930963333">
                  Call Us Now <Phone className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage