import React, { useState, useRef } from 'react'
import Input from './Input'
import Select from './Select'
import LastInput from './LastInput'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate()
    const [Data, setData] = useState({
        FirstName: '',
        LastName: '',
        Username: '',
        Email: '',
        Password: '',
        Phoneno: '',
        Country: '',
        City: '',
        PanNumber: '',
        AadharNumber: '',
    })

    const [Error, setError] = useState({})
    const [Validate, setValidate] = useState(true)
    const [Validate1, setValidate1] = useState(true)
    const [Validate2, setValidate2] = useState(false)

    const errorObj = {
        FirstName: '',
        LastName: '',
        Username: '',
        Email: '',
        Password: '',
        Phoneno: '',
        Country: 'Select Your Country',
        City: 'Select Your City',
        PanNumber: '',

    }

    const handelSubmit = (e) => {
        e.preventDefault();
        navigate('/success', { state: { Data } });
        console.log("Submitted")
        console.log("data", Data)
        console.log(Error)
    }

    const handelOnChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
    }

    const handelValidation = () => {
        const namePattern = /^[a-zA-Z]{2,}(?:[ -][a-zA-Z]+)*$/;
        const usernamePattern = /^[a-zA-Z][a-zA-Z0-9._]{2,14}$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const phoneNoPattern = /^\+?\d{1,3}[- ]?\d{7,10}$/;
        const panNoPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!namePattern.test(Data.FirstName) && Data.FirstName != "") {
            errorObj.FirstName = "Invalid First Name"
        } else {
            delete errorObj.FirstName
        }

        if (!namePattern.test(Data.LastName) && Data.LastName != "") {
            errorObj.LastName = "Invalid Last Name"
        } else {
            delete errorObj.LastName
        }

        if (!usernamePattern.test(Data.Username) && Data.Username != "") {
            errorObj.Username = "Invalid UserName"
        } else {
            delete errorObj.Username
        }

        if (!emailPattern.test(Data.Email) && Data.Email != "") {
            errorObj.Email = "Invalid Email"
        } else {
            delete errorObj.Email
        }

        if (!passwordPattern.test(Data.Password) && Data.Password != "") {
            errorObj.Password = "Invalid Password"
        } else {
            delete errorObj.Password
        }

        if (!phoneNoPattern.test(Data.Phoneno) && Data.Phoneno != "") {
            errorObj.Phoneno = "Invalid Phone Number"
        } else {
            delete errorObj.Phoneno
        }

        if (!panNoPattern.test(Data.PanNumber) && Data.PanNumber != "") {
            errorObj.PanNumber = "Invalid Pan Number"
        } else {
            delete errorObj.PanNumber
        }
        if (Data.Country === "Select Your Country" && Data.Country == "") {
            errorObj.Country = "Select Your Country"
        } else {
            delete errorObj.Country
        }

        if (Data.City === "Select Your City" && Data.City == "") {
            errorObj.City = "Select Your City"
        } else {
            delete errorObj.City
        }
        const size = Object.keys(errorObj).length
        if (size != 0) {
            setValidate(false)
            
            console.log(Validate)
        } else {
            setValidate(true)
            
            console.log(Validate)
        }
        setError(errorObj)
        console.log("size", size)
        console.log("Form error:", Error)

    }

    return (
        <>
            <div className='text-3xl font-bold flex justify-center my-5'>Form Validation for CSI</div>
            <div className='flex justify-center my-6 '>
                <div className='w-1/4 px-3 border-4 shadow-md'>
                    <form action="" className='flex flex-col' onSubmit={handelSubmit} autoComplete='off'>

                        <Input label="First Name" name="FirstName" type="text" error={Error} placeholder='Enter your First Name' handeler={handelOnChange} handelValidation={handelValidation} />
                        <Input label="Last Name" name="LastName" type="text" error={Error} placeholder='Enter your Last Name' handeler={handelOnChange} handelValidation={handelValidation} />
                        <Input label="Username" name="Username" type="text" error={Error} placeholder='Enter your Username' handeler={handelOnChange} handelValidation={handelValidation} />
                        <Input label="E-mail" name="Email" type="email" error={Error} placeholder='Enter your Email' handeler={handelOnChange} handelValidation={handelValidation} /> { /*make type = email */}
                        <Input label="Password" name="Password" type="Password" error={Error} placeholder='Enter your Password' handeler={handelOnChange} handelValidation={handelValidation} />
                        <Input label="Phone Number" name="Phoneno" type="tel" error={Error} placeholder='Enter your Phone Number' handeler={handelOnChange} handelValidation={handelValidation} />


                        <Select validate={setValidate2} label="Country" name="Country" error={Error} data={Data} setData={setData} />


                        <Input label="Pan Number" name="PanNumber" type="text" error={Error} placeholder='Enter your Pan Number' handeler={handelOnChange} handelValidation={handelValidation} />
                        <LastInput validate={setValidate1} label="AadharCard Number" name="AadharNumber" error={setError} type="text" placeholder='Enter your Aadhar Number' setData={setData} Data={Data} />

                        <button type="submit" id="btn" className={`my-2 border-2 ${!Validate || !Validate1 || !Validate2
                                ? 'bg-white text-black cursor-not-allowed font-semibold'
                                : 'bg-green-500 text-white font-semibold cursor-pointer'
                            } rounded-xl`} disabled={!Validate || !Validate1 || !Validate2}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form

// disabled={!Validate}