import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../../../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext()
  
  if(loading) {
    return <Loading />
  }

  if(cocktails.length < 1) {
    return <h2 className="mt-4 text-3xl leading-8 text-center capitalize mb-14">No Cocktail matched your search criteria!</h2>
  }

  return (
    <section className='px-0 py-20'>
      <h2 className="mt-4 text-3xl font-semibold leading-8 text-center capitalize mb-14">
        Cocktails
      </h2>

      <div className="grid gap-8 mx-auto my-0 w-85vw max-w-1170 md:grid-cols-2">
        {
          cocktails.map(cocktail => {
            return <Cocktail key={cocktail.id} {...cocktail} />
          })
        }
      </div>
    </section>
  )
}

export default CocktailList
