"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input, InputProps } from "./input";
import React from "react";

export interface SearchInputProps extends InputProps {
  containerClassName?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("relative", containerClassName)}>
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input ref={ref} className={cn("pl-9", className)} {...props} />
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
