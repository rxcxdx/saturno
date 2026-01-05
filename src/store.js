import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

const ESTADO_INICIAL = {
  cart: [],
  username: 'ze'
}

export const store = configureStore({
  reducer,
  devTools: true,
  preloadedState: ESTADO_INICIAL
})
