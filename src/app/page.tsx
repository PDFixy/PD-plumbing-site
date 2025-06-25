"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Star,
  Clock,
  MapPin,
  Shield,
  Users,
  Wrench,
  Droplets,
  Flame,
  Snowflake,
  Home,
  CheckCircle,
  Award,
  Zap,
  Heart,
  Calendar,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

// Custom components matching your file structure
const GoogleReviewBadge = () => (
  <div className="inline-flex items-center gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
    <Image src="/images/logos/google.png" alt="Google" width={32} height={32} />
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-700">5.0 • 150+ Reviews</span>
    </div>
  </div>
)

const Testimonials = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        name: "Jennifer Martinez",
        location: "Wichita, KS",
        text: "PD Plumbing saved our weekend! Fast, friendly service and fair pricing. They explained everything clearly and left our home spotless.",
        rating: 5,
        service: "Emergency Drain Cleaning",
      },
      {
        name: "Robert Thompson",
        location: "Maize, KS",
        text: "Professional team that arrived on time and fixed our HVAC system quickly. Great communication throughout the entire process.",
        rating: 5,
        service: "HVAC Repair",
      },
      {
        name: "Sarah Chen",
        location: "Andover, KS",
        text: "Excellent water heater installation. The technician was knowledgeable, courteous, and cleaned up perfectly. Highly recommend!",
        rating: 5,
        service: "Water Heater Installation",
      },
    ].map((testimonial, index) => (
      <Card key={index} className="bg-white border-l-4 border-l-[#990000] shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
          <div className="border-t pt-4">
            <p className="font-bold text-[#002F6C]">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
            <p className="text-sm text-[#990000] font-medium">{testimonial.service}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
)

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { name: "Emergency Plumbing", slug: "emergency-plumbing", icon: Shield, color: "bg-red-500" },
    { name: "Drain Cleaning", slug: "drain-cleaning", icon: Droplets, color: "bg-blue-500" },
    { name: "Water Heater Repair", slug: "water-heater-repair", icon: Flame, color: "bg-orange-500" },
    { name: "HVAC Services", slug: "hvac-services", icon: Snowflake, color: "bg-cyan-500" },
    { name: "Bathroom Remodeling", slug: "bathroom-remodeling", icon: Home, color: "bg-purple-500" },
    { name: "Kitchen Plumbing", slug: "kitchen-plumbing", icon: Wrench, color: "bg-green-500" },
    { name: "Leak Detection", slug: "leak-detection", icon: Droplets, color: "bg-indigo-500" },
    { name: "Sewer Line Repair", slug: "sewer-line-repair", icon: Shield, color: "bg-gray-600" },
    { name: "Commercial Plumbing", slug: "commercial-plumbing", icon: Users, color: "bg-teal-500" },
    { name: "Faucet Installation", slug: "faucet-installation", icon: Wrench, color: "bg-yellow-500" },
    { name: "Gas Line Repair", slug: "gas-line-repair", icon: Flame, color: "bg-red-600" },
    { name: "Pipe Replacement", slug: "pipe-replacement", icon: Wrench, color: "bg-blue-600" },
    { name: "Sump Pump", slug: "sump-pump", icon: Droplets, color: "bg-green-600" },
    { name: "Toilet Repair", slug: "toilet-repair", icon: Wrench, color: "bg-purple-600" },
    { name: "Water Filtration", slug: "water-filtration", icon: Droplets, color: "bg-cyan-600" },
  ]

  const blogPosts = [
    {
      title: "Emergency Plumbing Tips Every Homeowner Should Know",
      slug: "emergency-plumbing",
      excerpt: "Learn what to do before the plumber arrives",
    },
    {
      title: "Signs Your Water Heater Needs Professional Attention",
      slug: "water-heater-repair",
      excerpt: "Don't wait until it's too late",
    },
    {
      title: "HVAC Maintenance: Seasonal Checklist for Kansas Homes",
      slug: "hvac-services",
      excerpt: "Keep your system running efficiently year-round",
    },
    {
      title: "Bathroom Remodeling: Planning Your Dream Space",
      slug: "bathroom-remodeling",
      excerpt: "Transform your bathroom with professional guidance",
    },
    {
      title: "Drain Cleaning: DIY vs Professional Service",
      slug: "drain-cleaning",
      excerpt: "When to call the experts",
    },
    {
      title: "Kitchen Plumbing Upgrades That Add Value",
      slug: "kitchen-plumbing",
      excerpt: "Invest in your home's future",
    },
  ]

  const serviceAreas = ["Wichita", "Maize", "Andover", "Augusta", "El Dorado"]

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-[#990000]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/pd-logo-new.png"
                alt="PD Plumbing Heating and Cooling"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-[#002F6C] hover:text-[#990000] font-semibold transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="text-[#002F6C] hover:text-[#990000] font-semibold transition-colors flex items-center gap-1">
                  Services
                  <ArrowRight className="w-4 h-4 rotate-90 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200">
                  <div className="grid grid-cols-2 gap-2 p-6">
                    {services.slice(0, 10).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="text-sm text-gray-700 hover:text-[#990000] py-2 px-3 rounded hover:bg-gray-50 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/pages/meet-the-team"
                className="text-[#002F6C] hover:text-[#990000] font-semibold transition-colors"
              >
                Meet the Team
              </Link>
              <Link
                href="/pages/testimonials"
                className="text-[#002F6C] hover:text-[#990000] font-semibold transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="/pages/financing"
                className="text-[#002F6C] hover:text-[#990000] font-semibold transition-colors"
              >
                Financing
              </Link>
              <Link href="/blog" className="text-[#002F6C] hover:text-[#990000] font-semibold transition-colors">
                Blog
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button className="bg-[#990000] hover:bg-[#770000] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (316) 871-5499
              </Button>
              <Button
                variant="outline"
                className="border-[#002F6C] text-[#002F6C] hover:bg-[#002F6C] hover:text-white px-6 py-3 rounded-lg font-semibold"
              >
                Book Online
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-[#002F6C] font-semibold px-4 py-2">
                  Home
                </Link>
                <Link href="/pages/meet-the-team" className="text-[#002F6C] font-semibold px-4 py-2">
                  Meet the Team
                </Link>
                <Link href="/pages/testimonials" className="text-[#002F6C] font-semibold px-4 py-2">
                  Testimonials
                </Link>
                <Link href="/pages/financing" className="text-[#002F6C] font-semibold px-4 py-2">
                  Financing
                </Link>
                <Link href="/blog" className="text-[#002F6C] font-semibold px-4 py-2">
                  Blog
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-[#990000] lg:hidden shadow-2xl">
        <div className="flex">
          <a
            href="tel:316-871-5499"
            className="flex-1 bg-[#990000] text-white py-4 flex items-center justify-center gap-2 font-bold text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <button className="flex-1 bg-[#002F6C] text-white py-4 flex items-center justify-center gap-2 font-bold text-lg">
            <MessageCircle className="w-5 h-5" />
            Message
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002F6C] via-[#003d8a] to-[#990000] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Fast • Friendly • Reliable
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Wichita's Most Trusted
                  <span className="block text-yellow-400">Plumbing & HVAC</span>
                  Experts
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  24/7 emergency service, licensed professionals, and 100% satisfaction guarantee. Serving Wichita and
                  surrounding areas with reliable solutions you can trust.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:316-871-5499"
                  className="inline-flex items-center justify-center gap-3 bg-[#990000] hover:bg-[#770000] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  Call Now: (316) 871-5499
                </a>
                <Button className="bg-white text-[#002F6C] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Online
                </Button>
              </div>

              <div className="pt-4">
                <GoogleReviewBadge />
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-center">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-lg">
                      <MapPin className="w-5 h-5 text-yellow-400" />
                      {area}
                    </div>
                  ))}
                </div>
                <div className="text-center pt-4 border-t border-white/20">
                  <p className="text-lg font-semibold">Emergency Service Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#002F6C] mb-2">Trusted & Certified Professionals</h2>
            <p className="text-gray-600">Licensed, insured, and backed by industry-leading certifications</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-80">
            <Image
              src="/images/logos/google-guaranteed.png"
              alt="Google Guaranteed"
              width={140}
              height={70}
              className="hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/bbb-accredited.png"
              alt="BBB Accredited Business"
              width={140}
              height={70}
              className="hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/phcc.png"
              alt="PHCC Member"
              width={140}
              height={70}
              className="hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/pack.png"
              alt="PACK Member"
              width={140}
              height={70}
              className="hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/5-star-customer.png"
              alt="5 Star Customer Service"
              width={140}
              height={70}
              className="hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/customer-satisfaction.png"
              alt="Customer Satisfaction Guarantee"
              width={140}
              height={70}
              className="hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Why Choose PD Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002F6C] mb-4">Why Wichita Chooses PD Plumbing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another plumbing company. We're your neighbors, committed to providing exceptional service
              with integrity and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#990000] to-[#770000] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#002F6C] mb-4">Fast Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Same-day service for most repairs. Emergency calls answered 24/7 because plumbing problems don't wait
                for business hours.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#002F6C] to-[#001a4d] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#002F6C] mb-4">Friendly Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our technicians treat your home like their own. Clean, courteous professionals who explain everything
                clearly.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#990000] to-[#002F6C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#002F6C] mb-4">Reliable Results</h3>
              <p className="text-gray-600 leading-relaxed">
                100% satisfaction guarantee on all work. Licensed, insured, and backed by years of experience in Kansas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#002F6C] mb-6">Meet Your Local Plumbing & HVAC Team</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our experienced, licensed technicians are more than service providers – we're your neighbors. Each team
                member is committed to delivering exceptional service while treating your home with the respect it
                deserves.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Licensed & Insured Master Plumbers</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Background Checked & Drug Tested</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Ongoing Training & Certification</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Local Wichita Area Residents</span>
                </div>
              </div>

              <Button className="bg-[#990000] hover:bg-[#770000] text-white px-8 py-4 rounded-lg font-semibold">
                <Link href="/pages/meet-the-team" className="flex items-center gap-2">
                  Meet Our Team
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#990000] to-[#002F6C] p-2 rounded-2xl">
                <Image
                  src="/images/team/pd-plumbing-tech-team.jpg"
                  alt="PD Plumbing Technical Team"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-4 border-[#990000]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#002F6C]">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Message Section */}
      <section className="py-20 bg-gradient-to-r from-[#002F6C] to-[#990000] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">A Message From Our Owner</h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-1 text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Paul Davidson</h3>
                  <p className="text-gray-200">Owner & Master Plumber</p>
                </div>

                <div className="lg:col-span-3">
                  <blockquote className="text-lg lg:text-xl leading-relaxed italic">
                    "When I started PD Plumbing, I made a promise to serve Wichita families with the same care and
                    attention I'd want for my own home. That means showing up on time, providing honest estimates, and
                    standing behind every job with our 100% satisfaction guarantee. We're not just fixing pipes and HVAC
                    systems – we're building lasting relationships with our neighbors. Thank you for trusting us with
                    your home."
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-16 h-1 bg-yellow-400"></div>
                    <span className="font-semibold">Paul Davidson, Owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002F6C] mb-4">Complete Plumbing & HVAC Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete installations, we handle all your plumbing and HVAC needs with
              professional expertise and guaranteed satisfaction.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#990000]">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-[#002F6C] text-sm leading-tight group-hover:text-[#990000] transition-colors">
                        {service.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#990000] hover:bg-[#770000] text-white px-8 py-4 rounded-lg font-semibold text-lg">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002F6C] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it – hear from satisfied customers across Wichita and surrounding areas.
            </p>
          </div>

          <Testimonials />

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#002F6C] text-[#002F6C] hover:bg-[#002F6C] hover:text-white px-8 py-4 rounded-lg font-semibold"
            >
              <Link href="/pages/testimonials" className="flex items-center gap-2">
                Read More Reviews
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002F6C] mb-4">Helpful Tips & Expert Insights</h2>
            <p className="text-xl text-gray-600">
              Stay informed with our latest plumbing and HVAC tips, maintenance guides, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#990000] to-[#002F6C] rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-[#002F6C] text-lg mb-3 group-hover:text-[#990000] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-2 mt-4 text-[#990000] font-medium text-sm">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#002F6C] hover:bg-[#001a4d] text-white px-8 py-4 rounded-lg font-semibold">
              <Link href="/blog" className="flex items-center gap-2">
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#990000] to-[#770000] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-yellow-400" />
              <h2 className="text-4xl font-bold">Plumbing or HVAC Emergency?</h2>
            </div>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Don't wait when disaster strikes. Our emergency team is standing by 24/7 to help you when you need it
              most. Fast response times across Wichita, Maize, Andover, Augusta, and El Dorado.
            </p>
            <a
              href="tel:316-871-5499"
              className="inline-flex items-center gap-3 bg-white text-[#990000] hover:bg-gray-100 px-12 py-6 rounded-xl font-bold text-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-8 h-8" />
              Emergency Line: (316) 871-5499
            </a>
            <p className="text-sm mt-4 text-gray-200">Available 24/7 • No overtime charges on weekends</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002F6C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Image
                src="/images/logos/pd-logo-new.png"
                alt="PD Plumbing Heating and Cooling"
                width={200}
                height={60}
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted local plumbing and HVAC experts, serving Wichita and surrounding areas with professional
                service, guaranteed satisfaction, and 24/7 emergency support.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href="tel:316-871-5499" className="text-xl font-bold hover:text-yellow-400 transition-colors">
                  (316) 871-5499
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/services/emergency-plumbing" className="hover:text-white transition-colors">
                    Emergency Plumbing
                  </Link>
                </li>
                <li>
                  <Link href="/services/drain-cleaning" className="hover:text-white transition-colors">
                    Drain Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/services/water-heater-repair" className="hover:text-white transition-colors">
                    Water Heater Repair
                  </Link>
                </li>
                <li>
                  <Link href="/services/hvac-services" className="hover:text-white transition-colors">
                    HVAC Services
                  </Link>
                </li>
                <li>
                  <Link href="/pages/financing" className="hover:text-white transition-colors">
                    Financing Options
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hours & Service Areas */}
            <div>
              <h3 className="font-bold text-lg mb-6">Hours & Service Areas</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">Business Hours</span>
                  </div>
                  <p>Monday–Friday: 8am–5pm</p>
                  <p>Saturday–Sunday: Emergency Only</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">Service Areas</span>
                  </div>
                  <p>Wichita • Maize • Andover</p>
                  <p>Augusta • El Dorado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-center md:text-left">
                &copy; {new Date().getFullYear()} PD Plumbing Heating and Cooling. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/pages/spot-fixy" className="text-gray-300 hover:text-white transition-colors">
                  Spot Fixy Campaign
                </Link>
                <Link href="/pages/fixy-photo" className="text-gray-300 hover:text-white transition-colors">
                  Fixy Photo Giveaway
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

