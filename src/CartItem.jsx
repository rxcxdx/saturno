import { memo } from 'react'
import Quantidade from './Quantidade'
import Remover from './Remover'
import Valor from './Valor'
import { calcularSubtotal } from './calcular-subtotal'

function CartItem({ bean }) {
  return (
    <div className="border border-dashed w-sm mt-3">
      <div>descricao: {bean.descricao}</div>
      <Quantidade bean={bean} />
      <Valor bean={bean} />

      <div className="font-bold">
        subtotal: {calcularSubtotal(bean.quantidade, bean.valor)}
      </div>

      <div>
        <Remover identifier={bean.identifier} />
      </div>
    </div>
  )
}

export default memo(CartItem)
