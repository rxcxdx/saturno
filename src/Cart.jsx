import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { sumBy } from 'lodash-es'
import calcularSubtotal from './calcular-subtotal'

export default function Cart() {
  const cart = useSelector((store) => store.cart)
  const lista = cart.map((o) => <CartItem key={o.identifier} bean={o} />)
  return (
    <div>
      <div>Componente Cart</div>
      <div>itens: {sumBy(cart, 'quantidade')}</div>
      <div>
        total: {sumBy(cart, (o) => calcularSubtotal(o.quantidade, o.valor))}
      </div>
      {lista}
    </div>
  )
}
