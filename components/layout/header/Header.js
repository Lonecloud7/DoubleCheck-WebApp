import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button/Button'

function Header() {
  return (
    <nav
      className="bg-white text-gray-600 body-font hidden md:block"
      style={{ flex: '0 1 auto' }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="ml-3 text-xl">Double Check</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/doublecheck-page" className="mr-5 hover:text-gray-900">
            Double Check
          </Link>
          <Link
            href="/terms_and_condition"
            className="mr-5 hover:text-gray-900"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </nav>
  )
}

export default Header
