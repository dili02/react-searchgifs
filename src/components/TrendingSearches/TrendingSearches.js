// ### DEPENDENCES ###
import React, {useState, useEffect} from 'react'

// ### SERVICES ###
import getTrendingGifs from 'services/getTrendingSearches'

// ### COMPONENTS ###
import {Category} from 'components/'

export default function TrendingSearches () {
   const [trends, setTrends] = useState([])

   useEffect(() => {
      let mounted = true
      getTrendingGifs().then(() => {
         if (mounted) {
            setTrends(setTrends)
         }
      })
      return function cleanup() {
         mounted = false
      }
   }, [])

   return <Category options={trends} name="tendencias" />
}