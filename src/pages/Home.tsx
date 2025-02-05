import { Button } from "@/components/ui/button";
import background from "../components/images/background.mp4"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    text: "Outstanding service! They helped me find my dream home within weeks.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Sarah Johnson",
    role: "Property Investor",
    text: "Their market knowledge and professional guidance were invaluable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  {
    name: "Michael Brown",
    role: "First-time Buyer",
    text: "Made the home buying process smooth and stress-free. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Emily Davis",
    role: "Luxury Property Owner",
    text: "Exceptional attention to detail and personalized service throughout.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "David Wilson",
    role: "Commercial Investor",
    text: "Their expertise in commercial real estate is unmatched. Great results!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Slides every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={background}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover exceptional properties in prime locations with our expert real
            estate services.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary"
          >
            View Properties
          </Button>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Cards */}
          {[
            {
              image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
              title: "Modern Apartment",
              details: "3 beds • 2 baths • 1,800 sq ft",
              price: "$850,000"
            },
            {
              image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
              title: "Luxury Villa",
              details: "4 beds • 3 baths • 2,500 sq ft",
              price: "$1,200,000"
            },
            {
              image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
              title: "Penthouse Suite",
              details: "3 beds • 2 baths • 2,000 sq ft",
              price: "$950,000"
            }
          ].map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.details}</p>
                <p className="text-primary font-semibold mt-2">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Property Management",
                description:
                  "Professional management services for your investment properties.",
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
              },
              {
                title: "Real Estate Consulting",
                description:
                  "Expert advice on property investments and market analysis.",
                image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
              },
              {
                title: "Luxury Properties",
                description:
                  "Access to exclusive high-end properties in prime locations.",
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section with Auto-sliding Carousel */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Client Testimonials
          </h2>
          <Carousel 
            className="w-full max-w-4xl mx-auto"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              duration: 20,
              inViewThreshold: 0.7,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 bg-white rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-gray-600 mb-4 text-lg italic">
                          "{testimonial.text}"
                        </p>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
