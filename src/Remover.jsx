import { useDispatch } from 'react-redux'

export default function Remover({ identifier }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch({
      type: 'REMOVER',
      identifier
    })
  }
  return <button onClick={tarefa}>remover</button>
}
