import { isTitleActive } from '@/hooks/titleFunctions'
import { cn } from '@/lib/utils'
import React from 'react'

function LinkItem({url, text, Icon, filledIcon, isOpen}) {
  return (
    <div className={cn((isTitleActive(url)) ? 
        "bg-[hsl(240,94%,63%)] dark:bg-[hsl(220,100%,68%)] text-white " : "text-gray-700 dark:text-gray-300",
        "rounded-sm transition-all ease-in-out duration-600 p-3  ")}>
        <div className={cn((isOpen? "justify-start": "justify-center"), "flex items-center gap-3")} >
          { isTitleActive(url)? filledIcon: Icon} 
          {isOpen? text: ""}
        </div>
    </div>
  )
}

export default LinkItem