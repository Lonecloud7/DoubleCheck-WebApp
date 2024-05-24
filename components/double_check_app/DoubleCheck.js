import React, { useState, useEffect, useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DiceRoll from '../game/DiceRoll'
import CreatePoem from '../game/CreatePoem'
import GeneratedWords from '../personalized_square/GeneratedWords'
import SelectSection from '../personalized_square/SelectSection'
import axios from 'axios'
import { useRouter } from 'next/router'
import { getTokenrFromLocalCookie } from '@/lib/auth'
import { useFetchUser } from '@/lib/authContext'
import Cookies from 'js-cookie'

import InputSection1 from './InputSection'
import InputSection2 from './InputSection2'
import InputSection3 from './InputSection3'
import InputSection4 from './InputSection3'

const DoubleCheck = () => {
  const router = useRouter()
  const [tab, setTab] = useState(1)
  //   const [numberOfWords, setNumberOfWords] = useState(1)
  //   const [numberOfLetters, setNumberOfLetters] = useState(3)
  //   const [category, setCategory] = useState('color')

  //   const [generatedWords, setGeneratedWords] = useState([])
  //   const [wordsReady, setWordsReady] = useState(false)
  //   const [poem, setPoem] = useState('')
  //   const [allWordsUsed, setAllWordsUsed] = useState(false)
  //   const [editForm, setEditForm] = useState(false)
  //   const [clicked, setClicked] = useState(false)

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
            <InputSection1 heading={'Enter URL here'} setTab={setTab} />
          </motion.div>
        )}
        {tab === 2 && (
          <motion.div
            key="2"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
           <InputSection2 heading={'Enter Email here'} setTab={setTab} />
          </motion.div>
        )}
        {tab === 3 && (
          <motion.div
            key="3"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <InputSection3 heading={'Enter Phone Number here'} setTab={setTab} />
          </motion.div>
        )}
        {tab === 4 && (
          <motion.div
            key="3"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <InputSection4 heading={'ChatGPT Recommendations'} setTab={setTab} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DoubleCheck
