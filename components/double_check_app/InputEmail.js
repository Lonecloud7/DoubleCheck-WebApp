import React, { useState, useEffect, useContext } from 'react'
import BlackButton from '../button/BlackButton'
import { CircularProgress } from '@mui/material'
import axios from 'axios'

const InputEmail = ({
  heading,
  setTab,
  emailResult,
  setEmailResult,
  loading,
  setLoading,
}) => {
  const [email, setEmail] = useState('')

  const nextSection = () => {
    // setTab(3)
    getEmailResult()
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const options = {
    method: 'GET',
    url: 'https://email-data-leak-checker.p.rapidapi.com/emaild',
    params: {
      email: `${email}`,
    },
    headers: {
      'x-rapidapi-key': '14c0af8c32msh0eebc5d5107d4e5p11800ajsn2c9a945e431c',
      'x-rapidapi-host': 'email-data-leak-checker.p.rapidapi.com',
      'Content-Type': 'application/json',
      'User-Agent': 'application-name',
    },
  }

  // try {
  // 	const response = await axios.request(options);
  // 	console.log(response.data);
  // } catch (error) {
  // 	console.error(error);
  // }

  const getEmailResult = async () => {
    try {
      setLoading(true)
      const { data } = await axios.request(options)
      if (data) {
        console.log('EMAIL DATA HERE', data)
        // setEmail('')
        const message = data.message
        const results = data.results
        setEmailResult({ message, results })
        setLoading(false)
        setTab(3)
      } else {
        alert('Failed to Get Results!')
        setLoading(false)
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
                  id="email"
                  name="email"
                  value={email}
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
              <BlackButton text="Back" onClick={() => setTab(1)} />
              {loading ? (
                <>
                  <CircularProgress className="text-white" />
                  <h4 className="mt-2 text-indigo-100 font-lg">
                    Getting results ...
                  </h4>
                </>
              ) : (
                <BlackButton
                  text={'Start Search'}
                  onClick={() => nextSection()}
                />
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputEmail
