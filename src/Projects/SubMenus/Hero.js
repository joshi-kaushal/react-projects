import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from '../../context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  return <section className="hero">
    <div className="hero-center">
      <article className="hero-info">
        <h1>Payments Infrastructure for the Internet</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quam corrupti, fugit id neque laudantium ut cupiditate iure repellendus rem est nobis architecto et impedit qui nesciunt deleniti? Nemo, pariatur officiis!</p>
        <button className="btn">
          Start Now!
        </button>
      </article>
      
      <article className="hero-images">
        <img src={phoneImg} className="phone-img" alt="phone-img" />
      </article>
    </div>
  </section>
}

export default Hero
