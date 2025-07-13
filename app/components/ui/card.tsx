"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
