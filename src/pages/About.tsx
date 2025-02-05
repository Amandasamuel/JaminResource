// About.tsx - Company information and team member profiles
const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <div className="relative h-[60vh]">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-house-interior-4440-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl">
              Leading the way in luxury real estate for over two decades
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              With over 20 years of experience in the real estate industry, we've
              built a reputation for excellence and trust. Our commitment to
              exceptional service has made us a leader in luxury real estate.
            </p>
            <p className="text-gray-600">
              We understand that buying or selling a property is one of life's
              biggest decisions. That's why we're dedicated to providing
              personalized service and expert guidance every step of the way.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            alt="Modern building"
            className="rounded-lg h-96 w-full object-cover"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We believe in conducting business with the highest ethical standards.",
                image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service.",
                image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and methods to better serve our clients.",
                image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Brown",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              },
              {
                name: "Emily Wilson",
                role: "Head of Sales",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              },
              {
                name: "David Chen",
                role: "Senior Agent",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              },
              {
                name: "Lisa Anderson",
                role: "Property Manager",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;