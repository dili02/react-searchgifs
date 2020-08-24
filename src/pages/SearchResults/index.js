// #### DEPENDENCIES ####
import React from 'react'

// ### COMPONENTS ###
import {RenderGifs, SearchForm} from 'components/'

export default function SearchResults ({params}) {
   const {searchGifs, rating, language} = params

   return (
      <>
         <SearchForm initialRating={rating} initialSearchGifs={searchGifs} initialLanguage={language} />
         <h3 className="App-title">{decodeURI(searchGifs)} - {rating} - {language}</h3>
         <RenderGifs searchGifs={searchGifs} rating={rating} language={language} />
      </>
   )

}
