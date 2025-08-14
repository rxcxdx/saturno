import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { isEmpty } from 'lodash-es'

export default function Cart() {
  const cart = useSelector((store) => store.cart)

  if (isEmpty(cart)) return   

  
  return (
    <div>
      {cart.map((o) => <CartItem key={o.identifier} bean={o} />)}
    </div>
  )
}
