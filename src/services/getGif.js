import {API_URL} from './settings'

export default async function getGif ({id}) {
   const query = `${API_URL}/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`

   try {

      const apiResponse = await fetch(query)
      const resultsApiResponse = await apiResponse.json()
      const { data } = resultsApiResponse
      const { images, title, id } = data
      const { url } = images.downsized_medium

      return { title, id, url }


   } catch (error) {

      console.log(error)

   }

}