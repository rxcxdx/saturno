import { nanoid } from 'nanoid'
import { findIndex, isEmpty } from 'lodash-es'
import { set, del, update } from 'object-path-immutable'

const ESTADO_INICIAL = {
  cart: [],
  obs: '',
  username: 'bruce'
}

function novo(o) {
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
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => ++v)
    }
    case 'MENOS': {
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => --v)
    }
    case 'REMOVER': {
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      return del(state, ['cart', cartIndex])
    }
    case 'VALOR': {
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      if (Number.isNaN(action.payload)) return state
      return set(state, ['cart', cartIndex, 'valor'], action.payload)
    }
    case 'ADICIONAR': {
      if (isEmpty(action.payload)) return state
      return set(state, 'cart', [novo(action.payload), ...state.cart])
    }
    case 'OBS':
      return set(state, 'obs', action.payload)
    case 'RESET':
      return ESTADO_INICIAL
    default:
      return state
  }
}

export default superReducer
