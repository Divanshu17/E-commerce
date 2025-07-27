import React, { useState } from "react";
import { motion } from "framer-motion";

function Profile() {
  const [activeTab, setActiveTab] = useState("orders");

  const orders = [
    {
      id: "#ORD-123",
      date: "2024-02-15",
      status: "Delivered",
      total: 249.99,
      items: 3,
    },
    // ...more orders
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white mb-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
                JD
              </div>
              <div>
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-indigo-100">john.doe@example.com</p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-sm mb-8">
            <nav className="flex divide-x border-b">
              {["Orders", "Wishlist", "Settings"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`flex-1 py-4 px-6 text-sm font-medium ${
                    activeTab === tab.toLowerCase()
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "orders" && (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {order.id}
                        </h3>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        {order.items} items
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-gray-900">
                          ${order.total}
                        </span>
                        <button className="ml-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
