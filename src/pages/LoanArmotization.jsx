import React, { useState, useEffect } from 'react'
import Divider from '@/components/Divider'
import FormFieldInput from '@/components/inputs/FormFieldInput'
import SubmitButton from '@/components/buttons/SubmitButton'
import TotalCard from '@/components/cards/TotalCard'
import SubTitle from '@/components/SubTitle'
import FormFieldDateInput from '@/components/inputs/FormFieldDateInput'
import { BiDollar } from "react-icons/bi";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { Users } from "lucide-react"
import { cn } from '@/lib/utils'

function LoanArmotization({ isOpen }) {
  const [loading, setLoading] = useState(false);

  // Input states
  const [inputs, setInputs] = useState({
    loanAmount: parseFloat(10000).toFixed(2),
    term: parseFloat(1).toFixed(2),
    annualRate: parseFloat(5).toFixed(2),
    startDate: new Date(),
    paymentFrequency: parseFloat(12).toFixed(2),
    payFromAccount: "",
    expAccount: "",
    endDate: new Date(),
    liabilityAccount: "",
    memo: "",
    cardId: ""
  }, []);

  // Calculated Params
  const [params, setParams] = useState({
    noOfPayments: 0,
    monthlyRate: parseFloat(0).toFixed(8),
    mortgageRate: parseFloat(0).toFixed(2)
  }, [inputs]);

  // Calculated Outputs
  const [outputs, setOutputs] = useState({
    totalAmount: parseFloat(0).toFixed(2),
    totalInterest: parseFloat(0).toFixed(2),
    totalPrincipal: parseFloat(0).toFixed(2)
  }, [inputs]);

  useEffect(() => {
    calculateMortage();
  }, [inputs]); // Trigger calculation when inputs change

  // Handlers start
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: value
    }));
  };

  const handleDateChange = (date) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      startDate: date
    }));
  };

  const handleDecimalChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]:
        (value == "" || parseFloat(value) == 0)
          ? parseFloat(0).toFixed(2) : parseFloat(value).toFixed(2)
    }));
  };

  const handleFormSubmit = (e) => {
  };
  // Handlers end

  // Calculation functions start
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
    if (inputs.loanAmount == 0 || inputs.annualRate == 0 || inputs.term == 0)
      setParams((prevParams) => ({
        "noOfPayments": 0,
        "monthlyRate": parseFloat(0).toFixed(8),
        "mortgageRate": parseFloat(0).toFixed(2)
      }));
    else {
      const rate = parseFloat(parseFloat(inputs.annualRate) / 100); // Convert annual rate to a decimal
      const nper = parseInt(inputs.term) * parseInt(inputs.paymentFrequency);
      const pv = -parseFloat(inputs.loanAmount);

      const monthlyRate = rate / parseInt(inputs.paymentFrequency);
      const mortgageRate = PMT(monthlyRate, nper, pv);

      setParams((prevParams) => ({
        "noOfPayments": nper,
        "monthlyRate": monthlyRate.toFixed(8),
        "mortgageRate": mortgageRate.toFixed(2)
      }));
    }
  }
  // Calculation functions end
  return (
    <>
      <form className='px-2'>
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <SubTitle text="Payment Details" />
          <div className="w-[100%]
                      flex flex-col justify-center lg:justify-between lg:items-center md:flex-row flex-wrap
                      gap-5">
            <FormFieldInput
              label="Loan Amount"
              id="loanAmount"
              placeholder="Enter the loan amount"
              type="number"
              value={inputs.loanAmount}
              onChange={handleInputChange}
              onBlur={handleDecimalChange}
              min={1}
              required
            />
            <FormFieldInput
              label="Term (in years)"
              id="term"
              placeholder="Enter the term period"
              type="number"
              value={inputs.term}
              onChange={handleInputChange}
              onBlur={handleDecimalChange}
              min="1"
              required
            />
            <FormFieldInput
              label="Annual Rate (%)"
              id="annualRate"
              placeholder="Enter the annual rate (%)"
              type="number"
              value={inputs.annualRate}
              onChange={handleInputChange}
              onBlur={handleDecimalChange}
              min={0}
              required
            />
            <FormFieldDateInput
              label="Start Date"
              id="startDate"
              placeholder="Enter the start date"
              value={inputs.startDate}
              setSelectedDate={handleDateChange} />
            <FormFieldInput
              label="Payment frequency"
              id="paymentFrequency"
              placeholder="1 Yearly, 6 Half-Yearly, 3 Quarterly, 12 Monthly"
              type="number"
              value={inputs.paymentFrequency}
              onChange={handleInputChange}
              onBlur={handleDecimalChange}
              required
            />
          </div>
        </div>
        <Divider />
        <div className="w-full flex flex-col justify-center items-start gap-4">
          <SubTitle text="Other Details" />
          <div className="w-[100%]
                      flex flex-col justify-center lg:justify-between lg:items-center md:flex-row flex-wrap
                      gap-5">
            <FormFieldInput
              label="Pay from Account"
              id="payFromAccount"
              placeholder="Enter a payment account no."
              type="text"
              value={inputs.payFromAccount}
              onChange={handleInputChange}
              required
            />
            <FormFieldInput
              label="Interest exp. account #6"
              id="expAccount"
              placeholder="Enter an expense account no."
              type="text"
              value={inputs.expAccount}
              onChange={handleInputChange}
              required
            />
            <FormFieldInput
              label="Loan liability account #2"
              id="liabilityAccount"
              placeholder="Enter the liability account no."
              type="text"
              value={inputs.liabilityAccount}
              onChange={handleInputChange}
              required
            />
            <FormFieldDateInput
              label="End Date"
              id="endDate"
              placeholder="Enter the end date"
              type="date"
              value={inputs.endDate}
              setSelectedDate={handleDateChange}
              disabled={true} />
            <FormFieldInput
              label="Memo"
              id="memo"
              placeholder="Enter a note"
              type="text"
              value={inputs.memo}
              onChange={handleInputChange}
            />
            <FormFieldInput
              label="Card ID"
              id="cardId"
              placeholder="Enter the card ID"
              type="text"
              value={inputs.cardId}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
      <section>
        <Divider />
        <div className={cn("mb-4 flex justify-between items-center flex-row gap-2 md:gap-5 w-full px-5 md:px-10",
          isOpen ? "max-[920px]:flex-col" : "max-[780px]:flex-col")}>
          <TotalCard
            Icon={<Users size="20" />}
            title="No. of Payments"
            value={parseInt(params.noOfPayments)}
            text="Total no. of payments"
          />
          <TotalCard
            title="Monthly Rate"
            Icon={<FaAcquisitionsIncorporated size="20" />}
            value={parseFloat(params.monthlyRate).toFixed(8)}
            text="Monthly interest rate"
          />
          <TotalCard
            title="Mortgage Amount"
            Icon={<BiDollar size="20" />}
            value={parseFloat(params.mortgageRate).toFixed(3)}
            text="Total mortgage"
          />
        </div>
        <div className={cn("mb-4 flex justify-between items-center flex-row gap-2 md:gap-5 w-full px-5 md:px-10",
          isOpen ? "max-[920px]:flex-col" : "max-[780px]:flex-col")}>
          <TotalCard
            Icon={<BiDollar size="20" color="green" />}
            title="Total Amount:"
            value={outputs.totalAmount}
            text="Net Amount"
          />
          <TotalCard
            Icon={<BiDollar size="20" color="pink" />}
            title="Total Amount:"
            value={outputs.totalPrincipal}
            text="Net principal amount"
          />
          <TotalCard
            Icon={<BiDollar size="20" color="orange" />}
            title="Total Interest:"
            value={outputs.totalInterest}
            text="Net. interest charged"
          />
        </div>
        {/* <Divider /> */}
        <SubmitButton loading={loading} setLoading={setLoading} />
      </section>
    </>
  )
}

export default LoanArmotization