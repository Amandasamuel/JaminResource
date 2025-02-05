// Contact.tsx - Contact form and company information
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen py-16">
      {/* Contact page header with background image */}
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a question or want to schedule a viewing? Fill out the form
              below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Your email" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact information */}
          <div className="space-y-8">
            {/* Office location */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Office Location</h3>
              </div>
              <img
                src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
                alt="Office"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">
                JaminResource
                <br />
                Opposite Old Library, <br /> Jos Nigeria.
              </p>
            </div>

            {/* Contact information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Contact Information</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (+234)8169706962
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@JaminResource.com
                </p>
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;