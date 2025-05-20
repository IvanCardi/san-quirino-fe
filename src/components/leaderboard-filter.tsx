"use client";
import { RotateCcw, Search } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Office } from "@/lib/models/office";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function LeaderboardFilters({ offices }: { offices: Office[] }) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");
  const [searchName, setSearchName] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const resetFilters = () => {
    setSearchName("");
    setSelectedOffice("");
    setSelectedYear("");
    router.push(`/general-leaderboard`, { scroll: false });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (searchName && searchName !== "") {
      params.set("name", searchName);
    } else {
      params.delete("name");
    }

    if (selectedYear && selectedYear !== "") {
      params.set("year", selectedYear);
    } else {
      params.delete("year");
    }

    if (selectedOffice && selectedOffice !== "") {
      params.set("office", selectedOffice);
    } else {
      params.delete("office");
    }

    router.push(`/general-leaderboard?${params.toString()}`, { scroll: false });
  }, [searchName, selectedOffice, selectedYear]);

  return (
    <div className="flex flex-col gap-3 px-6">
      <div className="flex gap-3">
        <Select onValueChange={setSelectedYear} value={selectedYear}>
          <SelectTrigger className="w-[50%] bg-[#E7FEFF]">
            <SelectValue placeholder="Filtra per anno" />
          </SelectTrigger>
          <SelectContent className="bg-[#E7FEFF]">
            <SelectGroup>
              <SelectLabel>Anno</SelectLabel>
              {years.map((y) => (
                <SelectItem
                  className="focus:bg-transparent"
                  key={y}
                  value={y.toString()}
                >
                  {y}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedOffice} value={selectedOffice}>
          <SelectTrigger className="w-[50%] bg-[#E7FEFF]">
            <SelectValue placeholder="Filtra per ufficio" />
          </SelectTrigger>
          <SelectContent className="bg-[#E7FEFF]">
            <SelectGroup>
              <SelectLabel>Ufficio</SelectLabel>
              {offices.map((o) => (
                <SelectItem
                  className="focus:bg-transparent"
                  key={o.id}
                  value={o.id}
                >
                  {o.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2">
        <div className="relative h-fit w-full">
          <Input
            className="bg-[#E7FEFF] pl-10"
            placeholder="Cerca..."
            onChange={(e) => setSearchName(e.target.value)}
            value={searchName}
          ></Input>
          <Search className="absolute size-5 left-[13.5px] top-[9px]" />
        </div>
        <Button
          className="bg-[#E7FEFF] border border-input"
          onClick={resetFilters}
        >
          <RotateCcw color="black" />
        </Button>
      </div>
    </div>
  );
}
