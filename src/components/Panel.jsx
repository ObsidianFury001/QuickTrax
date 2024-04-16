import React from 'react'

function Panel({children}) {
  return (
    <div className='rounded-lg border border-slate-300 bg-white
     text-slate-950 shadow-sm
    dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50'>
        {children}
    </div>
  )
}

export default Panel