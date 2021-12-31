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
    <section className="px-0 py-20 mt-4">
      <form className='px-10 py-8 mx-auto my-0 bg-white border rounded-md w-85vw max-w-40 shadow-lightShadow ' onSubmit={handleSubmit}>
        <label htmlFor="name" className='block mb-5 font-bold leading-3 text-cocktail-primaryColor'>Search Your Favorite Cocktail</label>
        <input className="w-full p-2 text-xl border border-transparent border-none rounded-md bg-cocktail-mainBG" type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue} />
      </form>
    </section>
  )
}

export default SearchForm
