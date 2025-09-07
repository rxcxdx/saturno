import { memo } from 'react'
import Quantidade from './Quantidade'
import Remover from './Remover'
import Valor from './Valor'
import calcularSubtotal from './calcular-subtotal'

const ESTILO = {
  padding: '5px',
  border: '1px dashed black',
  position: 'relative',
  marginBottom: '1rem'
}

function CartItem({ bean }) {
  return (
    <div style={ESTILO}>
      <div>
        <Remover identifier={bean.identifier} />
      </div>
      <div>descricao: {bean.descricao}</div>
      <Valor bean={bean} />
      <Quantidade bean={bean} />
      <div>
        <i>subtotal: {calcularSubtotal(bean.quantidade, bean.valor)}</i>
      </div>
      <div>
        <small>{bean.identifier}</small>
      </div>
    </div>
  )
}

export default memo(CartItem)
