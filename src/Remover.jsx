import { useDispatch } from 'react-redux'

import { RiDeleteBin2Line as Trash } from "react-icons/ri";


export default function Remover({ identifier }) {
  const dispatch = useDispatch()

  

  const tarefa3 = () => {
    dispatch({
      type: 'DELETE',
      identifier
    })
  }

  return <Trash size="2em"  onClick={tarefa3} />
}
