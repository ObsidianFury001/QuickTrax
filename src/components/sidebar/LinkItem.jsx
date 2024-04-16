import { isTitleActive } from '@/hooks/titleFunctions'
import { cn } from '@/lib/utils'
import React from 'react'

function LinkItem({url, text, icon}) {
  return (
    <div className={cn((isTitleActive(url)) ? 
        "bg-[hsl(240,94%,63%)] dark:bg-[hsl(220,100%,68%)] text-white " : "text-gray-700 dark:text-gray-300",
        "p-2 rounded-sm transition-all ease-in-out duration-600 flex justify-start items-center gap-3")}>
        {icon} {text}
    </div>
  )
}

export default LinkItem