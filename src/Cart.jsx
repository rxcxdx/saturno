import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { mutateBuy } from './api'
import { calcularSubtotal } from './calcular-subtotal'
import { toastSuccess, toastError } from './utils'

export default function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.cart)
  const lista = cart.map((o) => <CartItem key={o.identifier} bean={o} />)
  const tarefa = async () => {
    try {
      const dto = {
        cart,
        username: 'zeca',
        obs: undefined
      }
      const o = await mutateBuy(dto)
      dispatch({ type: 'RESET' })
      calcularSubtotal.clear()
      toastSuccess(o._id)
    } catch (e) {
      toastError(e.message)
    }
  }
  return (
    <div>
      <div>
        <button onClick={tarefa} className="text-green-700 border border-2">
          COMPRAR
        </button>
      </div>
      {lista}
    </div>
  )
}
