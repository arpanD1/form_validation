import React, { useState } from 'react'

const Select = ({ validate, label, name, error,data, setData }) => {

    const [selectCountry, setSelectCountry] = useState("Select Your Country")
    const [selectCity, setSelectCity] = useState("Select Your City")
    
    const countriesWithCities = {
        "Select Your Country": ["Select Your City"],
        "United States": [
            "Select Your City",
            "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Phoenix",
            "Philadelphia",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose"
        ],
        "Canada": [
            "Select Your City",
            "Toronto",
            "Montreal",
            "Vancouver",
            "Calgary",
            "Edmonton",
            "Ottawa",
            "Winnipeg",
            "Quebec City",
            "Hamilton",
            "Kitchener"
        ],
        "United Kingdom": [
            "Select Your City",
            "London",
            "Birmingham",
            "Manchester",
            "Glasgow",
            "Liverpool",
            "Bristol",
            "Sheffield",
            "Leeds",
            "Edinburgh",
            "Leicester"
        ],
        "Australia": [
            "Select Your City",
            "Sydney",
            "Melbourne",
            "Brisbane",
            "Perth",
            "Adelaide",
            "Gold Coast",
            "Canberra",
            "Newcastle",
            "Wollongong",
            "Logan City"
        ],
        "Germany": [
            "Select Your City",
            "Berlin",
            "Hamburg",
            "Munich",
            "Cologne",
            "Frankfurt",
            "Stuttgart",
            "Düsseldorf",
            "Dortmund",
            "Essen",
            "Leipzig"
        ],
        "India": [
            "Select Your City",
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Hyderabad",
            "Ahmedabad",
            "Chennai",
            "Kolkata",
            "Surat",
            "Pune",
            "Jaipur"
        ],
        "China": [
            "Select Your City",
            "Shanghai",
            "Beijing",
            "Chongqing",
            "Tianjin",
            "Guangzhou",
            "Shenzhen",
            "Chengdu",
            "Nanjing",
            "Wuhan",
            "Hangzhou"
        ],
        "Brazil": [
            "Select Your City",
            "São Paulo",
            "Rio de Janeiro",
            "Brasília",
            "Salvador",
            "Fortaleza",
            "Belo Horizonte",
            "Manaus",
            "Curitiba",
            "Recife",
            "Porto Alegre"
        ],
        "Japan": [
            "Select Your City",
            "Tokyo",
            "Yokohama",
            "Osaka",
            "Nagoya",
            "Sapporo",
            "Kobe",
            "Kyoto",
            "Fukuoka",
            "Kawasaki",
            "Saitama"
        ],
        "Russia": [
            "Select Your City",
            "Moscow",
            "Saint Petersburg",
            "Novosibirsk",
            "Yekaterinburg",
            "Nizhny Novgorod",
            "Kazan",
            "Chelyabinsk",
            "Omsk",
            "Samara",
            "Rostov-on-Don"
        ]
    };
    const countryKeys = Object.keys(countriesWithCities);
    
    const handelCountry = (e) => {
        setSelectCountry(e.target.value)
        setSelectCity("Select Your City")
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handelCity = (e) => {
        setSelectCity(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
    }

    
    const handelValidation = () => {
        if (selectCountry === "Select Your Country") {
           error.Country = "Select Your Country"
           validate(false)
        }else{
            delete error.Country
            validate(true)
        }
        if (selectCity === "Select Your City") {
            error.City = "Select Your City"
            validate(false)
        }else{
            delete error.City
            validate(true)
        }

        // setError(errorObj)
        console.log(" Select error:", error)
    };
    return (
        <>

            <label htmlFor={name} className='px-5'>{label}<span className='text-red-900 text-xl px-2'>*</span></label>
            <select name={name} id="country" className='my-2 border-2 border-black' onBlur={handelValidation} onChange={handelCountry} required autoComplete='off'>
                {countryKeys.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
            {selectCountry == "Select Your Country" && <p className='text-red-900'>{selectCountry}</p>}
           
            

            <label htmlFor={name} className='px-5'>City<span className='text-red-900 text-xl px-2'>*</span></label>
            <select name="City" className='my-2 border-2 border-black w-full ' onBlur={handelValidation} onChange={handelCity} required autoComplete='off'>
                {countriesWithCities[selectCountry].map((city) => (
                    <option  key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            {selectCity == "Select Your City" && <p className='text-red-900'>{selectCity}</p>}
        </>
    )
}

export default Select
