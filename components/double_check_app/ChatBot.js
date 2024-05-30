import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'

import SecondaryButton from '../button/SecondaryButton'
import BlackButton from '../button/BlackButton'

const ChatBot = ({ heading, setTab }) => {
  return (
    <MainLayout title="How to play" showHeader={true} showFooter={true}>
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
                    <span className="relative">Unleash</span>
                  </span>{' '}
                  your inner poet and roll the dice!
                </h2>
                <p className="text-base text-indigo-100 md:text-lg">
                  Are you up for the challenge?
                  <br />
                  Get ready to ignite your creativity and challenge yourself to
                  a game of poetic prowess! Choose your words, category, and
                  roll the dice to generate your unique set of randomized words.
                  With only 20 minutes on the clock, can you craft a poem that
                  will leave your opponents in awe? Join the fun and show off
                  your poetic skills today!
                </p>
              </div>

              <div className="w-100 flex flex-col gap-8 items-center">
                <BlackButton
                  text="Public Square - open at 00:00am"
                  onClick={() => router.push('/')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ChatBot
