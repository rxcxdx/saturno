import { useDispatch } from 'react-redux'
import check from 'check-types'

export default function Valor({ bean }) {
  const dispatch = useDispatch()
  const tarefa = async () => {
    const value = window.prompt('NOVO VALOR')
    if (check.null(value)) return
    dispatch({
      type: 'VALOR',
      identifier: bean.identifier,
      payload: value
    })
  }
  return (
    <div>
      <div>
        <span>valor: {bean.valor}</span>&nbsp;
        <button className="text-sky-700 border" onClick={tarefa}>
          editar
        </button>
      </div>
    </div>
  )
}
