import React, { useState, useEffect } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import { CircularProgress } from '@mui/material'
import CommunityPoems from '@/components/poems/CommunityPoems'
import { AnimatePresence, motion } from 'framer-motion'

export default function Results() {
  return (
    <MainLayout title="Community forum" showHeader={true} showFooter={true}>
      <motion.div
        key="1"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
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

                      <h1 className="md:text-3xl text-2xl text-white font-medium title-font text-gray-900">
                        Here are your results!
                      </h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4"></div>
                  </div>
                </div>
              </div>

              <div className="px-2 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 ">
                <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
                  <div className="  items-center p-2 flex flex-col">
                    {true ? (
                      <div>
                        <h3 className="md:text-3xl">53%</h3>
                        <span className="text-base text-white md:text-lg">
                          Lorem ipsum dolor
                        </span>
                      </div>
                    ) : (
                      <>
                        <CircularProgress className="text-white" />
                        <h4 className="mt-2 text-indigo-100 font-lg">
                          Getting results ...
                        </h4>
                      </>
                    )}
                  </div>
                  <div className="  items-center p-2 flex flex-col">
                    {true ? (
                      <div>
                        <h3 className="md:text-3xl">53%</h3>
                        <span className="text-base text-white md:text-lg">
                          Lorem ipsum dolor
                        </span>
                      </div>
                    ) : (
                      <>
                        <CircularProgress className="text-white" />
                        <h4 className="mt-2 text-indigo-100 font-lg">
                          Getting results ...
                        </h4>
                      </>
                    )}
                  </div>
                  <div className="  items-center p-2 flex flex-col">
                    {true ? (
                      <div>
                        <h3 className="md:text-3xl">53%</h3>
                        <span className="text-base text-white md:text-lg">
                          Lorem ipsum dolor
                        </span>
                      </div>
                    ) : (
                      <>
                        <CircularProgress className="text-white" />
                        <h4 className="mt-2 text-indigo-100 font-lg">
                          Getting results ...
                        </h4>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <>
                {/* <div className="h-full w-full flex flex-col justify-center items-center"> */}
                <div className="h-full w-full">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full mt-3">
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
                      <div className="flex items-center">
                        <div className="rounded-full bg-indigo-600 w-8 h-8 flex items-center justify-center">
                          <p className="text-white font-bold">B</p>
                        </div>
                        <p className="ml-2 font-bold text-gray-800">Test1</p>
                      </div>
                      <p className="text-gray-600 text-sm">Stuff here</p>
                    </div>
                    <div className="px-4 py-3">
                      <h3 className="text-xl font-bold mb-2">
                        <React.Fragment>STUFF HERE</React.Fragment>
                      </h3>
                      <p className="text-gray-800 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus itaque maiores cupiditate aut illum voluptatum
                        commodi ipsam. Voluptate, excepturi dolore. Eveniet,
                        perferendis quos earum deleniti iure inventore dolor
                        exercitationem? Quasi!
                      </p>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  )
}
