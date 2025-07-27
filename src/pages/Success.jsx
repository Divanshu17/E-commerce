import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Success() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-8 flex items-center justify-center"
        >
          <motion.svg
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="w-12 h-12 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. We'll send you a confirmation email
            with your order details.
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h3 className="font-medium text-gray-900 mb-4">Order Summary</h3>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Order number:</span>
              <span className="font-medium">
                #{Math.random().toString().slice(2, 8)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Estimated delivery:</span>
              <span className="font-medium">3-5 business days</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              to="/profile"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Order Status
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Success;
