import React, { useEffect } from 'react'
import { useGlobalContext } from '../../../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }
  useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <section className="section search">
      <form className='search-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Search Your Favorite Cocktail</label>
        <input type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue} />
      </form>
    </section>
  )
}

export default SearchForm
