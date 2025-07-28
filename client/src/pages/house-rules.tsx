import { motion } from "framer-motion";

const HouseRules = () => {
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
            House Rules
          </h1>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-luxury-brown space-y-4 sm:space-y-6 break-words overflow-wrap-anywhere">
            <p>
              By booking with Arabian Coast Holiday Homes, all Guests and Visitors agree to the following rules. These are in place to maintain community standards, ensure safety, and comply with Dubai Tourism and building regulations.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">1. Residential Conduct</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All properties are located in residential, family-friendly communities.</li>
                <li>Guests and their visitors must behave respectfully and avoid any disruptive conduct.</li>
                <li>No illegal, commercial, or non-residential activity is permitted on the premises.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">2. Guest & Visitor Access</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All Guests and Visitors must be pre-registered at least 24 hours in advance, with valid ID provided to Arabian Coast Holiday Homes and, if required, to building security.</li>
                <li>Guests are fully responsible for their visitors' conduct.</li>
                <li>Unregistered visitors may be denied access by community management.</li>

                <li>Overnight stays by unregistered visitors are not permitted without prior written approval.</li>
                <li>Visitor access to facilities like the pool or gym may be restricted by building rules.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">3. Check-In / Check-Out</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Check-in time:</strong> From 3PM</li>
                <li><strong>Check-out time:</strong> 11:00 AM</li>
                <li>Late check-out without prior written approval will result in a full-night charge.</li>
                <li>Guests must inspect the apartment on arrival and report issues within 24 hours.</li>
                <li>The apartment must be left in a clean and reasonable condition at check-out.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">4. Noise & Neighbor Relations</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Quiet hours:</strong> 10:00 PM to 7:00 AM</li>
                <li>No loud music, shouting, or noise that can disturb neighbors — even if doors and windows are closed.</li>
                <li>Guests may not enter or use property or shared areas belonging to others.</li>
                <li>Any disputes with neighbors must be reported immediately to Arabian Coast Holiday Homes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">5. Parties & Gatherings</h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <ul className="list-disc list-inside space-y-2">
                  <li>Parties, events, and gatherings are strictly prohibited.</li>
                  <li>Violation may result in immediate eviction and full security deposit forfeiture.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">6. Community Facilities</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Use of shared facilities (e.g., pool, gym) is subject to building rules and operating hours.</li>
                <li>No glassware in pool areas.</li>
                <li>Guests use facilities at their own risk and must supervise children at all times.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">7. Child Safety</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Children must be supervised at all times, including in the apartment, on balconies, and in shared areas.</li>
                <li>Arabian Coast Holiday Homes is not liable for injuries due to lack of supervision.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">8. Smoking Policy</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                <ul className="list-disc list-inside space-y-2">
                  <li>Smoking, vaping, and shisha are not allowed indoors or on balconies.</li>
                  <li>Violations will result in deep cleaning fees and possible eviction.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">9. BBQ Use</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>BBQs are not allowed inside apartments or on balconies.</li>
                <li>Use is permitted only in designated building areas with prior written approval.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">10. Pet Policy</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Pets are not allowed, unless specifically approved in writing before check-in.</li>
                <li>Pet-friendly apartments are limited, and additional fees and signed terms apply.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">11. Property Condition</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Guests are expected to keep the apartment clean and damage-free.</li>
                <li>All issues must be reported within 24 hours of check-in.</li>
                <li>Unreported damage may result in deductions from the security deposit.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">12. Waste Disposal</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Waste must be disposed of in the building's designated bins.</li>
                <li>Do not leave rubbish in common areas, hallways, or balconies.</li>
                <li>Follow community rules on recycling and waste separation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">13. Parking</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Parking is allowed only in assigned or approved spaces.</li>
                <li>Unauthorized parking may lead to fines or towing at the Guest's expense.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">14. Modifications</h2>
              <p>Guests may not alter, mount, or install anything on walls, furniture, or fixtures without approval.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">15. Emergencies</h2>
              <div className="bg-luxury-cream/30 p-4 rounded-lg">
                <p>For urgent issues during your stay, please contact:</p>
                <p className="text-xl font-semibold text-luxury-brown mt-2">+971 55 816 6062</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">16. Definitions</h2>
              <ul className="list-none space-y-2">
                <li><strong>Guest:</strong> The individual who made the reservation</li>
                <li><strong>Visitor:</strong> Any non-registered person present at the property</li>
                <li><strong>Operator:</strong> Arabian Coast Holiday Homes</li>
                <li><strong>DTCM:</strong> Department of Economy and Tourism – Dubai</li>
                <li><strong>TDF:</strong> Tourism Dirham Fee</li>
                <li><strong>PSC:</strong> Property Service Charge</li>
              </ul>
            </section>

            <div className="bg-luxury-gold/10 border border-luxury-gold p-6 rounded-lg mt-8">
              <p className="font-semibold mb-4">By staying at a property managed by Arabian Coast Holiday Homes, Guests confirm they accept:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Reservation Terms & Conditions</li>
                <li>Cancellation & Refund Policy</li>
                <li>House Rules (this page)</li>
              </ul>
              <p className="mt-4 font-semibold text-red-600">
                Violation of these rules may result in eviction without refund and/or deductions from the security deposit.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HouseRules;