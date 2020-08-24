import {renderHook, act} from '@testing-library/react-hooks'
import useForm from './useForm'

test('should change searchGif', () => {
   const {result} = renderHook(() => useForm())

   act(() => {
      result.current.updateSearchGif('batman')
   })

   expect(result.current.searchGifs).toBe('batman')
})

test('should update correctly times when used twice', () => {
   const {result} = renderHook(() => useForm())

   act(() => {
      result.current.updateSearchGif('b')
      result.current.updateSearchGif('ba')
   })

   expect(result.current.searchGifs).toBe('ba')
   expect(result.current.count).toBe(2)
})