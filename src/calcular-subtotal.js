import memoize from 'memoizee'

function calcularSubtotal(quantidade, valor) {
  return quantidade * valor
}

export default memoize(calcularSubtotal)
