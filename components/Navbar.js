'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import Link from 'next/link'
import RequestInvite from './RequestInvite'
import hambuger from '@/public/icon-hamburger.svg'
const NavLink = ({ text }) => {
  return (
    <li className="hover:text-black hover:border-b-4 hover:border-green-500 mr-4 items-center flex transition-all  ">
      <Link href={'#'}>{text}</Link>
    </li>
  )
}
const NavLinkInHam = ({ text }) => {
  return (
    <li className="text-black hover:border-b-4 hover:border-green-500 transition-all">
      <Link href={'#'}>{text}</Link>
    </li>
  )
}
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <section className="topBar px-[10%] bg-white flex flex-row sticky top-0 h-[100px] justify-between text-slate-400 items-center z-30 ">
        <div className="">
          <Image src={Logo}></Image>
        </div>
        <ul className="flex flex-row h-full max-md:hidden">
          {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((item, index) => (
            <NavLink key={index} text={item} />
          ))}
        </ul>
        <div className="max-md:hidden">
          <RequestInvite />
        </div>
        <div className="md:hidden ">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}>
            <Image src={hambuger}></Image>
          </button>
        </div>
        <div
          className={`absolute w-full px-[10%]  transition-all  left-0 right-0 ${
            menuOpen ? 'top-[100px]' : '-top-[300px] '
          }  `}>
          <div className=" mt-4 rounded-lg w-full h-[27%] bg-white py-3">
            <ul className="flex flex-col items-center gap-4 ">
              {['Home', 'About', 'Contact', 'Blog', 'Careers'].map((item, index) => (
                <NavLinkInHam key={index} text={item} />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className={`bg-gradient-to-b from-blue-500 to-transparent w-full h-screen fixed z-10 top-[-50px] ${!menuOpen&&'hidden'}`}></div>
    </>
  )
}

export default Navbar
