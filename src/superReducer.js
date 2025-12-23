import { nanoid } from 'nanoid'
import { findIndex, isEmpty } from 'lodash-es'
import { set, del, update } from 'object-path-immutable'
import { toast } from 'sonner'

const ESTADO_INICIAL = {
  cart: [],
  username: 'bruce'
}

function novoBean(o) {
  return {
    identifier: nanoid(),
    descricao: o.descricao,
    valor: o.valor,
    quantidade: 1
  }
}

export default function superReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'REMOVER': {
      // action.type
      // action.identifier
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      return del(state, ['cart', cartIndex])
    }

    case 'ADICIONAR': {
      // action.type
      // action.payload
      if (isEmpty(action.payload)) {
        toast.warning('nada para adicionar')
        return state
      }
      return set(state, 'cart', [novoBean(action.payload), ...state.cart])
    }

    case 'MAIS': {
      // action.type
      // action.identifier
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => ++v)
    }

    case 'MENOS': {
      // action.type
      // action.identifier
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => --v)
    }

    case 'EDITAR_VALOR': {
      // action.type
      // action.identifier
      // action.payload
      const cartIndex = findIndex(state.cart, { identifier: action.identifier })
      return set(
        state,
        ['cart', cartIndex, 'valor'],
        Number.parseFloat(action.payload)
      )
    }

    case 'RESET_CART':
      return set(state, 'cart', [])

    default:
      return state
  }
}
