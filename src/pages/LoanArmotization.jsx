import React, { useState } from 'react'
import Divider from '@/components/Divider'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

function LoanArmotization() {
  const [Inputs, setInputs] = useState({
    loanAmount: 10000.00,
    term: 1,
    annualRate: 0,
    startDate: new Date(),
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value
    }));
  };
  console.log(Inputs.loanAmount)
  return (
    <>
    <div className="flex w-full items-center">
      <div className="flex w-full flex-col justify-start md:justify-center md:flex-row 
                      items-center gap-5">
        <div className="flex flex-col items-start space-y-2.5">
          <Label htmlFor="txtloanAmount">Loan Amount</Label>
          <Input
            id="loanAmount"
            placeholder="Enter the loan amount"
            type="number"
            value={Inputs.loanAmount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col items-start space-y-2.5">
          <Label htmlFor="txtTerm">Term (in years)</Label>
          <Input
            id="term"
            placeholder="Enter the term period."
            type="number"
            value={Inputs.term}
            onChange={handleInputChange}
            required
          />
        </div>     
        <div className="flex flex-col items-start space-y-2.5">
          <Label htmlFor="txtAnnualRate">Annual Rate (%)</Label>
          <Input
            id="annualRate"
            placeholder="Enter the annual rate (%)"
            type="number"
            value={Inputs.annualRate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col items-start space-y-2.5">
          <Label htmlFor="txtStartDate">Start Date</Label>
          <Input
            id="startDate"
            placeholder="Enter the start date"
            type="date"
            value={Inputs.startDate}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
    <section className="flex justify-center items-center mt-2">
      {
        <Button type="submit"
          className="w-full md:w-[160px] text-md font-bold " variant="primary"
        // onClick={LogIn}
        >
          {/*  {
            loading ?
              <AiOutlineLoading3Quarters
                className="mr-2 h-4 w-full md:w-[160px] text-md font-bold animate-spin" />
              :
              <>Login</>
          } */}Submit
        </Button>
      }
    </section>
  </>
  )
}

export default LoanArmotization