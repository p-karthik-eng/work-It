import { LuPhone, LuMail, LuMapPin } from "react-icons/lu"; // React Icons
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-16 px-8 md:px-4 lg:mx-16 bg-white" id="contact">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 sm:text-left">Get in touch</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-left md:text-left">Send a message</h3>
                <p className="text-gray-600 mb-6 text-left md:text-left">
                  Have a question? Send us a message and we'll get back to you promptly!
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Give feedback"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>
                  <button className="lg:w-52 md:w-40   py-2 px-4 rounded-md text-white bg-gradient-to-r from-gray-700 to-blue-600 hover:opacity-90 transition">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-left">Contact Us</h3>
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-start">
                <LuPhone className="h-6 w-6 mr-3 text-blue-600" />
                <p className="text-gray-700 text-lg">+91 - 7416756511</p>
              </div>
              <div className="flex items-center justify-start">
                <LuMail className="h-6 w-6 mr-3 text-blue-600" />
                <p className="text-gray-700 text-lg">karthikputcha123@gmail.com</p>
              </div>
              <div className="flex items-center justify-start">
                <LuMapPin className="h-6 w-6 mr-3 text-blue-600" />
                <p className="text-gray-700 text-lg">
                  Ragiv gandhi university of knowledge and technologies -Nuzvid
                </p>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-8 h-[300px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7639.35579971031!2d80.81927869098838!3d16.792693285986175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e5f312c661%3A0xab7189f421622491!2sIIIT%20Nuzvid%20Campus%2C%20Nuzividu%2C%20Andhra%20Pradesh%20521202!5e0!3m2!1sen!2sin!4v1743791981319!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;