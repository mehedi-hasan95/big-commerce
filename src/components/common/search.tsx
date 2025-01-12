"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  const [value, setValue] = useState("all");
  return (
    <div className="flex items-center justify-center border-2 border-gray-200 rounded-md">
      <Select defaultValue={value} onValueChange={setValue}>
        <SelectTrigger className="w-auto border-0 focus:ring-0">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Input className="border-0 focus-visible:ring-0 transition-all duration-300 ease-in-out md:focus-visible:w-96" />
    </div>
  );
};
