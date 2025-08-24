"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Send,
  CheckCircle,
  Instagram,
} from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    // Reset form
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const contactMethods = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Salon",
      description: "2Q79+CM8, Guinea Conakry St, Addis Ababa 9568",
      details: "Kazanchis, Opposite to Elilly Hotel, 1st floor",
      link: "https://maps.app.goo.gl/sJtPjg4eeP7q9JyCA",
      linkText: "Get Directions",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak directly with our team",
      details: "093 096 3333",
      link: "tel:0930963333",
      linkText: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Send us a message anytime",
      details: "hello@meluca251.com",
      link: "mailto:hello@meluca251.com",
      linkText: "Send Email",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Opening Hours",
      description: "Visit us at your convenience",
      details: "Mon - Sun: 9:00 AM - 6:00 PM",
      link: "https://calendly.com/melucacare",
      linkText: "Book Appointment",
    },
  ]

  const services = [
    "Makeup Services",
    "Hair Styling",
    "Hair Coloring",
    "Manicure & Pedicure",
    "Skincare Treatments",
    "Bridal Packages",
    "Other Inquiry",
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-emerald-600 text-white">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-800">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your look? Reach out to us - we're here to bring your beauty vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2">{method.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-3">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-800 mb-4">{method.details}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors duration-300"
                    asChild
                  >
                    <a href={method.link}>{method.linkText}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+251 ___ ___ ___"
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">
                        Service Interest
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-emerald-500"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your beauty goals or any questions you have..."
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.894979302429!2d38.7690163!3d9.013772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850028a59299%3A0xb54e0608ed93eb4a!2sMeluca%20Beauty%20Salon!5e1!3m2!1sen!2set!4v1756049260939!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Meluca Care Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-4">
                    2Q79+CM8, Guinea Conakry St, Addis Ababa 9568
                    <br />
                    Kazanchis, Opposite to Elilly Hotel, 1st floor
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://maps.app.goo.gl/sJtPjg4eeP7q9JyCA">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              {/* Social Media */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center">Follow Us</CardTitle>
                  <CardDescription className="text-center">
                    Stay updated with our latest work and beauty tips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-instagram hover:bg-instagram text-white border-instagram"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/melucacare?igsh=OXd6OHh3dW5jNDVx"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="mr-2 h-5 w-5" />
                        Instagram
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 bg-telegram hover:bg-telegram text-white border-telegram"
                      asChild
                    >
                      <a href="http://t.me/+251930963333" target="_blank" rel="noopener noreferrer">
                        <Send className="mr-2 h-5 w-5" />
                        Telegram
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Common Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find quick answers to our most commonly asked questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Do I need to book an appointment?</h3>
                <p className="text-gray-600">
                  While walk-ins are welcome, we highly recommend booking appointments in advance to ensure
                  availability and personalized service.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept cash, credit/debit cards, and mobile banking. All major payment methods are welcome.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">How far in advance should I book?</h3>
                <p className="text-gray-600">
                  For regular services, 1-2 days in advance is sufficient. For weddings and special events, we
                  recommend booking 2-3 weeks ahead.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Do you use professional products?</h3>
                <p className="text-gray-600">
                  Yes, we use only high-quality, professional-grade products from trusted brands to ensure the best
                  results for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today and experience the Meluca Care difference. Your journey to beauty and
            confidence starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://calendly.com/melucacare">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              asChild
            >
              <a href="tel:0930963333">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 093 096 3333
              </a>
            </Button>
          </div>
        </div>
      </section>

      <style>{`
        .bg-pattern {
          background-image: radial-gradient(circle, #000000 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.1;
        }
        .bg-instagram {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }
        .bg-telegram {
          background: #0088cc;
        }
      `}</style>
    </div>
  )
}

export default ContactPage