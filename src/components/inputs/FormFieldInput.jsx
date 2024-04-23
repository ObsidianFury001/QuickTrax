import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from '@/lib/utils';

const FormFieldInput = ({ label, id, placeholder, type, value, onChange, onBlur, className }) => (
  <div className="flex flex-col items-start space-y-2.5">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required
      className={cn("w-full md:w-36", className)}
    />
  </div>
);

export default FormFieldInput;
