// ### DEPENDENCES ###
import React from 'react'

// ### CUSTOM HOOKS ###
import {useGifs} from 'hooks/useGifs'

// ### COMPONENTS ###
import { GifsList, Spinner } from 'components/'

export default function RenderGifs ({searchGifs}) {
   const {loading, gifs, setPage} = useGifs({searchGifs})

   const handlePagination = () => setPage(prevPage => prevPage + 1)

   return (
      <>
         {
            loading
            ? <Spinner />
            : <GifsList gifs={gifs} />
         }
         <button onClick={handlePagination}>
            GET MORE GIFFS
         </button>
      </>
   )
}
