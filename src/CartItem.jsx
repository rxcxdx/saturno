import { memo } from 'react'
import Remover from './Remover'
import Editar from './Editar'

// import { useRendersCount } from 'react-use'
// const rendersCount = useRendersCount()
// <div>renders:{rendersCount}</div>

function CartItem({ identifier, descricao, quantidade, valor, subtotal }) {
  return (
    <div className="mb-4 w-sm hover:bg-sky-100">
      <div>identifier: {identifier}</div>
      <div>descricao: {descricao}</div>
      <div>quantidade: {quantidade}</div>
      <div>valor: {valor}</div>
      <div>subtotal: {subtotal}</div>

      <Editar identifier={identifier} valor={valor} quantidade={quantidade} />
      <Remover identifier={identifier} />
    </div>
  )
}

export default memo(CartItem)
