import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Comprar from './Comprar'
import { BigNumber } from 'bignumber.js'

const fmt = { decimalSeparator: ',', prefix: 'R$ ' }

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
        subtotal={subtotal.toFormat(fmt)}
      />
    )
  })
  return {
    total: total.toFormat(fmt),
    lista: lista
  }
}

export default function Cart() {
  const cart = useSelector((store) => store.cart)
  const { total, lista } = build(cart)
  return (
    <div>
      <Comprar cart={cart} />
      <div className="font-bold">{total}</div>
      {lista}
    </div>
  )
}
