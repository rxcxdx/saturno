import { useDispatch } from 'react-redux'

import { FaRegPlusSquare, FaRegMinusSquare } from 'react-icons/fa'

export default function EditarQuantidade({ identifier }) {
  const dispatch = useDispatch()

  const tarefa1 = () => {
    dispatch({ type: 'MAIS', identifier })
  }

  const tarefa2 = () => {
    dispatch({ type: 'MENOS', identifier })
  }

  return (
    <span>
      <FaRegPlusSquare size="2em" role="button" onClick={tarefa1} />
      &nbsp;
      <FaRegMinusSquare size="2em" role="button" onClick={tarefa2} />
    </span>
  )
}
