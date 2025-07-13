"use client";

import { Save, Mail, Bell, Lock, Globe, User } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Switch } from "@/app/components/ui/switch";
import { Separator } from "@/app/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Account Settings</h2>
        <Button className="bg-amber-600 hover:bg-amber-700">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Navigation */}
        <div className="space-y-4">
          <Card className="p-2">
            <nav className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-amber-600/30 text-amber-400">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700/50 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700/50 text-gray-300">
                <Lock className="h-4 w-4" />
                <span>Security</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700/50 text-gray-300">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700/50 text-gray-300">
                <Globe className="h-4 w-4" />
                <span>Preferences</span>
              </button>
            </nav>
          </Card>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-amber-400" />
              Profile Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  defaultValue="Admin user for Lagos Drivers platform"
                />
              </div>
            </div>
          </Card>

          {/* Email Section */}
          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5 text-amber-400" />
              Email Address
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Primary Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="admin@lagosdrivers.com"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="email-notifications" />
                <Label htmlFor="email-notifications">
                  Receive email notifications
                </Label>
              </div>
            </div>
          </Card>

          {/* Security Section */}
          <Card>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-amber-400" />
              Security
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    defaultValue="········"
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                  >
                    Change
                  </Button>
                </div>
              </div>
              <Separator className="bg-gray-700" />
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" />
                <Label htmlFor="two-factor">Two-factor authentication</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="session-timeout" defaultChecked />
                <Label htmlFor="session-timeout">
                  Enable session timeout (30 mins)
                </Label>
              </div>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-500/30 bg-red-500/10">
            <h3 className="font-semibold text-lg mb-4 text-red-400">
              Danger Zone
            </h3>
            <div className="space-y-4">
              <div>
                <Label className="text-red-300">Delete Account</Label>
                <p className="text-sm text-red-400/70 mb-2">
                  Permanently remove your account and all associated data
                </p>
                <Button
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700"
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
