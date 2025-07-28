import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-brown mb-6 sm:mb-8 leading-tight break-words">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-luxury-brown space-y-4 sm:space-y-6 break-words overflow-wrap-anywhere">
            <p>
              Welcome to Arabian Coast Holiday Homes L.L.C. ("we", "us", "our"). These Terms and Conditions govern your use of our website [www.arabiancoastholidayhomes.com] and the services we provide.
            </p>
            
            <p>
              By accessing our website or making a booking, you confirm that you accept and agree to comply with these Terms and Conditions. If you do not agree, you must not use this website or our services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">1. Company Information</h2>
              <ul className="list-none space-y-2">
                <li><strong>Company Name:</strong> Arabian Coast Holiday Homes L.L.C.</li>
                <li><strong>Trade License Number:</strong> 1453578</li>
                <li><strong>Regulated by:</strong> Department of Economy and Tourism – Dubai</li>
                <li><strong>Email:</strong> info@arabiancoastholidayhomes.com</li>
                <li><strong>Website:</strong> www.arabiancoastholidayhomes.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">2. Use of the Website</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>You must be at least 18 years old to use this website or make a booking.</li>
                <li>You agree to use the website only for lawful purposes.</li>
                <li>You must not attempt to gain unauthorised access to any part of the website or its systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">3. Intellectual Property</h2>
              <p>
                All content, designs, logos, text, images, and software on this website are the property of Arabian Coast Holiday Homes L.L.C. and are protected under UAE copyright and intellectual property laws.
              </p>
              <p><strong>You must not:</strong></p>
              <ul className="list-disc list-inside space-y-2">
                <li>Republish, copy, or reproduce any content from this website.</li>
                <li>Sell, rent, or sublicense website content.</li>
                <li>Use our branding, logo, or materials without written consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">4. Booking Terms</h2>
              <p>By booking a property with Arabian Coast Holiday Homes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>You agree to our Reservation Terms & Conditions and Guest House Rules, provided during the booking process.</li>
                <li>You are responsible for ensuring the accuracy of all guest details provided.</li>
                <li>All guests and visitors must be pre-registered with Arabian Coast Holiday Homes at least 24 hours in advance.</li>
                <li>Upon arrival, all guests are required to present a valid ID to the building concierge for verification.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">5. Payments & Security Deposit</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Full payment is required prior to check-in, unless agreed otherwise in writing.</li>
                <li>2000 AED security deposit required for all bookings. This will be returned to guests after inspection of property/check-out.</li>
                <li>All payments are processed securely. We do not store or share card details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">6. Cancellations & Refunds</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Our cancellation and refund policy is outlined in the Reservation Terms provided at the time of booking.</li>
                <li>Refunds will be issued in accordance with the booking terms and UAE consumer protection regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">7. Guest Conduct</h2>
              <p><strong>Guests agree to:</strong></p>
              <ul className="list-disc list-inside space-y-2">
                <li>Abide by all property rules provided at check-in.</li>
                <li>Respect neighbours and avoid excessive noise between 10:00 PM and 7:00 AM.</li>
                <li>Not use the property for parties or illegal activities.</li>
              </ul>
              <p className="mt-4">
                We reserve the right to evict guests without refund for any breach of these rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">8. Liability Disclaimer</h2>
              <p>To the fullest extent permitted under UAE law:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>We are not liable for loss, theft, or damage to personal belongings during your stay.</li>
                <li>We are not responsible for disruptions caused by external factors (e.g., construction, utility outages, or force majeure).</li>
                <li>Nothing in these Terms excludes liability for death or personal injury caused by our negligence or fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">9. Third-Party Links</h2>
              <p>
                Our website may contain links to external websites. We are not responsible for the content, security, or privacy practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">10. Privacy Policy</h2>
              <p>
                Our use of your personal data is governed by our Privacy Policy, in accordance with Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">11. Changes to Terms</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>We reserve the right to modify these Terms and Conditions at any time. Updates will be posted on this page with the "last updated" date.</li>
                <li>Continued use of the website or our services after any changes indicates your acceptance of the updated Terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">12. Governing Law & Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;