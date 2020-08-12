// ## DEPENDENCES ##
import React, {Suspense} from 'react'

// ## HOOKS ##
import useLazyLoad from 'hooks/useLazyLoad'

// ## COMPONENTS ##
import Spinner from 'components/Spinner'
const TrendingSearches = React.lazy(
   () => import('./TrendingSearches')
)

export default function LazyTranding () {
   const {isNearScreen, elementRef} = useLazyLoad()

   return <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
         {
            isNearScreen
            ? <TrendingSearches />
            : <Spinner />
         }
      </Suspense>
   </div>

}