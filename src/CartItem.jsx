import { memo } from 'react'
import Quantidade from './Quantidade'
import Remover from './Remover'
import Valor from './Valor'
import calcularSubtotal from './calcular-subtotal'

const ESTILO = {
  padding: '5px',
  border: '1px solid black',
  position: 'relative',
  marginBottom: '.5rem'
}

function CartItem({ bean }) {
  return (
    <div style={ESTILO}>
      <div>
        <span>descricao: {bean.descricao}</span>&nbsp;
        <Remover identifier={bean.identifier} />
      </div>
      <Quantidade bean={bean} />

      <Valor bean={bean} />

      <div>subtotal: {calcularSubtotal(bean.quantidade, bean.valor)}</div>
    </div>
  )
}

export default memo(CartItem)
