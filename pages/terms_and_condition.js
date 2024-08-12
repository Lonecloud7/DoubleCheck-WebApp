import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import TermsOfService from '@/components/double_check_app/TermsOfService'
import { AnimatePresence, motion } from 'framer-motion'

const terms_and_condition = () => {
  return (
    <MainLayout title="Double Check" showHeader={true} showFooter={true}>
      <AnimatePresence mode="wait">
        <motion.div
          key="1"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <TermsOfService />
        </motion.div>
      </AnimatePresence>
    </MainLayout>
  )
}

export default terms_and_condition
