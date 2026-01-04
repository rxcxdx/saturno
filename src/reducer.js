import { nanoid } from 'nanoid'
import { find, isEmpty, remove } from 'lodash-es'
import { toast } from 'sonner'
import { produce, enableArrayMethods } from 'immer'

enableArrayMethods()

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

export function reducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {


    case 'DELETE': {
      // action.type
      // action.identifier
      const nextState = produce(state, draft => {
        remove(draft.cart, { identifier: action.identifier})
      })
      return nextState      
    }



    case 'UNSHIFT': {
      // action.type
      // action.payload
      if (isEmpty(action.payload)) {
        toast.warning('nada para adicionar')
        return state
      }
      const nextState = produce(state, (draft) => {
        draft.cart.unshift(novoBean(action.payload))
      })
      return nextState
    }



    case 'EDITAR': {
      // action.type
      // action.identifier
      // ction.payload     
      const nextState = produce(state, (draft) => {
        const j = find(draft.cart, { identifier: action.identifier })
        j.quantidade = action.payload.quantidade
        j.valor = action.payload.valor
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
