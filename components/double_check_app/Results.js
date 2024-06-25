import React, { useState, useEffect } from 'react'
import ResultOutput from './ResultOutput'
import ResultValue from './ResultValue'
import ChatBot from './ChatBot'

import { AnimatePresence, motion } from 'framer-motion'
import BlackButton from '../button/BlackButton'
import { CircularProgress } from '@mui/material'

const Results = ({ phoneResult, emailResult, urlResults, setInputTab }) => {
  const [showResult, setShowResult] = useState(false)
  const [finalResults, setFinalShowResults] = useState({})
  const [tab, setTab] = useState(1)
  const [loading, setLoading] = useState(false)

  setTimeout(() => {
    setShowResult(true)
  }, 5000)

  useEffect(() => {
    console.log(
      'ALL RESULTS HERE PLEASE!!!>>>>>>00',
      phoneResult,
      emailResult,
      urlResults,
    )

    // setFinalShowResults(phoneResult, emailResult, urlResults)
  }, [])

  return (
    <div>
      <div className="" style={{ flex: '1 1 auto' }}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 text-center sm:mb-0">
              <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 text-white hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
                    <h2 className="text-xs text-white tracking-widest font-medium font-sans mb-1">
                      <span className="relative">DOUBLE CHECK</span>
                    </h2>
                  </span>

                  <h1 className="md:text-5xl text-4xl text-white font-medium title-font text-gray-900">
                    Here are your results!
                  </h1>
                </div>
                <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4"></div>
              </div>
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              {tab === 1 && (
                <motion.div
                  key="1"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                >
                  <div>
                    

                    {loading ? (
                      <>
                        <CircularProgress className="flex flex-col items-center justify-center" />
                        <h4 className="mt-2 text-indigo-100 font-lg">
                          Getting results ...
                        </h4>
                      </>
                    ) : (
                      <></>
                    )}
                    {phoneResult && (
                      <ul>
                        {phoneResult.map((result, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-8"
                          >
                            <div className="avatar">
                              <div className="w-33 h-33 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={result.URL} alt="Image" />
                              </div>
                            </div>
                            <h2 className="text-3xl text-white">
                              Does this Image show any sensitive or private
                              information?
                            </h2>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="px-2 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
                      <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
                        <BlackButton
                          text="Back"
                          onClick={() => setInputTab(1)}
                        />
                        <BlackButton text="Next" onClick={() => setTab(2)} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {tab === 2 && (
                <motion.div
                  key="2"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                >
                  <div>
                   
                    <h2 className="text-white md:text-3xl text-2xl ">
                      {emailResult && emailResult.message}
                    </h2>
                    {emailResult &&
                      emailResult.results.map((result, index) => (
                        <div className="h-full w-full" key={index}>
                          <ResultOutput
                            color={'bg-green-500'}
                            database_name={result.database_name}
                            address={result.address}
                            username={result.username}
                            name={result.name}
                            email={true}
                          />
                        </div>
                      ))}

                    <div className="px-2 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
                      <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
                        <BlackButton text="Back" onClick={() => setTab(1)} />
                        <BlackButton text="Next" onClick={() => setTab(3)} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {tab === 3 && (
                <motion.div
                  key="3"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                >
                  <div>
                    {/* <h1 className="md:text-3xl text-2xl text-white font-medium title-font text-gray-900"> */}
                

                    {urlResults && (
                      <div className="h-full w-full">
                        <ResultOutput
                          color={'bg-green-500'}
                          urlResults={urlResults}
                          http={true}
                        />
                        <ResultOutput
                          color={'bg-green-500'}
                          urlResults={urlResults}
                          ssl={true}
                        />
                        <ResultOutput
                          color={'bg-green-500'}
                          urlResults={urlResults}
                          port={true}
                        />
                        <ResultOutput
                          color={'bg-green-500'}
                          urlResults={urlResults}
                          webCrawl={true}
                        />
                      </div>
                    )}

                    <div className="px-2 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
                      <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
                        <BlackButton text="Back" onClick={() => setTab(2)} />
                        <BlackButton text="Next" onClick={() => setTab(4)} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {tab === 4 && (
                <motion.div
                  key="4"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                >
                  <div>
                    

                    <div className="h-full w-full"></div>
                    <ChatBot
                      httpResponse={urlResults.httpResponse}
                      sslResponse={urlResults.sslResponse}
                      WebCrawlResponse={urlResults.WebCrawlResponse}
                      portResponse={urlResults.portResponse}
                    />

                    <div className="px-2 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
                      <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
                        <BlackButton text="Back" onClick={() => setTab(3)} />
                        {/* <BlackButton text="Next" onClick={() => setTab(3)} /> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* <div className="px-2 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
            <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
              <ResultValue showResult={showResult} percentage={'83'} />
              <ResultValue showResult={showResult} percentage={'20'} />
              <ResultValue showResult={showResult} percentage={'53'} />
            </div>
          </div> */}
          <>
            {/* <div className="h-full w-full flex flex-col justify-center items-center"> */}
            {/* <div className="h-full w-full">
              <ResultOutput color={'bg-green-500'} />
              <ResultOutput color={'bg-error'} />
            </div> */}
          </>
        </div>
      </div>
    </div>
  )
}

export default Results
