import { Search } from "lucide-react";
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

export default function LeaderboardFilters({
  offices,
}: {
  offices: { id: string; name: string }[];
}) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <div className="flex flex-col gap-3 px-6">
      <div className="flex gap-3">
        <Select>
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
        <Select>
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
      <div className="relative h-fit w-full">
        <Input className="bg-[#E7FEFF] pl-10" placeholder="Cerca..."></Input>
        <Search className="absolute size-5 left-[13.5px] top-[9px]" />
      </div>
    </div>
  );
}
