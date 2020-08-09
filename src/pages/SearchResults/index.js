// #### DEPENDENCIES ####
import React from 'react'

// ### COMPONENTS ###
import {RenderGifs} from 'components/'

export default function SearchResults ({params}) {
   const {searchGifs} = params

   return (
      <>
         <h3 className="App-title">{decodeURI(searchGifs)}</h3>
         <RenderGifs searchGifs={searchGifs} />
      </>
   )

}
