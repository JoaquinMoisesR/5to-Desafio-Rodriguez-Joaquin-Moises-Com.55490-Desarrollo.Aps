import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../featuers/counter/counterSlice'
import shopSlice from '../featuers/Shop/shopSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    shop: shopSlice,
  },
})