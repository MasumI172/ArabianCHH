import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-luxury-brown space-y-4 sm:space-y-6 break-words overflow-wrap-anywhere">
            <p>
              At Arabian Coast Holiday Homes, we respect your privacy and are committed to protecting any personal information you share with us. This policy explains how we collect, use, and safeguard your data when you visit our website: <strong>www.arabiancoastholidayhomes.com</strong>
            </p>
            
            <p>
              This policy applies to online interactions via our website only. If you book or interact with us through third-party platforms or in person, additional terms may apply.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">1. Your Agreement</h2>
              <p>By using our website, you agree to this Privacy Policy and the way we process your personal data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">2. Information We Collect</h2>
              <p>We only collect what we need to deliver our services and improve your experience. This may include:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Details you enter in our contact or booking forms (e.g. name, phone, email)</li>
                <li>Booking and enquiry information</li>
                <li>Files or documents you choose to share with us</li>
                <li>Basic technical data like your IP address, browser type, and page visits</li>
                <li>Cookies, which help us understand how you use the site and tailor your experience</li>
              </ul>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mt-4">
                <p className="font-semibold">We do not collect or store payment card details via our website.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">3. How We Use Your Information</h2>
              <p>We use the data we collect for purposes such as:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Responding to enquiries and managing bookings</li>
                <li>Providing booking confirmations and updates</li>
                <li>Improving website content and performance</li>
                <li>Ensuring site security and preventing abuse</li>
                <li>Fulfilling legal and regulatory obligations</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
                <p className="font-semibold">We never sell or rent your personal data to third parties.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">4. Cookies</h2>
              <p>
                We use cookies to improve site speed, remember preferences, and analyze visitor behavior. You can control or disable cookies in your browser settings — though some features may stop working as expected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">5. Log & Technical Data</h2>
              <p>When you visit our website, we may log:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device info</li>
                <li>Referring/exit pages</li>
                <li>Time spent on pages</li>
              </ul>
              <p className="mt-4">This data is anonymized and used for internal analytics only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">6. Your Rights (UAE & Global Compliance)</h2>
              <p>You may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Access the personal data we hold about you</li>
                <li>Correct or complete inaccurate data</li>
                <li>Request deletion of your data (where legally allowed)</li>
                <li>Object to or restrict how we process your data</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <div className="bg-luxury-cream/30 p-4 rounded-lg mt-4">
                <p>
                  To make a request, email us at <strong>info@arabiancoastholidayhomes.com</strong>. We'll respond within 30 calendar days in accordance with applicable law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">7. Children's Privacy</h2>
              <p>
                Our services are not directed at children under 13. We do not knowingly collect their data. If you believe a child has submitted information to us, please contact us immediately for removal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">8. External Links</h2>
              <p>
                Some pages on our site may link to external websites. We are not responsible for the privacy practices or content of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">9. Data Retention</h2>
              <p>
                We retain your data only as long as necessary for operational, legal, or audit purposes. Once no longer needed, we securely erase or archive it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">10. Contact Us</h2>
              <div className="bg-luxury-gold/10 border border-luxury-gold p-6 rounded-lg">
                <p className="font-semibold mb-4">If you have questions about this Privacy Policy or how we handle your data, please reach out:</p>
                <div className="space-y-2">
                  <p><strong>Arabian Coast Holiday Homes</strong></p>
                  <p>📍 Dubai, United Arab Emirates</p>
                  <p>📧 info@arabiancoastholidayhomes.com</p>
                  <p>🌐 www.arabiancoastholidayhomes.com</p>
                  <p>🧾 Company Licence Number: 1453578</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;