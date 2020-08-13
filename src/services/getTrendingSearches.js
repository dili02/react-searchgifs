import {API_URL} from './settings'

export default async function getTrendingGifs () {

   const query = `${API_URL}/trending/searches?api_key=${process.env.REACT_APP_API_KEY}`

   try {
      const apiResponse = await fetch(query)
      const results = await apiResponse.json()
      const { data } = results

      return data
   } catch (error) {
      console.log(error)
   }

}