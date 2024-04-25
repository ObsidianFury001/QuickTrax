import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from '@/lib/utils';

const FormFieldInput = ({ id, label, className, ...props }) => (
  <div className="flex flex-col items-start space-y-2.5">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      className={cn("w-full md:w-[280px]", className)}
      {...props} />
  </div>
);

export default FormFieldInput;
