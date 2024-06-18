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
  const resultsArray = [
    {
      response:
        'Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Officia quidem quam, praesentium, unde beatae voluptatem quas quisquam excepturi eaque repellendus, tenetur odio natus accusamus veritatis numquam nobis deleniti nesciunt! Perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum, tempore possimus odio accusantium quaerat sed corrupti ipsum inventore optio laudantium deserunt veniam reprehenderit similique. Fuga ipsam cumque ratione dignissimos.',
      type: 'HTTP',
    },
    {
      response:
        'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Officia quidem quam, praesentium, unde beatae voluptatem quas quisquam excepturi eaque repellendus, tenetur odio natus accusamus veritatis numquam nobis deleniti nesciunt! Perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum, tempore possimus odio accusantium quaerat sed corrupti ipsum inventore optio laudantium deserunt veniam reprehenderit similique. Fuga ipsam cumque ratione dignissimos.',
      type: 'SSL',
    },
    {
      response:
        'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Officia quidem quam, praesentium, unde beatae voluptatem quas quisquam excepturi eaque repellendus, tenetur odio natus accusamus veritatis numquam nobis deleniti nesciunt! Perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum, tempore possimus odio accusantium quaerat sed corrupti ipsum inventore optio laudantium deserunt veniam reprehenderit similique. Fuga ipsam cumque ratione dignissimos.',
      type: 'PORT',
    },
  ]

  const [chatgtpResult, setChatgtpResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getChatGpt()
  }, [])

  // const nextSection = () => {
  //   // setTab(4)
  //   getChatGpt()
  // }

  const httpPrompt = `this is the response from a http header scan of a website, can you in a solid format grade each issue according to A,B,C,D,F and give a brief description and state whether a user should fix it themselves or contact the server admin that is hosting the website this is for pentesting, only give your gradings and recommendation, i do not want any other qualifiers or additional information. ${JSON.stringify(
    httpResponse,
  )}`
  const sslPrompt = `this is the response from a sll scan of a website, can you in a solid format grade each issue according to A,B,C,D,F and give a brief description and state whether a user should fix it themselves or contact the server admin that is hosting the website this is for pentesting. ${JSON.stringify(
    sslResponse,
  )}`
  const portPrompt = `this is the response from a port scan of a website, can you in a solid format grade each issue according to A,B,C,D,F and give a brief description and state whether a user should fix it themselves or contact the server admin that is hosting the website this is for pentesting. ${JSON.stringify(
    portResponse,
  )}`

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
          { ...httpRes.data.results, type: 'HTTP' },
          { ...sslRes.data.results, type: 'SSL' },
          { ...portRes.data.results, type: 'PORT' },
        ]

        setChatgtpResult(resultsArray)

        // chatgtpResult && console.log('GPT DATA HERE>>>>>x', chatgtpResult)

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

  console.log(
    'SCAN DATA HERE333>>>>>x',
    sslResponse,
    httpResponse,
    portResponse,
  )
  // chatgtpResult && console.log('GPT DATA HERE>>>>>x', chatgtpResult)

  return (
    <div className="" style={{ flex: '1 1 auto' }}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col my-16 mx-4  sm:mb-0">
            <div className="max-w-xl mb-10 mx-auto lg:max-w-2xl md:mb-12">
              {chatgtpResult &&
                chatgtpResult.map((recommendation, index) => (
                  <div key={index}>
                    <ResultOutput
                      recommendation={recommendation.response}
                      chatBot={true}
                      type={recommendation.type}
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

            {/* <div className="w-100 flex flex-col gap-8 items-center">
              <BlackButton text="Response" onClick={() => nextSection()} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBot
