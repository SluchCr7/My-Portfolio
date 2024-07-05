import React from 'react'

const ContactInput = (props) => {
  return (
    <div className='input flex flex-col items-start gap-3'>
        <label className='text-white/60 text-sm'>{props.label}</label>
        <input type="text" className='w-full bg-[#232329] border border-gray-300 text-white/60 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5' />
    </div>
  )
}

export default ContactInput