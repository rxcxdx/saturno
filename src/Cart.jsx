import { useSelector } from 'react-redux'
import CartItem from './CartItem'

export default function Cart() {
  const cart = useSelector((store) => store.cart)
  return (
    <div>
      <div>cart length: {cart.length}</div>
      {cart.map((o) => (
        <CartItem key={o.identifier} bean={o} />
      ))}
    </div>
  )
}
