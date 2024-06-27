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
                <li className=" flex items-center">
                  <b>Issuer Name</b> : {urlResults.sslResponse.issuer_name}
                  <Tooltip description=" The name of the entity that issued the SSL certificate. This typically includes details about the certificate authority (CA) responsible for issuing the certificate." />
                </li>
                <li className=" flex items-center">
                  <b>Issuer Organization</b> :{' '}
                  {urlResults.sslResponse.issuer_org}
                  <Tooltip description="The organization responsible for issuing the SSL certificate, often a trusted third-party Certificate Authority (CA)." />
                </li>
                <li className=" flex items-center">
                  <b>Validity Day Left</b> : {urlResults.sslResponse.days_left}
                  <Tooltip description="The number of days remaining before the SSL certificate expires. This is important to ensure continuous secure communications." />
                </li>
                <li className=" flex items-center">
                  <b>Subject Name</b> : {urlResults.sslResponse.subject_name}
                  <Tooltip description="The name of the entity the SSL certificate is issued to, often the domain name of the website." />
                </li>
                <li className=" flex items-center">
                  <b>Subject Alternative Names</b> :{' '}
                  {urlResults.sslResponse.subject_alt_names}
                  <Tooltip description=" Additional hostnames (domains, IP addresses) included in the SSL certificate. This allows a single certificate to secure multiple hostnames." />
                </li>
                <li className=" flex items-center">
                  <b>Algorithm</b> : {urlResults.sslResponse.algorithm}
                  <Tooltip description="The cryptographic algorithm used by the SSL certificate for creating the digital signature. Common algorithms include RSA, DSA, and ECDSA." />
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
                <li className=" flex items-center">
                  <b>Content-Type</b> :{' '}
                  {urlResults.httpResponse['Content-Type']}
                  <Tooltip description="Specifies the media type of the resource . This header informs the client about the type of content it is going to receive." />
                </li>
                <li className=" flex items-center">
                  <b>Server</b> : {urlResults.httpResponse.server}
                  <Tooltip description="Reveals information about the software used by the origin server to handle the request." />
                </li>
                <li className=" flex items-center">
                  <b>Access-Control-Allow-Origin</b> :{' '}
                  {urlResults.httpResponse['access-control-allow-origin']}
                  <Tooltip description="Controls which origins are allowed to access resources on the server." />
                </li>
                <li className=" flex items-center">
                  <b>Strict-Transport-Security</b> :{' '}
                  {urlResults.httpResponse['strict-transport-security']}
                  <Tooltip description="Enforces secure (HTTPS) connections to the server. " />
                </li>
                <li className=" flex items-center">
                  <b>X-Content-Type-Options</b> :{' '}
                  {urlResults.httpResponse['x-content-type-options']}
                  <Tooltip description="Prevents the browser from MIME-sniffing a response away from the declared Content-Type. This helps reduce the risk of security vulnerabilities like XSS." />
                </li>
                <li className=" flex items-center">
                  <b>X-Frame-Options</b> :{' '}
                  {urlResults.httpResponse['x-frame-options']}
                  <Tooltip description="Protects against clickjacking by controlling whether a browser should be allowed to render a page in a <frame>, <iframe>, <embed>, or <object>. It can be set to DENY, SAMEORIGIN, or ALLOW-FROM." />
                </li>
                <li className=" flex items-center">
                  <b>X-XSS-Protection</b> :{' '}
                  {urlResults.httpResponse['x-xss-protection']}
                  <Tooltip description="Configures the cross-site scripting (XSS) filter built into most browsers. It can be set to 1 to enable the filter, 1; mode=block to enable and block rendering if an attack is detected, or 0 to disable the filter." />
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
                  <li className=" flex items-center">
                    <b>Port ID</b> : {port.port_id}
                    <Tooltip description=" The number identifying a specific port used for network communication." />
                  </li>
                  <li className=" flex items-center">
                    <b>State</b> : {port.state}
                    <Tooltip description=" Indicates whether a port is open, closed, or filtered." />
                  </li>
                  <li className=" flex items-center">
                    <b>Service</b> : {port.service}
                    <Tooltip description="The name of the service running on a specific port (e.g., HTTP, FTP, SSH)." />
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
                    <React.Fragment>{type} RECOMMEDATIONS</React.Fragment>
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
