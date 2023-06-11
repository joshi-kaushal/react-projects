import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="flex justify-center px-0 py-20">
      <div className="text-center capitalize">
        <h1>Oops!</h1>
        <p>The page does not exists.</p>
        <Link to='/' className='inline-block px-3 py-2 leading-8 uppercase transition duration-300 ease-in bg-transparent border-2 rounded-md text-cocktail-primaryColor border-cocktail-primaryColor hover:bg-cocktail-primaryColor hover:text-white'>
          Back Home!
        </Link>
      </div>
    </section>
  )
}

export default Error
