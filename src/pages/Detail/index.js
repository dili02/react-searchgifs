// #### DEPENDENCES ####
import React from 'react'
import {Redirect} from 'wouter'

// #### CUSTOM HOOKS ####
import useGif from 'hooks/useGif'

// #### COMPONENTS ####
import {Gif, Spinner} from 'components/'

// #### SEO ####
import {Helmet} from 'react-helmet'

export default function Detail ({params}) {

   const {gif, isLoading, isError} = useGif({id: params.id})

   if (isLoading) {
      return (
         <>
            <Helmet>
               <title>Cargando...</title>
            </Helmet>
            <Spinner />
         </>
      )
   }

   if (isError) return <Redirect to="/404" />
   if (!gif) return null

   const {title, url, id} = gif

   return <>
      <Helmet>
         <title>{title}|| Search Giffs</title>
         <meta name="desctiption" content={title} />
      </Helmet>
      <Gif title={title} url={url} id={id} />
   </>

}
