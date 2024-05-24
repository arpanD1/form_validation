import React, { useRef, useState } from 'react'

const Input = ({ label, name, type, placeholder, error, handeler, handelValidation}) => {
  
  return (
    <>
        <label htmlFor={name} className='px-5'>{label}<span className='text-red-900 text-xl px-2'>*</span></label>
        <input  type={type} name={name} className='my-2 border-2 border-black' required placeholder={placeholder} onChange={handeler} onBlur={handelValidation} autoComplete='off'/>
        {error[name] != "" && <p className='text-red-900'>{error[name]}</p>}
    </>
  )
}

export default Input
