import {API_URL} from './settings'

export default async function getGifs ({limit=25, searchGifs} = {} ) {
   const query = `${API_URL}/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${searchGifs}&${limit}&offset=0&rating=g&lang=en`

   try {

      const apiResponse = await fetch(query)
      const results = await apiResponse.json()
      const { data } = results

      const gifs = data.map(gif => {
         const { images, title, id } = gif
         const { url } = images.downsized_medium
         return { title, id, url }
      })

      return gifs

   } catch (error) {

      console.log(error)

   }

}