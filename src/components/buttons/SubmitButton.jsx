import React from 'react';
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SubmitButton = ({ loading, onClick }) => (
  <div className='flex justify-center items-center mt-2 px-5'>
    <Button
      type="submit"
      className="w-full md:w-[160px] text-md font-semibold "
      variant="primary"
      onClick={onClick}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="mr-2 h-4 w-full md:w-[160px] text-md font-semibold animate-spin" />
      ) : (
        <>Submit</>
      )}
    </Button>
  </div>
);

export default SubmitButton;
