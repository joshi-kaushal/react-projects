import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, info, glass, image }) => {
  return (
    <article className="grid grid-rows-1 mb-8 transition duration-300 ease-in bg-wihte shadow-lightShadow">
      <div className="img-contailer">
        <img src={image} alt={name} />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-4xl font-semibold">{name}</h3> 
        <h4 className="mb-2">{glass}</h4> 
        <p className="mb-2 text-cocktail-darkGrey">{info}</p> 

        <Link to={`/cocktail/${id}`} className='inline-block px-2 py-2 text-sm leading-6 text-white uppercase transition duration-300 ease-in bg-transparent border-2 border-none rounded-md cursor-pointer hover:bg-cocktail-primaryLight hover:text-cocktail-primaryColor bg-cocktail-primaryColor btn-details'>
          See More
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
