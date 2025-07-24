"use client";

import { useEffect, useState } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";

type ToastType = "success" | "error";

export function Toast({
  message,
  type = "success",
  onClose,
}: {
  message: string;
  type?: ToastType;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [onClose]);

  const icon =
    type === "success" ? (
      <CheckCircle className="w-5 h-5 text-green-500" />
    ) : (
      <AlertTriangle className="w-5 h-5 text-red-500" />
    );

  return visible ? (
    <div className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-white/20 animate-fadeIn">
      {icon}
      <p className="text-sm">{message}</p>
      <button
        onClick={() => {
          setVisible(false);
          onClose();
        }}
        className="ml-2 text-white/80 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  ) : null;
}
