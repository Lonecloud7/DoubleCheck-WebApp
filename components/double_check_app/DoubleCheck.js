import React, { useState, useEffect, useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// import axios from 'axios'
import { useRouter } from 'next/router'
// import { getTokenrFromLocalCookie } from '@/lib/auth'
// import { useFetchUser } from '@/lib/authContext'
// import Cookies from 'js-cookie'

import InputUrl from './InputUrl'
import InputEmail from './InputEmail'
import InputPhone from './InputPhone'
import Results from './Results'

const DoubleCheck = () => {
  // const router = useRouter()
  const [tab, setTab] = useState(3)
  const [urlResults, setUrlResults] = useState([])

  return (
    <div className="py-10">
      <AnimatePresence mode="wait">
        {/* DEPENDING ON THE VALUE IN THE tab STATE THIS ANIMATION DEPENDENCY DISPLAYS A COMPONENT  */}
        {tab === 1 && (
          <motion.div
            key="1"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <InputUrl
              heading={'Enter URL here'}
              setTab={setTab}
              setUrlResults={setUrlResults}
              urlResults={urlResults}
            />
            <ul>
              {urlResults.map((result, index) => (
                <li key={index}>
                  <pre>{JSON.stringify(result, null, 2)}</pre>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        {tab === 2 && (
          <motion.div
            key="2"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <InputEmail heading={'Enter Email here'} setTab={setTab} />
          </motion.div>
        )}
        {tab === 3 && (
          <motion.div
            key="3"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <InputPhone heading={'Enter Phone Number here'} setTab={setTab} />
          </motion.div>
        )}
        {tab === 4 && (
          <motion.div
            key="4"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <Results />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DoubleCheck
