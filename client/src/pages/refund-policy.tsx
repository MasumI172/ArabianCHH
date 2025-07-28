import { motion } from "framer-motion";

const RefundPolicy = () => {
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
            Cancellation and Refund Policy
          </h1>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-luxury-brown space-y-4 sm:space-y-6 break-words overflow-wrap-anywhere">
            <p>
              This Cancellation and Refund Policy applies to all reservations made through our website, in person, via phone, or through third-party platforms such as Airbnb and Booking.com.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">1. How to Cancel Your Booking</h2>
              <p>To cancel a reservation made directly with Arabian Coast Holiday Homes L.L.C., you must submit a written cancellation request as follows:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Email info@arabiancoastholidayhomes.com from the same email address used to make the booking</li>
                <li>Include your full name, booking reference, and a clear request to cancel</li>
              </ul>
              <p className="mt-4">
                For bookings made via Airbnb, Booking.com, or other partner platforms, cancellations must be submitted directly through the relevant platform, following their applicable policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">2. General Cancellation Terms</h2>
              <p>Unless otherwise agreed in writing, the following terms apply:</p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-luxury-brown mb-2">Free Cancellation:</h3>
                  <p>Cancellations made at least 5 days before check-in are eligible for a full refund, excluding any processing or transaction fees.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-luxury-brown mb-2">Late Cancellation:</h3>
                  <p>Cancellations made less than 5 days before check-in may be charged partially or in full, depending on the booking terms and property type.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-luxury-brown mb-2">No-Show:</h3>
                  <p>Guests who do not arrive and fail to cancel in advance will be considered no-shows, and the booking is non-refundable.</p>
                </div>
              </div>

              <div className="bg-luxury-cream/30 p-4 rounded-lg mt-6">
                <p className="text-sm">
                  <strong>Note:</strong> For reservations via Airbnb, Booking.com, or similar platforms, their selected cancellation policy will apply and may override the terms above.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">3. Refund Processing</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Refunds (if applicable) are processed within 7–14 business days to the original payment method.</li>
                <li>Any transaction, currency conversion, or administrative fees are non-refundable unless required by UAE consumer protection regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">4. Security Deposit</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>2000 AED security deposit required for all bookings (cash or digital).</li>
                <li>This will be returned to guests after inspection of property/check-out, subject to no damages, missing items, or violations of House Rules.</li>
                <li>If deductions are necessary, we will provide a written breakdown with supporting evidence.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">5. Operator Rights</h2>
              <p>Arabian Coast Holiday Homes L.L.C. reserves the right to withhold amounts from the booking or deposit in cases of:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Cancellation outside the permitted window</li>
                <li>No-shows</li>
                <li>Property damage or missing items</li>
                <li>Breach of House Rules or Reservation Terms</li>
                <li>Unauthorized events, parties, or smoking</li>
                <li>Excessive cleaning required post-checkout</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">6. Guest Agreement</h2>
              <p>By making a reservation, the Guest acknowledges and agrees to the:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Reservation Terms & Conditions</li>
                <li>Cancellation and Refund Policy (this page)</li>
                <li>House Rules (provided before or at check-in)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-luxury-gold mb-4">7. Governing Law</h2>
              <p>
                This policy is governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;