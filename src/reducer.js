import { nanoid } from 'nanoid'
import { find, isEmpty, remove } from 'lodash-es'
import { produce, enableArrayMethods } from 'immer'

enableArrayMethods()

function novoBean(o) {
  return {
    identifier: nanoid(),
    descricao: o.descricao,
    valor: o.valor,
    quantidade: 1
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case 'DELETE': {
      // action.type
      // action.identifier
      const nextState = produce(state, (draft) => {
        remove(draft.cart, { identifier: action.identifier })
      })
      return nextState
    }

    case 'UNSHIFT': {
      // action.type
      // action.payload
      if (isEmpty(action.payload)) {
        return state
      }
      const nextState = produce(state, (draft) => {
        draft.cart.unshift(novoBean(action.payload))
      })
      return nextState
    }

    case 'SET_QUANTIDADE': {
      // action.type
      // action.identifier
      // action.payload
      const nextState = produce(state, (draft) => {
        const j = find(draft.cart, { identifier: action.identifier })
        j.quantidade = action.payload
      })
      return nextState
    }


    case 'SET_VALOR': {
      // action.type
      // action.identifier
      // action.payload
      const nextState = produce(state, (draft) => {
        const j = find(draft.cart, { identifier: action.identifier })
        j.valor = action.payload
      })
      return nextState
    }



    case 'CLEAR': {
      const nextState = produce(state, (draft) => {
        draft.cart = []
      })
      return nextState
    }

    default:
      return state
  }
}
