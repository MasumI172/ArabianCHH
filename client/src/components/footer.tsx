import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logoPath from "@assets/ChatGPT Image May 29, 2025, 05_54_20 PM.png";

const Footer = () => {
  return (
    <footer className="luxury-bg border-t border-luxury-gold/20 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center">
              <img 
                src={logoPath} 
                alt="Arabian Coast Holiday Homes" 
                className="h-20 md:h-28 lg:h-32 w-auto object-contain transition-all duration-500 hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 2px 8px rgba(60, 47, 31, 0.15))',
                  opacity: '0.98'
                }}
              />
            </div>
          </div>



          {/* Contact */}
          <div>
            <h3 className="text-lg luxury-subheading mb-3 text-black font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="h-5 w-5 text-green-500" />
                <a 
                  href="https://wa.me/971558166062" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-black font-medium hover:text-luxury-gold transition-colors cursor-pointer"
                >
                  +971 55 816 6062
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-base text-black font-medium">info@arabiancoastholidayhomes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-beige/30 mt-6 pt-4 text-center">
          <p className="text-sm text-black font-medium">
            &copy; 2025 Arabian Coast Holiday Homes. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="/terms" className="hover:text-luxury-gold transition-colors text-black text-sm">
              Terms and Conditions
            </a>
            <span className="text-black">|</span>
            <a href="/privacy-policy" className="hover:text-luxury-gold transition-colors text-black text-sm">
              Privacy Policy
            </a>
            <span className="text-black">|</span>
            <a href="/house-rules" className="hover:text-luxury-gold transition-colors text-black text-sm">
              House Rules
            </a>
            <span className="text-black">|</span>
            <a href="/refund-policy" className="hover:text-luxury-gold transition-colors text-black text-sm">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
