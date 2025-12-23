import { useDispatch } from 'react-redux'
import { TbTrashX } from 'react-icons/tb'

export default function Remover({ identifier }) {
  const dispatch = useDispatch()
  const tarefa = () => {
    dispatch({
      type: 'REMOVER',
      identifier
    })
  }
  return <TbTrashX size="2em" role="button" onClick={tarefa} />
}
