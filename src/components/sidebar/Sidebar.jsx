import React, { useState } from 'react'
import { IoHomeOutline, IoHome, IoTimerOutline, IoTimer } from "react-icons/io5";
import { LuChevronLeft } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import LinkItem from './LinkItem';
import { Button } from "@/components/ui/button"

function Sidebar({ isOpen, setisOpen }) {

  return (
    <div className='w-full h-full 
                      p-2
                    bg-white/95 
                    text-slate-950
                      rounded-lg border-2 border-slate-300  
                    dark:border-slate-800 dark:bg-[hsl(243,60%,10%)] dark:text-slate-100
                     '>
      {/* shadow-lg shadow-gray-500/25 dark:shadow-blue-600/45   */}

      <div className={cn('flex items-center transition-all ease-in-out duration-600 p-2 py-3',
        isOpen ? "gap-3 mb-2 justify-between" : "gap-0 justify-center")}>
        {isOpen ?
          <>
            <h1 className='text-lg font-semibold'>QuickTrax</h1>
            <Button variant="default" size="icon" className="rotate-0"
              onClick={() => setisOpen(false)}>
              <LuChevronLeft size="25"/>
            </Button>
          </>
          :
          <>
            <Button variant="default" size="icon" className="rotate-180"
              onClick={() => setisOpen(true)}>
              <LuChevronLeft />
            </Button>
          </>
        }
      </div>
      <nav
        className="w-full h-full 
                  px-2
                  flex flex-col gap-2 
                  text-md fond-semibold">
        <Link to="/">
          <LinkItem url="/" text="Home" 
            Icon={<IoHomeOutline size="25" />} 
            filledIcon= {<IoHome size="25" />} 
            isOpen={isOpen} />
        </Link>
        <Link to="/la-calculator">
          <LinkItem url="/la-calculator" text="Loan Armotization" 
            Icon={<IoTimerOutline size="25" />}  
            filledIcon={<IoTimer size="25" />}  
            isOpen={isOpen} />
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar