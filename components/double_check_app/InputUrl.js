import React, { useState, useEffect, useContext } from 'react'
import { CircularProgress } from '@mui/material'
import BlackButton from '../button/BlackButton'
import axios from 'axios'

const InputURL = ({
  heading,
  setTab,
  setUrlResults,
  urlResults,
  loading,
  setLoading,
}) => {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isChecked, setIsChecked] = useState(false)

  const nextSection = () => {
    // setTab(2)

    getUrlResult()
  }

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  // HTTP HEADER CALL
  const optionsHttpHeader = {
    method: 'POST',
    url:
      'https://active-cyber-defence-tools.p.rapidapi.com/api/capabilities/httpheaders/execute',
    headers: {
      'x-rapidapi-key': '14c0af8c32msh0eebc5d5107d4e5p11800ajsn2c9a945e431c',
      'x-rapidapi-host': 'active-cyber-defence-tools.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      prompt: `https://${url}`,
      options: {},
      config: {
        crawl_target: true,
        delay_sec: 0.1,
        disable_cache: false,
        https_target: true,
        threads: 5,
        timeout_sec: 120,
        verify_https: false,
      },
    },
  }

  const optionsWebSpider = {
    method: 'POST',
    url:
      'https://active-cyber-defence-tools.p.rapidapi.com/api/capabilities/webspider/execute',
    headers: {
      'x-rapidapi-key': '14c0af8c32msh0eebc5d5107d4e5p11800ajsn2c9a945e431c',
      'x-rapidapi-host': 'active-cyber-defence-tools.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      prompt: `https://${url}`,
      options: {
        whitelist_www: 'true',
      },
      config: {
        timeout_sec: 120,
        delay_sec: 0.1,
        threads: 5,
        prefer_https: true,
        verify_https: false,
        disable_cache: false,
        crawl_target: true,
      },
    },
  }

  const optionsPortScan = {
    method: 'POST',
    url:
      'https://active-cyber-defence-tools.p.rapidapi.com/api/capabilities/portscan/execute',
    headers: {
      'x-rapidapi-key': '14c0af8c32msh0eebc5d5107d4e5p11800ajsn2c9a945e431c',
      'x-rapidapi-host': 'active-cyber-defence-tools.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      prompt: `https://${url}`,
      options: {
        scan_type: 'stealth',
      },
      config: {
        timeout_sec: 120,
        delay_sec: 0.1,
        threads: 5,
        prefer_https: true,
        verify_https: false,
        disable_cache: false,
        crawl_target: true,
      },
    },
  }
  const optionsSslScan = {
    method: 'POST',
    url:
      'https://active-cyber-defence-tools.p.rapidapi.com/api/capabilities/x509/execute',
    headers: {
      'x-rapidapi-key': '14c0af8c32msh0eebc5d5107d4e5p11800ajsn2c9a945e431c',
      'x-rapidapi-host': 'active-cyber-defence-tools.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    data: {
      prompt: `https://${url}`,
      options: {},
      config: {
        timeout_sec: 120,
        delay_sec: 0.1,
        threads: 5,
        prefer_https: true,
        verify_https: false,
        disable_cache: false,
        crawl_target: true,
      },
    },
  }

  const validateUrl = (inputUrl) => {
    const urlWithoutProtocol = inputUrl.replace(/^https?:\/\//, '')

    if (!urlWithoutProtocol.includes('.com','.io' )) {
      throw new Error("URL must contain '.com'/ .io")
    }

    return urlWithoutProtocol
  }

  const getUrlResult = async () => {
    if (!url.trim()) {
      setError('URL cannot be empty.')
      setIsValid(false)
      return
    }
    if (!isChecked) {
      setError('You must agree to the terms and conditions.')
      setIsValid(false)
      return
    }

    try {
      validateUrl(url)
      setIsValid(true)
      setLoading(true)
      setError('')

      const { data: dataHttp } = await axios.request(optionsHttpHeader)
      const { data: dataWebSpider } = await axios.request(optionsWebSpider)
      const { data: dataPort } = await axios.request(optionsPortScan)
      const { data: dataSsl } = await axios.request(optionsSslScan)

      if (dataWebSpider && dataPort && dataSsl && dataHttp) {
        const httpResponse = dataHttp.results.optional
        const sslResponse = dataSsl.results.certs[0]
        const WebCrawlResponse = dataWebSpider.results
        const portResponse = dataPort.results.hosts[0]

        setUrlResults({
          httpResponse,
          sslResponse,
          portResponse,
          WebCrawlResponse,
        }),
          // console.log('URL RESULTS HERE!!!>>>>', urlResults)

          // setUrl('')

          setTab(2)

        setLoading(false)
      } else {
        alert('Failed to Get Results!')
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      setIsValid(false)
      setError(err.message)
      console.log(err)
    }
  }

  // console.log('URL RESULTS HERE!!!>>>>', urlResults)

  return (
    <div>
      <div className="container px-5 pt-5 pb-10 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-4">
          <h1 className="max-w-lg text-2xl font-semibold leading-none tracking-tight text-white sm:text-4xl mx-auto flex flex-col items-center md:block md:relative mb-2 sm:mb-6">
            {heading}
          </h1>
          <p className="w-6/12 text-base text-indigo-100 md:text-lg">
            Quicky do a quick scan of the surface security of a website.
          </p>
        </div>
        <div className="relative mb-4 flex justify-center text-white">
          {error && <span>{error}</span>}
        </div>
        <div className="lg:w-2/2 md:w-2/3 mx-auto">
          <div className="">
            <div className="p-2 w-full">
              <div className="relative">
                <input
                  onChange={(e) => {
                    handleChange(e)
                  }}
                  id="url"
                  name="url"
                  value={url}
                  className={`w-full ${
                    isValid
                      ? 'bg-gray-100 border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-indigo-200'
                      : 'bg-red-100 border-red-300 focus:border-red-500 focus:bg-red focus:ring-red-200'
                  }  bg-opacity-100 rounded border  focus:border-indigo-500  focus:ring-2  h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                ></input>
              </div>
            </div>

            <div className="flex justify-center w-full">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text text-white">
                    I have permission to scan this site and agree to the Terms
                    of Service*
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox mx-4 checkbox-accent"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap justify-center text-center -m-2 gap-1 md:gap-4">
              {/* <BlackButton text="Back" onClick={() => setTab(1)} /> */}
              {loading ? (
                <>
                  <CircularProgress className="flex flex-col items-center justify-center" />
                  <h4 className="mt-2 text-indigo-100 font-lg">
                    Getting results ...
                  </h4>
                </>
              ) : (
                <BlackButton
                  text={'Start Scan'}
                  onClick={() => nextSection()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputURL
