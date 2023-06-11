import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)

    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0]
          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]

          const newCocktail = { name, image, info, category, glass, instructions, ingredients }
          setCocktail(newCocktail)
          console.log(newCocktail);
        } else setCocktail(null)

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='py-20'>No cocktail to display</h2>
  }

  const { name, image, category, info, glass, instructions, ingredients } = cocktail

  return (
    <section className="px-0 py-20 text-center">
      <Link to='/' className='inline-block p-3 text-sm leading-6 uppercase transition duration-300 ease-in bg-transparent border-2 rounded-md cursor-pointer hover:bg-cocktail-mainGrey hover:text-cocktail-primaryColor text-cocktail-mainGrey bg-cocktail-primaryColor border-cocktail-primaryColor'>
        back home
      </Link>
      <h2 className="mt-4 text-4xl font-semibold leading-6 text-center capitalize mb-14">{name}</h2>
      <div className="gap-12 mx-auto my-0 text-left lg:grid lg:items-center lg:grid-cols-2FR3FR w-85vw max-w-1170 ">
        <img src={image} alt={name} className="border rounded-md" />

        <div className="lg:pt-0">
          <p className="font-bold leading-7 capitalize">
            <span className="px-2 py-1 mr-2 border rounded-md bg-cocktail-primaryLight text-cocktail-primaryColor">name :</span>
            {name}
          </p>
          <p className="font-bold leading-7 capitalize">
            <span className="px-2 py-1 mr-2 border rounded-md bg-cocktail-primaryLight text-cocktail-primaryColor">category :</span>
            {category}
          </p>
          <p className="font-bold leading-7 capitalize">
            <span className="px-2 py-1 mr-2 border rounded-md bg-cocktail-primaryLight text-cocktail-primaryColor">info :</span>
            {info}
          </p>
          <p className="font-bold leading-7 capitalize">
            <span className="px-2 py-1 mr-2 border rounded-md bg-cocktail-primaryLight text-cocktail-primaryColor">glass :</span>
            {glass}
          </p>
          <p className="font-bold leading-7 capitalize">
            <span className="px-2 py-1 mr-2 border rounded-md bg-cocktail-primaryLight text-cocktail-primaryColor">instructions :</span>
            {instructions}
          </p>
          <p className="font-bold leading-7 capitalize">
            <span className="px-2 py-1 mr-2 border rounded-md bg-cocktail-primaryLight text-cocktail-primaryColor">ingredients :</span>

            {
              ingredients.map((ingredient, index) => {
                return ingredient ? <span key={index} className="mr-2">{ingredient}</span> : null
              })
            }
          </p>

        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
