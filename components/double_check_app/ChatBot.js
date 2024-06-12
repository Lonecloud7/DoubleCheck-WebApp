import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'

import SecondaryButton from '../button/SecondaryButton'
import BlackButton from '../button/BlackButton'
import ResultOutput from './ResultOutput'

import { CircularProgress } from '@mui/material'

import axios from 'axios'

const ChatBot = ({
  heading,
  setTab,
  sslResponse,
  httpResponse,
  WebCrawlResponse,
  portResponse,
}) => {
  const [chatgtpResult, setChatgtpResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const nextSection = () => {
    // setTab(4)
    getChatGpt()
  }

  const httpPrompt = `using the HTTP response headers provided, can you in a solid format grade each issue according to A,B,C,D,F and give a brief description and state whether a user who has little knownlege in websites and security should fix it themselves or contact the server admin that is hosting the website ${httpResponse}`
  const sslPrompt = `using the sll response headers provided, can you in a solid format grade each issue according to A,B,C,D,F and give a brief description and state whether a user who has little knownlege in websites and security should fix it themselves or contact the server admin that is hosting the website ${sslResponse}`
  const portPrompt = `using the port response headers provided, can you in a solid format grade each issue according to A,B,C,D,F and give a brief description and state whether a user who has little knownlege in websites and security should fix it themselves or contact the server admin that is hosting the website ${portResponse}`

  const generateOptions = (prompt) => ({
    method: 'POST',
    url:
      'https://active-cyber-defence-tools.p.rapidapi.com/api/capabilities/chatgpt/execute',
    headers: {
      'x-rapidapi-key': '14c0af8c32msh0eebc5d5107d4e5p11800ajsn2c9a945e431c',
      'x-rapidapi-host': 'active-cyber-defence-tools.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      config: {
        crawl_target: true,
        delay_sec: 0.1,
        disable_cache: false,
        https_target: true,
        threads: 5,
        timeout_sec: 120,
        verify_https: false,
      },
      options: {
        model_selection: 'gpt-4',
      },
      prompt,
    },
  })

  const getChatGpt = async () => {
    try {
      setLoading(true)
      const [httpRes, sslRes, portRes] = await Promise.all([
        axios.request(generateOptions(httpPrompt)),
        axios.request(generateOptions(sslPrompt)),
        axios.request(generateOptions(portPrompt)),
      ])

      console.log('HTTP Response:', httpRes.data)
      console.log('SSL Response:', sslRes.data)
      console.log('Port Response:', portRes.data)

      if (httpRes && sslRes && portRes) {
        const resultsArray = [
          httpRes.data.results,
          sslRes.data.results,
          portRes.data.results,
        ]
        setChatgtpResult(resultsArray)

        chatgtpResult && console.log('GPT DATA HERE>>>>>x', chatgtpResult)

        setLoading(false)
      } else {
        setLoading(false)
        alert('Failed to Get Results!')
      }
    } catch (err) {
      console.error(err)
      alert('An error occurred while fetching the data.')
      setLoading(false)
    }
  }

  console.log('GPT DATA HERE333>>>>>x', chatgtpResult)

  return (
    <div className="" style={{ flex: '1 1 auto' }}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col my-16 mx-4 text-center sm:mb-0">
            <div className="max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 text-3xl font-normal leading-none tracking-tight text-white sm:text-4xl mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Hey!</span>
                </span>{' '}
                Here are some recommendations to help improve the security on
                your website!
              </h2>

              {chatgtpResult && chatgtpResult.map((recommendation, index) => (
                <div key={index}>
                  <ResultOutput
                    recommendation={recommendation.response}
                    chatBot={true}
                  />
                </div>
              ))}

              {/* <p className="text-base text-indigo-100 md:text-lg">
                  {chatgtpResult && chatgtpResult.response}
                </p> */}
            </div>

            {loading ? (
              <>
                <CircularProgress className="text-white" />
                <h4 className="mt-2 text-indigo-100 font-lg">
                  Getting recommendations ...
                </h4>
              </>
            ) : (
              <></>
            )}

            <div className="w-100 flex flex-col gap-8 items-center">
              <BlackButton text="Response" onClick={() => nextSection()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBot
