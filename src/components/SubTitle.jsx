import React from 'react'

function SubTitle({text}) {
  return (
    <div className='text-md sm:text-lg md:text-xl 
                    text-gray-600 dark:text-gray-300 fond-semibold leading-tight tracking-wide '>
      {text}
    </div>
  )
}

export default SubTitle