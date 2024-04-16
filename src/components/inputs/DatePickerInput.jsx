import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function DatePickerInput({selectedDate, setSelectedDate}) {
  return (
    /* 
      <Popover>
          <PopoverTrigger asChild>
            <div>
              <Button
                variant={"outline"}
                className={`w-[240px] pl-3 text-left font-normal ${selectedDate ? "" : "text-muted-foreground"}`}
              >
                {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
              initialFocus
            />
          </PopoverContent>
        </Popover> */
    <></>
  );
}


export default DatePickerInput