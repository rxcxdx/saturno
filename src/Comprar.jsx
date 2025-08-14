import { useDispatch, useStore } from 'react-redux'
import axios from 'axios'
import { toast } from 'sonner'
import { useRef, useState } from 'react'
import delay from 'delay'
import { Button } from 'grommet'


async function buy(o) {
  await delay(800)
  const response = await axios.post('/ws/buy', o)
  return response.data
}

export default function Comprar() {
  const store = useStore()
  const dispatch = useDispatch()
  const ref = useRef()
  const [loading, setLoading] = useState(false)
  const finalFeliz = (v) => {
    toast.success('SUCESSO', { description: v })
    dispatch({ type: 'RESET_CART' })
    ref.current.value = ''
  }
  const tarefa = async () => {
    let v
    try {
      setLoading(true)
      const ATUAL = store.getState()
      const o = {
        cart: ATUAL.cart,
        username: 'bruce',
        obs: ref.current.value
      }
      v = await buy(o)
    } catch (e) {
      toast.error(e.response.data.message, { description: e.name })
      return
    } finally {
      setLoading(false)
    }
    finalFeliz(v)
  }
  return (
    <div className='border border-dark p-3'>
      <div className='mb-2'><input type='text' placeholder='obs' ref={ref} /></div>
      <div>
        <Button color='green' plain busy={loading} onClick={() => tarefa()} label='Comprar' />
      </div>
    </div>
  )
}
