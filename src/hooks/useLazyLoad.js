import React, {useState, useEffect, useRef} from 'react'

export default function useLazyLoad ({distance = '150px'} = {}) {
   const [isNearScreen, setIsNearScreen] = useState(false)
   const elementRef = useRef()

   useEffect(() => {
      let observer

      const callback = (entries, observer) => {
         const elementToObserve = entries[0]

         if (elementToObserve.isIntersecting) {
            setIsNearScreen(true)
            observer.disconnect()
         }
      }

      Promise.resolve(
         typeof IntersectionObserver !== 'undefined'
         ? IntersectionObserver
         : import('intersection-observer')
      ).then(() => {
         observer = new IntersectionObserver(callback, {
            rootMargin: distance
         })

         observer.observe(elementRef.current)
      })

      return () => observer && observer.disconnect()
   })

   return {isNearScreen, elementRef}

}