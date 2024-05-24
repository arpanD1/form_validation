import React, { useRef, useState } from 'react'

const LastInput = ({ validate, label, name, type, placeholder, error, Data, setData}) => {
    const [number, setNumber] = useState(true)
    const errorObj= {
        AadharNumber: '',
    }

    const handelValidation = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
        
        const aadharNoPattern = /^\d{11}$/; 
        console.log(aadharNoPattern.test(Data.AadharNumber))
        if (!aadharNoPattern.test(Data.AadharNumber) && Data.AadharNumber != "") {
            // error.AadharNumber = "Invalid Aadhar Number"
            errorObj.AadharNumber = "Invalid Aadhar Number"
            setNumber(false)
            validate(false)
        } else if(error.AadharNumber == "") {
            // delete error.AadharNumber
            delete errorObj.AadharNumber
            setNumber(true)
            validate(true)
        } else{
            // delete error.AadharNumber
            delete errorObj.AadharNumber
            setNumber(true)
            validate(true)
        }
        error(errorObj)

        console.log("Error", errorObj)
    }    
  return (
    <>
        <label htmlFor={name} className='px-5'>{label}<span className='text-red-900 text-xl px-2'>*</span></label>
        <input  type={type} name={name} className='my-2 border-2 border-black' required placeholder={placeholder} onChange={handelValidation}/>
        
        {!number  && <p className='text-red-900'>Invalid Aadhar Number</p>}
    </>
  )
}

export default LastInput
