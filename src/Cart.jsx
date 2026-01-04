import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Comprar from './Comprar'
import { BigNumber } from 'bignumber.js'

const { format } = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

function build(cart) {
  let total = new BigNumber(0)
  const lista = []
  cart.forEach((o) => {
    const subtotal = new BigNumber(o.valor).multipliedBy(o.quantidade)
    total = total.plus(subtotal)
    lista.push(
      <CartItem
        key={o.identifier}
        identifier={o.identifier}
        descricao={o.descricao}
        quantidade={o.quantidade}
        valor={o.valor}
        subtotal={format(subtotal.toNumber())}
      />
    )
  })
  return {
    total: format(total.toNumber()),
    lista: lista
  }
}

export default function Cart() {
  const cart = useSelector((store) => store.cart)
  const { total, lista } = build(cart)
  return (
    <div>
      <Comprar cart={cart} />
      <br />
      <div>Total: {total}</div>
      <br />
      {lista}
    </div>
  )
}
