import { isTitleActive } from '@/hooks/titleFunctions'
import { cn } from '@/lib/utils'
import React from 'react'

function LinkItem({url, text, Icon, IconFilled, isOpen}) {
  return (
    <div className={
        cn((isTitleActive(url)) ? 
        "bg-[hsl(240,94%,63%)] dark:bg-[hsl(220,100%,68%)] text-white " 
          : "text-gray-700 dark:text-gray-300",
          cn((isOpen? 
            "justify-start rounded-sm ":
            "justify-center rounded-3xl"),
          "flex items-center gap-3 shadow-md shadow-gray-500/25 dark:shadow-blue-600/45 transition-all ease-in-out duration-600 p-3"
        ))}>
          { isTitleActive(url)? IconFilled: Icon } 
          {isOpen? text: ""}
    </div>
  )
}

export default LinkItem