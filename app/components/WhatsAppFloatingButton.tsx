"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const whatsappNumber = "2349032702233"; // Without + and with country code

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
