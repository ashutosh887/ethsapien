"use client";

import MyCredentials from "@/components/dashboard/tabs/MyCredentials";
import NetworkActivity from "@/components/dashboard/tabs/NetworkActivity";
import Profile from "@/components/dashboard/tabs/Profile";
import Settings from "@/components/dashboard/tabs/Settings";
import VerifyCredentials from "@/components/dashboard/tabs/VerifyCredentials";
import { useState } from "react";
import { useAccount } from "wagmi"; // Import RainbowKit's hook

const Dashboard = () => {
  const { address } = useAccount(); // Fetch the connected wallet address
  const [activeTab, setActiveTab] = useState("credentials");

  const renderTabContent = () => {
    switch (activeTab) {
      case "credentials":
        return <MyCredentials />;
      case "profile":
        return <Profile walletAddress={address} />;
      case "settings":
        return <Settings />;
      case "network":
        return <NetworkActivity />;
      case "verify":
        return <VerifyCredentials />;
      default:
        return <MyCredentials />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Dashboard
      </h2>
      <div className="flex space-x-4 mb-6 border-b pb-2">
        <button
          onClick={() => setActiveTab("credentials")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "credentials"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          My Credentials
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "settings"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Settings
        </button>
        <button
          onClick={() => setActiveTab("network")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "network"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Network Activity
        </button>
        <button
          onClick={() => setActiveTab("verify")}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "verify"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          Verify Credentials
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;
