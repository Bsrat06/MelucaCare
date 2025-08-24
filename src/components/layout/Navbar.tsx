"use client"

import React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface NavbarProps {
  services: Array<{ title: string; description: string; icon: React.ReactNode; popular?: boolean }>
}

const Navbar: React.FC<NavbarProps> = ({ services }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/public/melucacare/melucacarelogo.png" alt="Meluca Care" className="h-10 md:h-12 w-auto" />
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "hover:text-emerald-600")}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className={cn(navigationMenuTriggerStyle(), "hover:text-emerald-600")}>
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-emerald-600">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href="/services"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus:bg-emerald-50 focus:text-emerald-700"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">{service.icon}</div>
                              <div>
                                <div className="text-sm font-medium leading-none flex items-center gap-2">
                                  {service.title}
                                  {service.popular && (
                                    <Badge variant="secondary" className="text-xs">
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/previousworks" className={cn(navigationMenuTriggerStyle(), "hover:text-emerald-600")}>
                  Previous Works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className={cn(navigationMenuTriggerStyle(), "hover:text-emerald-600")}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-emerald-600 hover:bg-emerald-700 shadow-lg" asChild>
            <a href="https://calendly.com/melucacare">
              <Calendar className="mr-2 h-4 w-4" /> Book Now
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-emerald-50"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="pb-6">
                <SheetTitle>
                  <a href="/">
                    <img src="/public/melucacare/melucacarelogo.png" alt="Meluca Care" className="h-10 w-auto" />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4">
                <a href="/" className="py-2 font-medium hover:text-emerald-600 transition-colors">
                  Home
                </a>
                <a href="/about" className="py-2 font-medium hover:text-emerald-600 transition-colors">
                  About Us
                </a>
                <a href="/services" className="py-2 font-medium hover:text-emerald-600 transition-colors">
                  Services
                </a>
                <a href="/previousworks" className="py-2 font-medium hover:text-emerald-600 transition-colors">
                  Previous Works
                </a>
                <a href="/contact" className="py-2 font-medium hover:text-emerald-600 transition-colors">
                  Contact
                </a>
                <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a href="https://calendly.com/melucacare">Book Now</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar