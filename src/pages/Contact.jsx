import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("success");
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Please fill out this form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>

                {/* Add more form fields */}

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    title: "Address",
                    content: "123 Shopping Street, NY 10001",
                  },
                  {
                    icon: "📞",
                    title: "Phone",
                    content: "+1 (234) 567-8900",
                  },
                  {
                    icon: "📧",
                    title: "Email",
                    content: "support@eshop.com",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start">
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-indigo-100">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
