import React, { useState } from 'react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { RiSunFoggyFill } from "react-icons/ri";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { getTitle } from "@/hooks/titleFunctions"
import Title from './Title';

function Header({title}) {
    const { theme, setTheme } = useTheme()
    return (
        <>
            <header className="
                    px-1 pb-3 mb-4
                  bg-white/90                       
                  text-slate-950
                  border-b
                  dark:border-slate-800 dark:bg-[hsl(233,50%,8%)] dark:text-slate-50">
                    {/* rounded-lg border-2 border-slate-300
                    shadow-lg shadow-gray-500/25 dark:shadow-blue-600/45  */}
                    <nav className='px-2 
                                    flex items-center justify-between 
                                    text-sm'>
                        <div className='w-full 
                                        flex items-center justify-between'>                            
                                <Title text={getTitle()} />
                            <div>
                                    { theme == 'dark' ?
                                        <Button variant="default" size="icon"
                                            onClick={() => setTheme("light")}>
                                                <RiSunFoggyFill  /> :
                                        </Button>    
                                    :
                                        <Button variant="default" size="icon"
                                            onClick={() => setTheme("dark")}>
                                                <BsFillMoonStarsFill />
                                        </Button>
                                    }                             
                            </div>
                        </div>
                    </nav>
            </header>
        </>
    )
}

export default Header