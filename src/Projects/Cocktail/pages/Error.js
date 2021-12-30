import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
      <section className="flex justify-center px-0 py-20">
        <div className="text-center capitalize">
          <h1>Oops :(</h1>
          <p>The page does not exists.</p>
          <Link to='/' className='btn btn-primary'>
            Back Home!
          </Link>
        </div>
      </section>
    )
}

export default Error
