import React from 'react'
import Image from 'next/image'
import bgIntroDesktop from '@/public/bg-intro-desktop.svg'
import bgIntroMobile from '@/public/bg-intro-mobile.svg'
import mockUps from '@/public/image-mockups.png'
import iconOnline from '@/public/icon-online.svg'
import iconBudgeting from '@/public/icon-budgeting.svg'
import iconOnboarding from '@/public/icon-onboarding.svg'

import imageCurrency from '@/public/image-currency.jpg'
import imageRestaurant from '@/public/image-restaurant.jpg'
import imagePlane from '@/public/image-plane.jpg'
import imageConfetti from '@/public/image-confetti.jpg'
import RequestInvite from './RequestInvite'

const Reason = ({ src, title, children }) => {
  return (
    <div className="flex flex-col items-center sm:items-start w-full sm:max-w-[22%] mr-6 mt-10">
      <Image src={src} className="size-50 "></Image>
      <h1 className="text-slate-800 font-semibold text-2xl py-3 sm:text-start text-center">
        {title}
      </h1>
      <p className="text-slate-400 font-normal sm:text-start text-center"> {children}</p>
    </div>
  )
}

const Articles = ({ src, author, title, children }) => {
  return (
    <div className="max-w-[22%] min-w-[10rem] ">
      <Image src={src} className="mt-0 rounded-t-md w-full h-[200px] object-cover"></Image>

      <div className="px-1 py-2">
        <small className="text-slate-400">By {author}</small>
        <h1 className="text-2xl font-normal  mt-2">{title}</h1>
        <p className="text-slate-400 mt-2">{children}</p>
      </div>
    </div>
  )
}

const ARTICLES_DATA = [
  {
    src: imageCurrency,
    title: 'Receive money in any currency with no fees',
    author: 'Claire Robinson',
    paragraph: `The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …`,
  },
  {
    src: imageRestaurant,
    title: 'Treat yourself without worrying about money',
    author: 'Wilson Hutton',
    paragraph: `Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …`,
  },
  {
    src: imagePlane,
    title: 'Take your Easybank card wherever you go',
    author: 'Wilson Hutton',
    paragraph: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …`,
  },
  {
    src: imageConfetti,
    title: 'Our invite-only Beta accounts are now live!',
    author: 'Claire Robinson',
    paragraph: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...`,
  },
]

const Banner = () => {
  return (
    <section className=" bg-slate-100 ">
      <div className="first flex lg:flex-row flex-col-reverse">
        <div className="md:py-[150px] py-10 md:pl-[10%] px-[10%] lg:mt-0 mt-52">
          <h1 className="text-[#363755] leading-tight md:w-[500px] text-6xl text-start w-full">
            Next generation digital banking
          </h1>
          <p className="text-gray-400 md:w-[500px] w-full mt-10 text-start text-[20px] mb-6">
            Take your financial life online. Your Easybank account will be a one-stop-shop for
            spending, saving, budgeting, investing, and much more.
          </p>
          <RequestInvite />
        </div>
        <div className="relative">
          <Image src={bgIntroDesktop} className="w-full relative" />
          <Image src={mockUps} className="absolute inset-0 top-[-100px] z-0  " />
        </div>
      </div>
      <div className="second flex flex-col md:mt-20 mt-10 px-[10%] pr-[8%]">
        <div className="flex flex-col justify-start mb-20">
          <h1 className="text-slate-800 text-4xl font-semibold">Why Choose Easybank?</h1>
          <p className="mt-3 font-semibold text-slate-400 md:w-[65%] w-full text-start text-[20px]">
            We leverage Open Banking to turn your bank account into your financial hub. Control your
            finances like never before.
          </p>
        </div>
        <div className="flex flex-wrap">
          <Reason src={iconOnline} title={'Online Banking'}>
            Our modern web and mobile applications allow you to keep track of your finances wherever
            you are in the world.
          </Reason>
          <Reason src={iconBudgeting} title={'Simple Budgeting'}>
            Our modern web and mobile applications allow you to keep track of your finances wherever
            you are in the world.
          </Reason>
          <Reason src={iconOnboarding} title={'Fast Onboarding'}>
            Our modern web and mobile applications allow you to keep track of your finances wherever
            you are in the world.
          </Reason>
          <Reason src={iconOnboarding} title={'Fast Onboarding'}>
            Our modern web and mobile applications allow you to keep track of your finances wherever
            you are in the world.
          </Reason>
        </div>
      </div>
      <div className="third px-[10%]  mt-20">
        <h1 className="text-slate-800 text-4xl font-semibold py-6">Latest Articles</h1>
        <div className="flex flex-wrap gap-5">
          {ARTICLES_DATA.map((article, index) => {
            return (
              <Articles key={index} src={article.src} author={article.author} title={article.title}>
                {article.paragraph}
              </Articles>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Banner
