import { memo } from 'react'
import Remover from './Remover'
import EditarQuantidade from './EditarQuantidade'
import EditarValor from './EditarValor'
// import invariant from 'invariant'
// import check from 'check-types'

// import { useRendersCount } from 'react-use'
// const rendersCount = useRendersCount()
// <div>renders:{rendersCount}</div>

function CartItem({ identifier, descricao, quantidade, valor, subtotal }) {
  // invariant(check.string(valor), 'entrada CartItem ERRADA valor')
  // invariant(check.string(subtotal), 'entrada CartItem ERRADA subtotal')
  return (
    <div className="mb-4">
      
      <div>descricao: {descricao}</div>
      <div>quantidade: {quantidade}</div>
      <div>valor: {valor}</div>
      <div>subtotal: {subtotal}</div>
      <div>
        <EditarQuantidade identifier={identifier} />
      </div>
      <div>
        <EditarValor
          identifier={identifier}
          valor={valor}
          descricao={descricao}
        />
      </div>
      <div>
        <Remover identifier={identifier} />
      </div>
    </div>
  )
}

export default memo(CartItem)
