"use client";

import { useState } from "react";
import { Users, Clock, Car, CheckCircle } from "lucide-react";

export default function DashboardPage() {
  const [stats] = useState([
    {
      title: "Total Drivers",
      value: "1,234",
      icon: <Users className="w-8 h-8 text-amber-500" />,
      change: "+5.2%",
      positive: true,
    },
    {
      title: "Pending Approvals",
      value: "28",
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      change: "-2",
      positive: false,
    },
    {
      title: "Active Trips",
      value: "156",
      icon: <Car className="w-8 h-8 text-amber-500" />,
      change: "+12%",
      positive: true,
    },
    {
      title: "Completed Trips",
      value: "4,567",
      icon: <CheckCircle className="w-8 h-8 text-amber-500" />,
      change: "+8.1%",
      positive: true,
    },
  ]);

  const [recentActivity] = useState([
    {
      id: "1",
      driver: "John Adebayo",
      action: "Completed Trip",
      time: "2 hours ago",
      status: "Success",
    },
    {
      id: "2",
      driver: "Aisha Okonkwo",
      action: "Requested Approval",
      time: "4 hours ago",
      status: "Pending",
    },
    {
      id: "3",
      driver: "Chinedu Obi",
      action: "Started Trip",
      time: "6 hours ago",
      status: "In Progress",
    },
    {
      id: "4",
      driver: "Funmi Ade",
      action: "Profile Updated",
      time: "1 day ago",
      status: "Success",
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-amber-100">Welcome, Admin!</h2>
        <p className="text-gray-300 mt-2">
          Manage your drivers and trips efficiently from the Lagos Drivers Admin
          dashboard.
        </p>
        <button className="mt-4 px-4 py-2 bg-amber-600 text-black font-semibold rounded-lg hover:bg-amber-700 transition">
          View All Drivers
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p
                  className={`text-sm ${
                    stat.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </p>
              </div>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-amber-100">
            Recent Activity
          </h3>
          <table className="w-full mt-4 text-left">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-gray-700">
                <th className="py-3">Driver</th>
                <th className="py-3">Action</th>
                <th className="py-3">Time</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity) => (
                <tr
                  key={activity.id}
                  className="border-b border-gray-700 last:border-b-0"
                >
                  <td className="py-3 text-white">{activity.driver}</td>
                  <td className="py-3 text-gray-300">{activity.action}</td>
                  <td className="py-3 text-gray-300">{activity.time}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        activity.status === "Success"
                          ? "bg-green-500/20 text-green-500"
                          : activity.status === "Pending"
                          ? "bg-amber-500/20 text-amber-500"
                          : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-amber-100">
          Driver Activity Overview
        </h3>
        <div className="mt-4 h-64 flex items-center justify-center bg-gray-700 rounded-lg">
          <p className="text-gray-400">
            Chart placeholder (e.g., trips per day)
          </p>
        </div>
      </div>
    </div>
  );
}
