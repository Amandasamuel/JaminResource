// Profile.tsx - Company profile and statistics
import { Building, Users, Star, Award } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Profile header with background image */}
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Company Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Company Profile</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company overview */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
            <p className="text-gray-600 mb-4">
              JamiResource. is a leading real estate company specializing in
              luxury properties and commercial real estate. With a track record of
              successful projects and satisfied clients, we continue to set the
              standard for excellence in the industry.
            </p>

            {/* Company image */}
            <img
              src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
              alt="Company Building"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />

            {/* Key statistics */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Building, stat: "200+", label: "Properties Sold" },
                  { icon: Users, stat: "20+", label: "Years Experience" },
                  { icon: Star, stat: "95%", label: "Client Satisfaction" },
                  { icon: Award, stat: "50+", label: "Team Members" }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                    <item.icon className="w-8 h-8 text-primary mb-2" />
                    <p className="text-3xl font-bold text-primary">{item.stat}</p>
                    <p className="text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company information */}
          <div className="space-y-8">
            {/* Contact information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Address:</span> 123 Real Estate
                  Ave, City, State 12345
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> (555) 123-4567
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  info@JaminResource.com
                </p>
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Monday - Friday:</span> 9:00 AM -
                  5:00 PM
                </p>
                <p>
                  <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00
                  PM
                </p>
                <p>
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
              </div>
            </div>

            {/* Company image gallery */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                alt="Office Interior"
                className="w-full h-40 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                alt="Building Exterior"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;