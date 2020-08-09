// ### DEPENDENCIES ###
import { useState, useEffect, useContext } from 'react'

// ### SERVICES ###
import getGifs from 'services/getGifs'

// ### CONTEXT ###
import GifsContext from 'context/GifsContext'

export function useGifs ({searchGifs} = {searchGifs: null}) {
   const [loading, setLoading] = useState(false)
   const {gifs, setGifs} = useContext(GifsContext)

   useEffect(() => {
      setLoading(true)
      getGifs({searchGifs})
      .then(gifs => {
         setGifs(gifs)
         setLoading(false)
      })
   }, [searchGifs, setGifs])

   return {gifs, loading}
}
