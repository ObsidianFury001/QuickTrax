import React from 'react'

function SubTitle({text, className}) {
  return (
    <div className='
                    text-md sm:text-lg md:text-xl 
                    text-gray-600 dark:text-gray-300 
                    font-semibold leading-tight tracking-tight'>
      {text}
    </div>
  )
}

export default SubTitle