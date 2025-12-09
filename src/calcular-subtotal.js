import memoize from 'memoizee'
import Decimal from 'decimal.js-light'

function calcularSubtotalCore(quantidade, valor) {
  return new Decimal(valor).mul(quantidade).toNumber()
}

export const calcularSubtotal = memoize(calcularSubtotalCore)
