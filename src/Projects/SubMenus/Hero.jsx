import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from '../../context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return <section className="relative grid min-h-screen grid-cols-1 -mt-20 bg-contain justify-items-center stripe-hero" onMouseOver={closeSubmenu}>
    <div className="grid items-center lg:grid-cols-2 w-90vw max-w-1170">
      <article className="hero-info">
        <h1 className='max-w-xl mb-8 text-5xl font-bold leading-tight normal-case lg:text-7xl text-stripeColor-dark'>Payments Infrastructure for the Internet</h1>
        <p className='text-lg leading-6 lg:text-xl'>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        
        <button className="px-3 py-1 mt-4 text-base text-white transition duration-300 ease-in bg-black border border-transparent rounded-md cursor-pointer hover:bg-stripeColor-normal">
          Start Now!
        </button>
      </article>
      
      <article className="hidden lg:block lg:justify-self-center ">
        <img src={phoneImg} className="w-72"  alt="phone-img" />
      </article>
    </div>
  </section>
}

export default Hero
