"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, X, ZoomIn, Heart, Share } from "lucide-react"
import { cn } from "@/lib/utils"

const PreviousWorksPage = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: "all", label: "All Works" },
    { id: "hair", label: "Hair Styling" },
    { id: "makeup", label: "Makeup" },
    { id: "nails", label: "Nail Art" },
    { id: "bridal", label: "Bridal" },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Elegant Wedding Makeup",
      category: ["makeup", "bridal"],
      description: "Soft, natural bridal makeup with delicate accents",
      image: "/melucacare/gallery/Screenshot 2025-08-24 123918.png",
      likes: 42,
      featured: true,
    },
    {
      id: 2,
      title: "Creative Hair Coloring",
      category: ["hair"],
      description: "Vibrant balayage with dimensional tones",
      image: "/melucacare/gallery/Screenshot 2025-08-24 173729.png",
      likes: 38,
    },
    {
      id: 3,
      title: "Luxury Nail Art",
      category: ["nails"],
      description: "Hand-painted floral designs with crystal accents",
      image: "/melucacare/gallery/Screenshot 2025-08-24 173506.png",
      likes: 29,
    },
    {
      id: 4,
      title: "Evening Glam Makeup",
      category: ["makeup"],
      description: "Dramatic smoky eyes with flawless complexion",
      image: "/melucacare/gallery/Screenshot 2025-08-24 173811.png",
      likes: 35,
      featured: true,
    },
    {
      id: 5,
      title: "Modern Haircut",
      category: ["hair"],
      description: "Precision bob with textured layers",
      image: "/melucacare/gallery/Screenshot 2025-08-24 173844.png",
      likes: 27,
    },
    {
      id: 6,
      title: "Bridal Hairstyle",
      category: ["hair", "bridal"],
      description: "Romantic updo with delicate braiding",
      image: "/melucacare/gallery/Screenshot 2025-08-24 173403.png",
      likes: 45,
      featured: true,
    },
    {
      id: 7,
      title: "French Manicure",
      category: ["nails"],
      description: "Classic French with modern twist",
      image: "/melucacare/gallery/Screenshot 2025-08-24 173605.png",
      likes: 23,
    },
    {
      id: 8,
      title: "Editorial Makeup",
      category: ["makeup"],
      description: "Creative artistic makeup for photoshoot",
      image: "/melucacare/gallery/Screenshot 2025-08-24 173530.png",
      likes: 31,
    },
  ]

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.includes(activeFilter))

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-emerald-600 text-white">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-800">
              Previous Works
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our collection of stunning transformations and creative beauty work
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800">
              Browse Our Gallery
            </h2>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeFilter === category.id
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {item.featured && (
                  <Badge className="absolute top-4 left-4 z-10 bg-emerald-600 text-white">
                    Featured
                  </Badge>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedImage(item.id)}
                        className="p-3 bg-white rounded-full text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white rounded-full text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white rounded-full text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors">
                        <Share className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <span className="flex items-center text-sm text-gray-500">
                      <Heart className="w-4 h-4 mr-1 fill-current text-red-500" />
                      {item.likes}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No works found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">1K+</div>
              <div className="text-gray-600">Transformations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-800">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us create your own success story. Book your appointment today and experience the Meluca Care difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://calendly.com/melucacare">
                  Book Your Appointment <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
                asChild
              >
                <a href="https://meluca251.com/contacts/">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-800 hover:bg-emerald-600 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-4xl max-h-full">
            <img
              src={portfolioItems.find(item => item.id === selectedImage)?.image || "/placeholder.svg"}
              alt="Enlarged view"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                {portfolioItems.find(item => item.id === selectedImage)?.title}
              </h3>
              <p className="text-sm opacity-90">
                {portfolioItems.find(item => item.id === selectedImage)?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .bg-pattern {
            background-image: radial-gradient(circle, #000000 1px, transparent 1px);
            background-size: 20px 20px;
            opacity: 0.1;
          }
        `}
      </style>
    </div>
  )
}

export default PreviousWorksPage