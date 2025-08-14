import { useDispatch } from 'react-redux'

export default function Valor({ bean }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    const value = window.prompt('novo valor')
    if (value === null) return
    dispatch({
      type: 'VALOR',
      identifier: bean.identifier,
      payload: Number.parseFloat(value)
    })
  }
  return (
    <div>
      <div>valor: {bean.valor}</div>
      <div>
        <small className="text-primary" type="button" onClick={() => tarefa()}>
          editar valor
        </small>
      </div>
    </div>
  )
}
