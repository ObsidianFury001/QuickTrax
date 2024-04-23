import React, { useState, useEffect } from 'react'
import Divider from '@/components/Divider'
import FormFieldInput from '@/components/inputs/FormFieldInput'
import SubmitButton from '@/components/buttons/SubmitButton'
import TotalCard from '@/components/cards/TotalCard'
import { BiDollar } from "react-icons/bi";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { Users } from "lucide-react"
import { cn } from '@/lib/utils'

function LoanArmotization({isOpen}) {
  const [loading, setLoading] = useState(false);

  // Input states
  const [inputs, setInputs] = useState({
    loanAmount: parseFloat(10000).toFixed(2),
    term: 1,
    annualRate: parseFloat(5).toFixed(2),
    startDate: new Date(),
    paymentFrequency: 12,
  }, []);

  // Calculated Params
  const [params, setParams] = useState({
    noOfPayments: 0,
    monthlyRate: parseFloat(0).toFixed(8),
    mortgageRate: parseFloat(0).toFixed(2)
  }, [inputs]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value
    }));
  };

  const handleDecimalChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: (id === "loanAmount" || id === "annualRate") ? parseFloat(value).toFixed(2) : value
    }));
  };
  
  useEffect(() => {
    calculateMortage();
  }, [inputs]); // Trigger calculation when inputs change

  // Master method to calculate Mortgage amount
  const PMT = (rate, nper, pv, fv = 0, type = 0) => {
    if (rate == 0) {
        return -(pv + fv) / nper;
    }

    const pvif = Math.pow(1 + rate, nper);
    const pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        return pmt / (1 + rate);
    }

    return pmt;
  }

  // Calculate Mortage amount
  const calculateMortage = () => {     
    const rate = parseFloat(parseFloat(inputs.annualRate) / 100); // Convert annual rate to a decimal
    const nper = parseInt(inputs.term) * parseInt(inputs.paymentFrequency);
    const pv = -parseFloat(inputs.loanAmount);
  
    const monthlyRate = rate / parseInt(inputs.paymentFrequency);
    const mortgageRate = PMT(monthlyRate, nper, pv);

    setParams((prevParams) => ({
      "noOfPayments":  nper,
      "monthlyRate": monthlyRate.toFixed(8),
      "mortgageRate": mortgageRate.toFixed(2)
    }));
  }
  return (
    <form>
    <div className="w-full flex justify-center border-0 items-center">
      <div className="w-[90%]
                      flex flex-col md:flex-row flex-wrap
                      gap-5">
        <FormFieldInput
            label="Loan Amount"
            id="loanAmount"
            placeholder="Enter the loan amount"
            type="number"
            value={inputs.loanAmount}
            onChange={handleInputChange}
            onBlur={handleDecimalChange}
            required
          />
        <FormFieldInput
            label="Term (in years)"
            id="term"
            placeholder="Enter the term period."
            type="number"
            value={inputs.term}
            onChange={handleInputChange}
            onBlur={handleDecimalChange}
            required
          />
        <FormFieldInput
            label="Annual Rate (%)"
            id="annualRate"
            placeholder="Enter the annual rate (%)"
            type="number"
            value={inputs.annualRate}
            onChange={handleInputChange}
            required
          />
         <FormFieldInput
            label="Start Date"
            id="startDate"
            placeholder="Enter the start date"
            type="date"
            value={inputs.startDate}
            onChange={handleInputChange}
            required
          /> 
          <FormFieldInput
            label="Payment frequency"
            id="paymentFrequency"
            placeholder="1 Yearly, 6 Half-Yearly, 3 Quarterly, 12 Monthly"
            type="number"
            value={inputs.paymentFrequency}
            onChange={handleInputChange}
            required
          />  
      </div>
    </div>
    <section>    
      <Divider/>
      <div className={cn("flex justify-between items-center flex-row gap-2 md:gap-5 w-full px-5 md:px-10",
      isOpen? "max-[920px]:flex-col": "max-[780px]:flex-col")}>
        <TotalCard
          Icon={<Users size="20"/>}
          title="No. of Payments"
          value={parseInt(params.noOfPayments)}
          text="Total no. of payments"
        />
        <TotalCard
          title="Monthly Rate"
          Icon={<FaAcquisitionsIncorporated size="20"/>}
          value={parseFloat(params.monthlyRate).toFixed(8)}
          text="Monthly interest rate"
        />
        <TotalCard
          title="Mortgage Amount"
          Icon={<BiDollar size="20"/>}
          value={parseFloat(params.mortgageRate).toFixed(3)}
          text="Total mortgage amount"
        />
      </div>
      <Divider/>
      <SubmitButton loading={loading} setLoading={setLoading} />
    </section>
  </form>
  )
}

export default LoanArmotization