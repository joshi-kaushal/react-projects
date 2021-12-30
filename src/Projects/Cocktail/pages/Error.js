import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
      <section className="error-page section">
        <div className="error-container">
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
