// ## DEPENDENCES ##
import React from 'react'
import { useLocation } from 'wouter'

// ## HOOKS ##
import useForm from './useForm'

const RATINGS = ["g", "pg", "pg-13", "r"]
const LANGUAGES = [
   { idioma: 'Spanish', abreviatura: 'es' },
   { idioma: 'English',  abreviatura: 'en' },
   { idioma: 'Portuguese', abreviatura: 'pt' },
   { idioma: 'French', abreviatura: 'fr' }
 ]

function SearchForm ({initialSearchGifs="", initialRating="g", initialLanguage="es"}) {

   const [path, pushLocation] = useLocation()

   const {searchGifs, rating, language, updateSearchGif, updateRating, updateLanguage, resetFormSearch} = useForm({initialSearchGifs, initialRating, initialLanguage})

   const handleSubmit = e => {
      e.preventDefault()
      pushLocation(`/search/${searchGifs}/${rating}/${language}`)
   }

   const handleChangeResetFormSearch = () => {
      resetFormSearch(`/search/${searchGifs}/${rating}/${language}`)
   }

   const handleChangeLanguage = e => {
      updateLanguage(e.target.value)
   }

   const handleChangeRating = e => {
      updateRating(e.target.value)
   }

   const handleChange = e => {
      updateSearchGif(e.target.value)
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            value={searchGifs}
            onChange={handleChange}
            placeholder="Search a Gif Here!!!"
         />
         <select value={rating} onChange={handleChangeRating}>
            <option disabled>Rating Type</option>
            {RATINGS.map(rating =>
               <option key={rating}>
                  {rating}
               </option>
            )}
         </select>
         <select
            value={language}
            onChange={handleChangeLanguage}
         >
            {LANGUAGES.map(language =>
               <option key={ language.abreviatura } value={ language.abreviatura }>
                  { language.idioma }
               </option>
            )}
         </select>
         { searchGifs !== '' &&
            <button
               onClick = { handleChangeResetFormSearch }
            >
               Reset Search
            </button>
         }
         <button>
            SEARCH
         </button>
      </form>
   )
}

export default React.memo(SearchForm)