import { useDispatch } from 'react-redux'

export default function Remover({ identifier }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch({
      type: 'REMOVER',
      identifier
    })
  }
  return (
    <button className="text-red-700 border" onClick={tarefa}>
      remover
    </button>
  )
}
