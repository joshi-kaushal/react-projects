import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, info, glass, image }) => {
  return (
    <article className="grid grid-rows-1 mb-8 transition duration-300 ease-in bg-wihte shadow-lightShadow">
      <div className="img-contailer">
        <img src={image} alt={name} />
      </div>

      <div className="cocktail-footer">
        <h3>{name}</h3> 
        <h4>{glass}</h4> 
        <p>{info}</p> 

        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          See More
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
