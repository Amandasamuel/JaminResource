import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "+2348169706962"; // Replace with your actual WhatsApp number
  const message = "Hello! I'm interested in your real estate services.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 right-4 z-50 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="ml-2">WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;