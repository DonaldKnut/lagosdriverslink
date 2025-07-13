// components/Toast.tsx
"use client";

import { useEffect } from "react";
import { CheckCircle, AlertTriangle, X } from "lucide-react";
import { create } from "zustand";

interface ToastState {
  show: boolean;
  type: "success" | "error";
  message: string;
  trigger: (type: "success" | "error", message: string) => void;
  close: () => void;
}

export const useToast = create<ToastState>((set) => ({
  show: false,
  type: "success",
  message: "",
  trigger: (type, message) => set({ show: true, type, message }),
  close: () => set({ show: false }),
}));

export function Toast() {
  const { show, type, message, close } = useToast();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => close(), 4000);
      return () => clearTimeout(timer);
    }
  }, [show, close]);

  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-xl backdrop-blur-md border bg-black/60 border-yellow-500 text-white transition-transform animate-fade-in-up`}
      >
        {type === "success" ? (
          <CheckCircle className="text-yellow-400 w-6 h-6" />
        ) : (
          <AlertTriangle className="text-red-400 w-6 h-6" />
        )}
        <span className="text-sm font-medium text-white max-w-[260px]">
          {message}
        </span>
        <button
          onClick={close}
          className="ml-auto text-white hover:text-yellow-400"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Usage inside a form submit:
// import { useToast } from '@/components/Toast';
// const { trigger } = useToast();
// trigger('success', 'Account created!');
// trigger('error', 'Email already exists!');
