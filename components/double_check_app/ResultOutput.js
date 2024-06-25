import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import Tooltip from './Tooltip'

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
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>Issuer Organization</b> :{' '}
                  {urlResults.sslResponse.issuer_org}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>Validity Day Left</b> : {urlResults.sslResponse.days_left}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>Subject Name</b> : {urlResults.sslResponse.subject_name}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>Subject Alternative Names</b> :{' '}
                  {urlResults.sslResponse.subject_alt_names}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>Algorithm</b> : {urlResults.sslResponse.algorithm}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
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
                  <Tooltip description="Specifies the media type of the resource (e.g., text/html, application/json). This header informs the client about the type of content it is going to receive, so it can handle it appropriately." />
                </li>
                <li>
                  <b>Server</b> : {urlResults.httpResponse.server}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>Access-Control-Allow-Origin</b> :{' '}
                  {urlResults.httpResponse['access-control-allow-origin']}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>Strict-Transport-Security</b> :{' '}
                  {urlResults.httpResponse['strict-transport-security']}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>X-Content-Type-Options</b> :{' '}
                  {urlResults.httpResponse['x-content-type-options']}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>X-Frame-Options</b> :{' '}
                  {urlResults.httpResponse['x-frame-options']}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
                <li>
                  <b>X-XSS-Protection</b> :{' '}
                  {urlResults.httpResponse['x-xss-protection']}
                  <Tooltip description="This is the Content-Type of the HTTP response." />
                </li>
              </ul>
            </>
          )}
          {webCrawl && (
            <>
              <h3 className="text-gray-800 text-xl font-bold mb-2">
                <React.Fragment>WEB CRAWL RESULTS</React.Fragment>
              </h3>
              <h4 className="text-gray-800 ">
                Do any of these pages of images contain private information?
              </h4>
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
                    <Tooltip description="This is the Content-Type of the HTTP response." />
                  </li>
                  <li>
                    <b>State</b> : {port.state}
                    <Tooltip description="This is the Content-Type of the HTTP response." />
                  </li>
                  <li>
                    <b>Service</b> : {port.service}
                    <Tooltip description="This is the Content-Type of the HTTP response." />
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
                  {recommendation.map((point, index) => (
                    <div key={index}>
                      <ul className="text-gray-800">
                        <li>{point}</li>
                      </ul>
                    </div>
                  ))}
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
