import React from 'react';
import { GrMoney } from "react-icons/gr";
import { IoHomeOutline, IoTimer } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import LinkItem from './LinkItem';

function Sidebar() {
  return (
    <div className='w-full h-full 
                      p-2
                    bg-white/95 
                    text-slate-950
                      rounded-lg border-2 border-slate-300  
                    dark:border-slate-800 dark:bg-[hsl(243,60%,10%)] dark:text-slate-100
                     '>
      {/* shadow-lg shadow-gray-500/25 dark:shadow-blue-600/45   */}
      <div className='flex justify-start items-center gap-3 p-4 mb-2'>
        <GrMoney />
        <h1 className='text-lg font-semibold'>QuickTrax</h1>
      </div>
      <nav
        className="w-full h-full 
                  px-2
                  flex flex-col gap-2 
                  text-md fond-semibold">        
        <Link to="/">
          <LinkItem url="/" text="Home" icon={<IoHomeOutline/>} />
        </Link>
        <Link to="/la-calculator">
          <LinkItem url="/la-calculator" text="Loan Armotization" icon={<IoTimer/>} />
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar