import {useState, useEffect, useRef} from 'react'

export default function useLazyLoad ({distance = '150px', externalRef, toogleIsVisible=true} = {}) {
   const [isNearScreen, setIsNearScreen] = useState(false)
   const elementRef = useRef()

   useEffect(() => {
      let observer
      const element = externalRef ? externalRef.current : elementRef.current

      const callback = (entries, observer) => {
         const elementToObserve = entries[0]

         if (elementToObserve.isIntersecting) {
            setIsNearScreen(true)
            toogleIsVisible && observer.disconnect()
         } else {
            !toogleIsVisible && setIsNearScreen(false)
         }
      }

      // Pollyfill
      Promise.resolve(
         typeof IntersectionObserver !== 'undefined'
         ? IntersectionObserver
         : import('intersection-observer')
      ).then(() => {
         observer = new IntersectionObserver(callback, {
            rootMargin: distance
         })

         if (element) observer.observe(element)
      })

      return () => observer && observer.disconnect()
   })

   return {isNearScreen, elementRef}

}