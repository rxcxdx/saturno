import { memo } from 'react'
import { useRendersCount } from 'react-use'
import Quantidade from './Quantidade'
import Remover from './Remover'
import Valor from './Valor'

const ESTILO = {
  marginTop: '5px',
  marginBottom: '5px',
  backgroundColor: '#fcb0a9'
}

function CartItem({ bean }) {
  const rendersCount = useRendersCount()
  return (
    <div style={ESTILO} className="p-1">
      <div>descricao: {bean.descricao}</div>
      <Valor bean={bean} />
      <Quantidade bean={bean} />
      <div>
        <Remover identifier={bean.identifier} />
      </div>
      <div>
        <small>{bean.identifier}</small>
      </div>
      <div>
        <small>count: {rendersCount}</small>
      </div>
    </div>
  )
}

export default memo(CartItem)
