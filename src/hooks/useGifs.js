// ### DEPENDENCIES ###
import { useState, useEffect, useContext } from 'react'

// ### SERVICES ###
import getGifs from 'services/getGifs'

// ### CONTEXT ###
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs ({searchGifs} = {searchGifs: null}) {
   const [loading, setLoading] = useState(false)
   const [loadingNextPage, setLoadingNextPage] = useState(false)
   const [page, setPage] = useState(INITIAL_PAGE)
   const {gifs, setGifs} = useContext(GifsContext)

   useEffect(() => {
      setLoading(true)
      getGifs({searchGifs})
      .then(gifs => {
         setGifs(gifs)
         setLoading(false)
      })
   }, [searchGifs, setGifs])

   useEffect(() => {
      if (page === INITIAL_PAGE) return

      setLoadingNextPage(true)

      getGifs({searchGifs, page})
      .then(nextGifs => {
         setGifs(prevGifs => prevGifs.concat(nextGifs))
         setLoadingNextPage(false)
      })
   }, [page, searchGifs, setGifs])

   return {gifs, loading, setPage, loadingNextPage}
}
