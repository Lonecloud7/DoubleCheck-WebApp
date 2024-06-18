import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

const ResultOutput = ({
  color,
  database_name,
  address,
  username,
  name,
  email,
  ssl = false,
  http = false,
  port = false,
  webCrawl = false,
  chatBot = false,
  urlResults = null,
  chatgtpResult = null,
  recommendation = null,
  type = null,
}) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full mt-3">
        <div className="px-4 py-3">
          {email && (
            <>
              <h3 className="text-gray-800 text-xl font-bold mb-2">
                <React.Fragment>{database_name}</React.Fragment>
              </h3>
              <ul className="text-gray-800">
                <li>
                  <b>Address</b> : {address}
                </li>
                <li>
                  <b>Username</b> : {username}
                </li>
                <li>
                  <b>Name</b> : {name}
                </li>
              </ul>
            </>
          )}
          {ssl && (
            <>
              <h3 className="text-gray-800 text-xl font-bold mb-2">
                <React.Fragment>SSL SCAN RESULTS</React.Fragment>
              </h3>
              <ul className="text-gray-800">
                <li>
                  <b>Issuer Name</b> : {urlResults.sslResponse.issuer_name}
                </li>
                <li>
                  <b>Issuer Organization</b> :{' '}
                  {urlResults.sslResponse.issuer_org}
                </li>
                <li>
                  <b>Validity Day Left</b> : {urlResults.sslResponse.days_left}
                </li>
                <li>
                  <b>Subject Name</b> : {urlResults.sslResponse.subject_name}
                </li>
                <li>
                  <b>Subject Alternative Names</b> :{' '}
                  {urlResults.sslResponse.subject_alt_names}
                </li>
                <li>
                  <b>Algorithm</b> : {urlResults.sslResponse.algorithm}
                </li>
              </ul>
            </>
          )}
          {http && (
            <>
              <h3 className="text-gray-800 text-xl font-bold mb-2">
                <React.Fragment>HTTP HEADER RESULTS</React.Fragment>
              </h3>
              <ul className="text-gray-800">
                <li>
                  <b>Content-Type</b> :{' '}
                  {urlResults.httpResponse['Content-Type']}
                  <Tooltip message="Details wdawdawdwdwdaw" position="right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Tooltip>
                </li>
                <li>
                  <b>Server</b> : {urlResults.httpResponse.server}
                </li>
                <li>
                  <b>Access-Control-Allow-Origin</b> :{' '}
                  {urlResults.httpResponse['access-control-allow-origin']}
                </li>
                <li>
                  <b>Strict-Transport-Security</b> :{' '}
                  {urlResults.httpResponse['strict-transport-security']}
                </li>
                <li>
                  <b>X-Content-Type-Options</b> :{' '}
                  {urlResults.httpResponse['x-content-type-options']}
                </li>
                <li>
                  <b>X-Frame-Options</b> :{' '}
                  {urlResults.httpResponse['x-frame-options']}
                </li>
                <li>
                  <b>X-XSS-Protection</b> :{' '}
                  {urlResults.httpResponse['x-xss-protection']}
                </li>
              </ul>
            </>
          )}
          {webCrawl && (
            <>
              <h3 className="text-gray-800 text-xl font-bold mb-2">
                <React.Fragment>WEB CRAWL RESULTS</React.Fragment>
              </h3>
              <ul className="text-gray-800">
                <li>
                  <b>Pages</b> :{' '}
                  {urlResults.WebCrawlResponse.anchor_links.map(
                    (webCrawl, index) => (
                      <ul key={index}>
                        <a
                          href={webCrawl.url}
                          className="text-gray-800 link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <li>{webCrawl.url}</li>
                        </a>
                      </ul>
                    ),
                  )}
                </li>
                <li>
                  <b>Images</b> :{' '}
                  {urlResults.WebCrawlResponse.image_links
                    .filter((webCrawl) => webCrawl.url.startsWith('https://'))
                    .map((webCrawl, index) => (
                      <div key={index} className="mb-2">
                        <a
                          href={webCrawl.url}
                          className="text-gray-800 link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {webCrawl.url}
                        </a>
                      </div>
                    ))}
                </li>
                <li>
                  <b>Blacklisted Scripts</b> : None
                </li>
              </ul>
            </>
          )}
          {port && (
            <>
              <h3 className="text-gray-800 text-xl font-bold mb-2">
                <React.Fragment>PORT SCAN RESULTS</React.Fragment>
              </h3>

              {urlResults.portResponse.ports.map((port, index) => (
                <ul key={index} className="text-gray-800">
                  <li>
                    <b>Port ID</b> : {port.port_id}
                  </li>
                  <li>
                    <b>State</b> : {port.state}
                  </li>
                  <li>
                    <b>Service</b> : {port.service}
                  </li>
                </ul>
              ))}
            </>
          )}
          {chatBot && (
            <>
              {recommendation && (
                <>
                  <h3 className="text-gray-800 text-xl font-bold mb-2">
                    <React.Fragment>{type} Recommendations</React.Fragment>
                  </h3>
                  <ul className="text-gray-800">
                    <li>{recommendation}</li>
                  </ul>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResultOutput
