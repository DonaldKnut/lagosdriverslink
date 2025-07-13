"use client";

import {
  Check,
  X,
  Clock,
  AlertTriangle,
  User,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { SearchInput } from "@/app/components/ui/search-input";

// Mock data - replace with your API calls
const approvalRequests = [
  {
    id: "REQ-1001",
    user: "John Doe",
    type: "Driver Registration",
    date: "2023-11-15",
    status: "pending",
    details: "New driver application",
  },
  {
    id: "REQ-1002",
    user: "Jane Smith",
    type: "Vehicle Approval",
    date: "2023-11-14",
    status: "approved",
    details: "Toyota Camry 2020",
  },
  {
    id: "REQ-1003",
    user: "Mike Johnson",
    type: "Document Upload",
    date: "2023-11-13",
    status: "rejected",
    details: "Insurance document expired",
  },
  {
    id: "REQ-1004",
    user: "Sarah Williams",
    type: "Profile Update",
    date: "2023-11-12",
    status: "pending",
    details: "Changed phone number",
  },
  {
    id: "REQ-1005",
    user: "David Brown",
    type: "Vehicle Approval",
    date: "2023-11-11",
    status: "pending",
    details: "Honda Accord 2019",
  },
];

export default function ApprovalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredRequests = approvalRequests.filter((request) => {
    const matchesSearch =
      request.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || request.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <Check className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <X className="h-4 w-4 text-red-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Approval Requests</h2>
          <p className="text-sm text-gray-400">
            Review and manage pending approvals
          </p>
        </div>
        <div className="flex gap-3">
          <SearchInput
            placeholder="Search requests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="relative">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="appearance-none bg-gray-800 border border-gray-700 rounded-md py-2 pl-3 pr-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Pending Approvals</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="p-3 rounded-full bg-amber-500/10">
              <Clock className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Approved Today</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div className="p-3 rounded-full bg-green-500/10">
              <Check className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Rejected Today</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="p-3 rounded-full bg-red-500/10">
              <X className="h-5 w-5 text-red-500" />
            </div>
          </div>
        </Card>
      </div>

      {/* Approval Requests Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Request ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Details</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    {request.user}
                  </div>
                </TableCell>
                <TableCell>{request.type}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      request.status === "approved"
                        ? "success"
                        : request.status === "rejected"
                        ? "destructive"
                        : "warning"
                    }
                    className="flex items-center gap-1"
                  >
                    {getStatusIcon(request.status)}
                    {request.status.charAt(0).toUpperCase() +
                      request.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-400">
                  {request.details}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  {request.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 bg-green-600/10 hover:bg-green-600/20 border-green-600 text-green-400"
                      >
                        <Check className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 bg-red-600/10 hover:bg-red-600/20 border-red-600 text-red-400"
                      >
                        <X className="h-3 w-3 mr-1" />
                        Reject
                      </Button>
                    </>
                  )}
                  <Button size="sm" variant="outline" className="h-8">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
