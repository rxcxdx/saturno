import { findIndex, isPlainObject } from 'lodash-es'
import { nanoid } from 'nanoid'
import { set, del, update } from 'object-path-immutable'
import { toast } from 'sonner'

function buildNovoBean(o) {
  return {
    identifier: nanoid(),
    descricao: o.descricao,
    valor: o.valor,
    quantidade: 1
  }
}

const ESTADO_INICIAL = {
  cart: []
}

function superReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'MAIS': {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier
      })
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => ++v)
    }
    case 'MENOS': {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier
      })
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => --v)
    }
    case 'REMOVER': {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier
      })
      return del(state, ['cart', cartIndex])
    }

    case 'VALOR': {
      try {
        if (Number.isNaN(action.payload)) throw Error('não alterou')
        const cartIndex = findIndex(state.cart, {
          identifier: action.identifier
        })
        return set(state, ['cart', cartIndex, 'valor'], action.payload)
      } catch (e) {
        toast.error(e.message)
        return state
      }
    }

    case 'ADICIONAR': {
      try {
        if (!isPlainObject(action.payload)) throw Error('não adicionou')
        return set(state, 'cart', [
          buildNovoBean(action.payload),
          ...state.cart
        ])
      } catch (e) {
        toast.error(e.message)
        return state
      }
    }

    case 'RESET_CART':
      return set(state, 'cart', [])
    default:
      return state
  }
}

export default superReducer
