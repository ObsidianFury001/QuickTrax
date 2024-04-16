import React from 'react'

function Title({text}) {
  return (
    <h1 className='text-xl sm:text-2xl md:text-3xl font-medium leading-tight tracking-wide'>
      {text}
    </h1>
  )
}

export default Title