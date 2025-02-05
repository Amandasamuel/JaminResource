// Projects.tsx - Displays available properties and real estate projects
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Projects = () => {
  // Sample property data with images
  const properties = [
    {
      id: 1,
      title: "Modern Apartment",
      specs: "3 beds • 2 baths • 1,800 sq ft",
      price: "$850,000",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
    },
    {
      id: 2,
      title: "Luxury Villa",
      specs: "4 beds • 3 baths • 2,500 sq ft",
      price: "$1,200,000",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      id: 3,
      title: "Penthouse Suite",
      specs: "3 beds • 2 baths • 2,000 sq ft",
      price: "$950,000",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
    },
    {
      id: 4,
      title: "Family Home",
      specs: "5 beds • 3 baths • 3,200 sq ft",
      price: "$1,500,000",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      id: 5,
      title: "Beach House",
      specs: "4 beds • 4 baths • 2,800 sq ft",
      price: "$2,100,000",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      id: 6,
      title: "Mountain Retreat",
      specs: "3 beds • 2 baths • 1,900 sq ft",
      price: "$780,000",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">Our Projects</h1>
          
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-duration-300"
            >
              <img
                src={property.image}
                alt={property.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.specs}</p>
                <p className="text-primary font-semibold">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;