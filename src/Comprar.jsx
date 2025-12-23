import { useDispatch, useSelector } from 'react-redux'
import { mutateBuy } from './api'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'

const ESTILO_INPUT = "border border-secondary bg-white rounded-0 w-100"

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
      dispatch({ type: 'RESET_CART' })
      setObs('')
    } catch (e) {
      toast.error(e.message, { icon: null })
    }
  }

  const a = <span>Enviando...</span>
  const b = <span role='button' onClick={() => startTransition(action)} className='text-success'>comprar</span>

  return (
    <div style={{ width: '300px', border: '2px dashed gray', padding: '10px' }}>
      <div className='mb-1'>
        <input
        className={ESTILO_INPUT}
          value={obs}
          placeholder="obs"
          type="text"
          onChange={(evt) => setObs(evt.target.value)}
        />
      </div>

      <div>
        {isPending ? a : b}
      </div>


    </div>
  )
}
