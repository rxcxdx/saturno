import { useDispatch } from 'react-redux'

const joker = 'text-sky-700 border border-sky-700'

export default function Quantidade({ bean }) {
  const dispatch = useDispatch()

  return (
    <div>
      <span>quantidade: {bean.quantidade}</span>&nbsp;
      <button
        className={joker}
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
        className={joker}
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
