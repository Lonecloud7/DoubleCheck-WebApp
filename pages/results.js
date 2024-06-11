import React, { useState, useEffect } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import Link from 'next/link'
import { CircularProgress } from '@mui/material'
import CommunityPoems from '@/components/poems/CommunityPoems'
import { AnimatePresence, motion } from 'framer-motion'
import ResultValue from '@/components/double_check_app/ResultValue'
import ResultOutput from '@/components/double_check_app/ResultOutput'
import ResultsComponent from '@/components/double_check_app/Results'



export default function Results() {
  const [showResult, setShowResult] = useState(false)

  setTimeout(() => {
    setShowResult(true)
  }, 5000)


  return (
    <MainLayout title="Community forum" showHeader={true} showFooter={true}>
      <motion.div
        key="1"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <div>
          <ResultsComponent />
        </div>
      </motion.div>
    </MainLayout>
  )
}
