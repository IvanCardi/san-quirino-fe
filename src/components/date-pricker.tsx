import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { FormControl } from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function DatePicker({
  modal = true,
  onChange,
  value,
  minDate,
  disabled = false,
}: {
  value: Date;
  onChange: (...e: unknown[]) => void;
  modal?: boolean;
  minDate?: Date;
  disabled?: boolean;
}) {
  return (
    <Popover modal={modal}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            disabled={disabled}
            variant={"outline"}
            className={cn(
              "w-[240px] pl-3 text-left font-normal border-[3px] rounded-full h-[40px] border-[#053575]",
              !value && "text-muted-foreground"
            )}
          >
            {value ? format(value, "dd/MM/yyyy") : <span>Scegli la data</span>}
            <CalendarIcon className="ml-auto h-4 w-4" color="#053575" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 z-[100]" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          disabled={(date) =>
            minDate ? date < minDate : date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
