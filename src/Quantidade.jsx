import { useDispatch } from 'react-redux'

export default function Quantidade({ bean }) {
  const dispatch = useDispatch()

  return (
    <div>
      <div>quantidade: {bean.quantidade}</div>
      <button
        onClick={() => {
          dispatch({
            type: 'MAIS',
            identifier: bean.identifier
          })
        }}
      >
        mais
      </button>
      &nbsp;
      <button
        onClick={() => {
          dispatch({
            type: 'MENOS',
            identifier: bean.identifier
          })
        }}
      >
        menos
      </button>
    </div>
  )
}
