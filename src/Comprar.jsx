import { useDispatch, useSelector } from 'react-redux'
import { mutateBuy } from './api'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'

export default function Comprar({ cart }) {
  const dispatch = useDispatch()
  const [isPending, startTransition] = useTransition()
  const [obs, setObs] = useState('')
  const username = useSelector((store) => store.username)

  const action = async () => {
    try {
      const dto = { cart, username, obs }
      const o = await mutateBuy(dto)
      toast.success(
        <div>
          <div>{o._id}</div>
          <div>{o.dt}</div>
        </div>
      )
      dispatch({ type: 'CLEAR' })
      setObs('')
    } catch (e) {
      toast.error(e.message, { icon: null })
    }
  }

  const a = <span>Enviando...</span>

  const b = (
    <span role="button" onClick={() => startTransition(action)}>
      COMPRAR
    </span>
  )

  return (
    <div className="border w-xs p-2">
      <div className="mb-2">
        <input
          className="border border-dashed w-full border-gray-400 text-xs"
          value={obs}
          placeholder="obs"
          type="text"
          onChange={(evt) => setObs(evt.target.value)}
        />
      </div>
      <div>{isPending ? a : b}</div>
    </div>
  )
}
