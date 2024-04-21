import React from 'react'
import Image from 'next/image'
import iconfacebook from '@/public/icon-facebook.svg'
import iconyoutube from '@/public/icon-youtube.svg'
import icontwitter from '@/public/icon-twitter.svg'
import iconpinterest from '@/public/icon-pinterest.svg'
import iconinstagram from '@/public/icon-instagram.svg'
import RequestInvite from './RequestInvite'
const Footer = () => {
  return (
    <section className="bg-[#2d314d] text-white md:text-start text-center ">
      <div className="px-[10%] md:h-60 h-full flex md:flex-row flex-col gap-8 justify-between items-center">
        <div className="flex md:flex-row flex-col gap-8 ">
          <div className="md:mr-8 flex flex-col items-center justify-between gap-8">
            <h1 className=" font-bold text-2xl">easybank</h1>
            <span className="flex flex-row  gap-4 ">
              <Image src={iconfacebook}></Image>
              <Image src={iconyoutube}></Image>
              <Image src={icontwitter}></Image>
              <Image src={iconpinterest}></Image>
              <Image src={iconinstagram}></Image>
            </span>
          </div>
          <div className="md:mr-12 ">
            <ul className="space-y-2">
              <li>About us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="">
            <ul className="space-y-2">
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center ">
          <RequestInvite />
          <p className="text-slate-600 mt-3">@Easybank. All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
