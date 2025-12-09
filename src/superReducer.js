import { nanoid } from 'nanoid'
import { findIndex, isEmpty, toNumber } from 'lodash-es'
import { set, del, update } from 'object-path-immutable'
import check from 'check-types'
import { toastInfo } from './utils'

const ESTADO_INICIAL = {
  cart: []
}

function novoBean(o) {
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
      const joker = toNumber(action.payload)
      if (check.not.number(joker)) {
        toastInfo('não é numero nada foi modificado')
        return state
      }
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      return set(state, ['cart', cartIndex, 'valor'], joker)
    }
    case 'ADICIONAR': {
      if (isEmpty(action.payload)) {
        toastInfo('nada para adicionar')
        return state
      }
      return set(state, 'cart', [novoBean(action.payload), ...state.cart])
    }
    case 'RESET':
      return ESTADO_INICIAL
    default:
      return state
  }
}

export default superReducer
