// ## DEPENDENCES ##
import {useState, useEffect} from 'react'

// ## HOOKS ##
import {useGifs} from 'hooks/useGifs'

// ## SERVICES ##
import getGif from 'services/getGif'

// --- Gif for context or api --- //
export default function useGif ({id}) {
   const {gifs} = useGifs()

   const gifFromContext = gifs.find(singleGif =>
      singleGif.id === id
   )

   const [gif, setGif] = useState(gifFromContext)
   const [isLoading, setIsLoading] = useState(false)
   const [isError, setIsError] = useState(false)

   useEffect(() => {
      if (!gif) {
			setIsLoading(true)
			getGif({ id })
			.then(gif => {
				setGif(gif)
            setIsLoading(false)
            setIsError(false)
			})
			.catch(err => {
				setIsLoading(false)
				setIsError(true)
			})
		}
   }, [gif, id])

   return {gif, isLoading, isError}

}
