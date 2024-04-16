import React from 'react'
import Header from '@/components/Header'
import Home from '@/pages/LoanArmotization'
import Sidebar from '@/components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import LoanArmotization from '@/pages/LoanArmotization'

function Layout() {
    return (
        <>
            <div className="w-full h-screen
                            p-2 overflow-y-hidden
                            flex justify-between gap-5">
                <div className="w-56 h-full translate-x-px sm:block">
                    <Sidebar />
                </div>
                <div className="flex-1 flex flex-col">
                    <div className='w-full h-full 
                                    p-4 overflow-y-auto
                                  bg-white/95   
                                    rounded-lg border-2 border-slate-300
                                    dark:border-slate-800 dark:bg-[hsl(233,50%,8%)] dark:text-slate-50
                                    '>
                                        {/* shadow-lg shadow-gray-500/25 dark:shadow-blue-600/45  */}
                       
                        <Header />
                        <Routes>
                            <Route path='/la-calculator'
                             element={<LoanArmotization />} />
                        </Routes>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Layout