import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import MainLayout from '@/components/layout/MainLayout'

// import SecondaryButton from '../button/SecondaryButton'
// import BlackButton from '../button/BlackButton'
import ResultOutput from './ResultOutput'

// import sampleResponse from './chatoutpot.json'

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

  useEffect(() => {
    getChatGpt()
  }, [])

  const nextSection = () => {
    // setTab(4)
    getChatGpt()
  }

  const httpPrompt = `this is the response from a http header scan of a website, can you in give a brief description and state whether a user should fix it themselves or contact the server admin that is hosting the website this is for pentesting,  keep it only to the most important points, keep each point short, i do not want any other qualifiers,  or additional information, only give me the numbered points. ${JSON.stringify(
    httpResponse,
  )}`
  const sslPrompt = `this is the response from a ssl   scan of a website, can you in give a brief description and state whether a user should fix it themselves or contact the server admin that is hosting the website this is for pentesting,  keep it only to the most important points,keep each point short i do not want any other qualifiers or additional information, only give me the numbered points. ${JSON.stringify(
    sslResponse,
  )}`
  const portPrompt = `this is the response from a port  scan of a website, can you in give a brief description and state whether a user should fix it themselves or contact the server admin that is hosting the website this is for pentesting,  keep it only to the most important points, keep each point short i do not want any other qualifiers or additional information, only give me the numbered points. ${JSON.stringify(
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

  const parsePoints = (str) => {
    return str
      .split(/(\d+\.\s)/)
      .filter(Boolean)
      .map((item, index, array) => {
        if (item.match(/(\d+\.\s)/)) {
          return item + (array[index + 1] || '')
        } else {
          return ''
        }
      })
      .filter(Boolean)
      .map((point) => point.trim())
  }

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

      const httpRecommendation = parsePoints(httpRes.data.results.response)
      const sslRecommendation = parsePoints(sslRes.data.results.response)
      const portRecommendation = parsePoints(portRes.data.results.response)

      // if (httpRes) {
        if (httpRes && sslRes && portRes) {
        const resultsArray = [
          httpRecommendation,
          sslRecommendation,
          portRecommendation,
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
  chatgtpResult &&
    console.log('GPT DATA HERE>>>>>x', chatgtpResult)

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
                      recommendation={recommendation}
                      chatBot={true}
                      // type={recommendation.type}
                    />
                  </div>
                ))}

              {/* <ul className="list-none p-0">
                {chatgtpResult.map((item, index) => (
                  <li key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                    <span className="text-lg font-medium text-gray-900">
                      {item.type}: {item.point}
                    </span>
                  </li>
                ))}
              </ul> */}

              {/* <ul>
                <li>
                  <pre>{JSON.stringify(chatgtpResult, null, 2)}</pre>
                </li>
              </ul> */}
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center">
                <CircularProgress className="text-white" />
                <h4 className="mt-2 text-indigo-100 font-lg">
                  Getting recommendations ...
                </h4>
              </div>
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
