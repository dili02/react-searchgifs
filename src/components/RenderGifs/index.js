// ### DEPENDENCES ###
import React from 'react'

// ### CUSTOM HOOKS ###
import {useGifs} from 'hooks/useGifs'

// ### COMPONENTS ###
import { GifsList, Spinner } from 'components/'

export default function RenderGifs ({searchGifs}) {
   const {loading, gifs} = useGifs({searchGifs})

   return (
      <>
         {
            loading
            ? <Spinner />
            : <GifsList gifs={gifs} />
         }
         <button>
            GET MORE GIFFS
         </button>
      </>
   )
}
