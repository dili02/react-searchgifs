import {useReducer} from 'react'

const ACTIONS = {
   UPDATE_SEARCHGIFS: 'update_searchGifs',
   UPDATE_RATING: 'update_rating',
   UPDATE_LANGUAGE: 'update_language',
   RESET_FILTERS: 'reset_filters'
}

const REDUCER = (state, action) => {
   switch (action.type) {
      case ACTIONS.UPDATE_SEARCHGIFS:
         return {
            ...state,
            searchGifs: action.payload
         }
      case ACTIONS.UPDATE_RATING:
         return {
            ...state,
            rating: action.payload
         }
      case ACTIONS.UPDATE_LANGUAGE:
         return {
            ...state,
            language: action.payload
         }
      case ACTIONS.RESET_FILTERS:
         return {
            ...state,
            searchGifs: '',
            rating: 'g',
            language: 'es',
         }
      default: return state
   }
}

export default function useForm ({initialSearchGifs, initialRating, initialLanguage}) {
   const [state, dispatch] = useReducer(REDUCER, {
      searchGifs: decodeURIComponent(initialSearchGifs),
      rating: initialRating,
      language: initialLanguage
   })

   const {searchGifs, rating, language} = state

   return {
      searchGifs,
      rating,
      language,
      dispatch,
      updateSearchGif: searchGifs => dispatch({
         type: ACTIONS.UPDATE_SEARCHGIFS,
         payload: searchGifs
      }),
      updateRating: rating => dispatch({
         type: ACTIONS.UPDATE_RATING,
         payload: rating
      }),
      updateLanguage: language => dispatch({
         type: ACTIONS.UPDATE_LANGUAGE,
         payload: language
      }),
      resetFormSearch: resetLocation => dispatch({
         type: ACTIONS.RESET_FILTERS,
         payload: resetLocation
      })
   }
}

