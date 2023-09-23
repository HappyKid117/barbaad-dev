import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl">
        <div className="prose psore-xl mx-auto flex justify-between flex-row">
            <h1 className='text-2xl font-bold text-white grid mb-1 lg:text-4xl'>
            <Link href="/" className='text-white/90 no-underline hover:text-white'>
                Home
            </Link>
            </h1>
            <div className='flex justify-end sm:justify-evenly align-right gap-4 mb-1 text-white text-3xl lg:text-4xl'>
              <Link className='text-white/90 hover:text-white' href="https://github.com/aarabdh">
                <FaGithub />
              </Link>
              <Link className='text-white/90 hover:text-white' href="https://www.linkedin.com/in/aarabdh-tiwari/">
                <FaLinkedin />
              </Link>
              <Link className='text-white/90 hover:text-white' href="https://www.instagram.com/aarabdht/">
                <FaInstagram />
              </Link>
            </div>
        </div>
    </nav>
  )
}
