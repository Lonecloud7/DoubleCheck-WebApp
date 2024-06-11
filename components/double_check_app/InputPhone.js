import React, { useState, useEffect, useContext } from 'react'
import BlackButton from '../button/BlackButton'
import { CircularProgress } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

const InputPhone = ({
  heading,
  setTab,
  phoneResult,
  setPhoneResult,
  setLoading,
  loading,
}) => {
  const [phone, setPhone] = useState('')

  const nextSection = () => {
    // setTab(4)
    getPhoneResult()
  }

  const handleChange = (e) => {
    setPhone(e.target.value)
  }

  const options = {
    method: 'GET',
    url: 'https://whatsapp-osint.p.rapidapi.com/wspic/dck',
    params: {
      phone: `${phone}`,
    },
    headers: {
      'x-rapidapi-key': '14c0af8c32msh0eebc5d5107d4e5p11800ajsn2c9a945e431c',
      'x-rapidapi-host': 'whatsapp-osint.p.rapidapi.com',
    },
  }

  const getPhoneResult = async () => {
    try {
      setLoading(true)
      const { data } = await axios.request(options)
      if (data) {
        console.log('PHONE DATA HERE>>>>>x', data)

        setPhoneResult([data])
        setTab(4)
        // setPhone('')
        setLoading(false)
      } else {
        setLoading(false)
        alert('Failed to Get Results!')
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }
  return (
    <div>
      <div className="container px-5 pt-5 pb-10 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-4">
          <h1 className="max-w-lg text-2xl font-semibold leading-none tracking-tight text-white sm:text-4xl mx-auto flex flex-col items-center md:block md:relative mb-2 sm:mb-6">
            {heading}
          </h1>
          <p className="w-6/12 text-base text-indigo-100 md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ab distinctio reiciendis aperiam?
          </p>
        </div>
        <div className="lg:w-2/2 md:w-2/3 mx-auto">
          <div className="">
            <div className="p-2 w-full">
              <div className="relative">
                {/* <label for="message" className="flex mx-auto text-white">
                  Poem Here
                </label> */}
                <input
                  onChange={(e) => {
                    handleChange(e)
                  }}
                  id="phone"
                  name="phone"
                  value={phone}
                  className={`w-full ${
                    false
                      ? 'bg-red-100 border-red-300 focus:border-red-500 focus:bg-red focus:ring-red-200'
                      : 'bg-gray-100 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-200'
                  }  bg-opacity-100 rounded border  focus:border-indigo-500  focus:ring-2  h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                ></input>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-white">
                    I have permission to scan this site and agree to the Terms
                    of Service*
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox mx-4 checkbox-accent"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
              <BlackButton text="Back" onClick={() => setTab(2)} />
              {loading ? (
                <>
                  <CircularProgress className="text-white" />
                  <h4 className="mt-2 text-indigo-100 font-lg">
                    Getting results ...
                  </h4>
                </>
              ) : (
                <BlackButton
                  text={'Get Results'}
                  onClick={() => nextSection()}
                />
              )}
            </div>

            {phoneResult && (
              <ul>
                {phoneResult.map((result, index) => (
                  <li key={index}>
                    {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
                    <img src={result.URL} alt="" />
                  </li>
                ))}
              </ul>
            )}
            {/* <Image
                    src={"https://pps.whatsapp.net/v/t61.24694-24/438417446_355380894211976_3200717348354125310_n.jpg?ccb=11-4&oh=01_Q5AaIGvu6ZjbvKxk13OlOD0-he3nTSuxJlLmwPYVeEBggddd&oe=6670F2B5&_nc_sid=e6ed6c&_nc_cat=108"}
                    alt='picture'
                    width={"500"}
                    height={"500"}
                     /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputPhone
