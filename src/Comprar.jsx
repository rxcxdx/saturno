import calcularSubtotal from './calcular-subtotal'
import { useTransition } from 'react'
import { useDispatch, useStore } from 'react-redux'
import axios from 'axios'
import delay from 'delay'
import { toast } from 'sonner'

async function nuvem(dto) {
  await delay(900)
  const { data } = await axios.post('/ws/buy', dto)
  return data
}

export default function Comprar() {
  const store = useStore()
  const dispatch = useDispatch()
  const [isPending, startTransition] = useTransition()
  const action = async () => {
    const ATUAL = store.getState()
    const dto = {
      cart: ATUAL.cart,
      username: ATUAL.username,
      obs: ATUAL.obs
    }
    const v = await nuvem(dto)
    toast.success('Sucesso', { description: v })
    dispatch({ type: 'RESET' })
    calcularSubtotal.clear()
  }
  return (
    <button onClick={() => startTransition(action)} disabled={isPending}>
      Comprar
    </button>
  )
}
