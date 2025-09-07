import { nanoid } from 'nanoid'
import { set, del, update } from 'object-path-immutable'
//import { sample } from "lodash-es";

const ESTADO_INICIAL = {
  cart: [],
  obs: '',
  username: 'bruce'
}

function buildNovoBean(o) {
  return {
    identifier: nanoid(),
    descricao: o.descricao,
    valor: o.valor,
    quantidade: 1
  }
}

function superReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'MAIS': {
      const cartIndex = state.cart.findIndex(
        (o) => o.identifier === action.identifier
      )
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => ++v)
    }
    case 'MENOS': {
      const cartIndex = state.cart.findIndex(
        (o) => o.identifier === action.identifier
      )
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => --v)
    }
    case 'REMOVER': {
      const cartIndex = state.cart.findIndex(
        (o) => o.identifier === action.identifier
      )
      return del(state, ['cart', cartIndex])
    }

    case 'VALOR': {
      const cartIndex = state.cart.findIndex(
        (o) => o.identifier === action.identifier
      )
      if (Number.isNaN(action.payload)) return state
      return set(state, ['cart', cartIndex, 'valor'], action.payload)
    }

    case 'ADICIONAR': {
      return set(state, 'cart', [buildNovoBean(action.payload), ...state.cart])
    }

    case 'OBS': {
      return set(state, 'obs', action.payload)
    }

    case 'RESET':
      return ESTADO_INICIAL

    default:
      return state
  }
}

export default superReducer
