import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormFieldDateInput = ({ id, label, className, placeholder, value, setSelectedDate, disabled=false, ...props }) => (
  <div className="flex flex-col items-start space-y-2.5">
    <Label htmlFor={id}>{label}</Label>
    <Popover 
      id={id}
      className={cn("w-full md:w-36", className)}
      {...props} >
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full md:w-[280px] border-2 border-slate-300 bg-white px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-0 transition-all ease-in-out focus-visible:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:border-indigo-400 justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          {value ? format(value, "PPP") : <span>{placeholder}</span>}
          <CalendarIcon className="ml-auto h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={setSelectedDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  </div>
);

export default FormFieldDateInput;
