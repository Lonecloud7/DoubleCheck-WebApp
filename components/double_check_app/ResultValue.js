import React, { useState, useEffect, useContext } from 'react'
import { CircularProgress } from '@mui/material'

import axios from 'axios'
import { useRouter } from 'next/router'
import { getTokenrFromLocalCookie } from '@/lib/auth'
import { useFetchUser } from '@/lib/authContext'
import Cookies from 'js-cookie'

const ResultValue = ({showResult, percentage}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
        <div className="  items-center p-2 flex flex-col">
          {showResult ? (
            <div>
              <h3 className="md:text-3xl">{percentage}%</h3>
              <span className="text-base text-white md:text-lg">
                Result Here
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
  )
}

export default ResultValue