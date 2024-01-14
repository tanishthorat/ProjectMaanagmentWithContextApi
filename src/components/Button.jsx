import React from 'react'

export default function Button({children,...props}) {
  return (
    <button {...props} className='px-4 py-2 text-xs md:text-base rounded-md bg-slate-700 text-slate-300 hover:bg-slate-500 hover:text-stone-100'>{children}</button>
  )
}
