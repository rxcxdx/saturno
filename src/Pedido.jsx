import { get } from 'lodash-es'
import { ErrorBoundary } from 'react-error-boundary'
import Loja from './Loja'
import Cart from './Cart'
import Comprar from './Comprar'
import Obs from './Obs'
import Username from './Username'

const ESTILO = {
  padding: '5px',
  border: '3px solid red',
  width: '400px'
}

export function Protecao({ error, resetErrorBoundary }) {
  return (
    <div style={ESTILO}>
      <div>
        <button onClick={() => resetErrorBoundary()}>close</button>
      </div>
      <div style={{ color: 'red' }}>{get(error, 'response.data.message')}</div>
      <div>{error.name}</div>
      <div>{error.message}</div>
    </div>
  )
}

export default function Pedido() {
  return (
    <div>
      <Loja />
      <br />
      <Username />
      <Obs />
      <br />
      <div>
        <ErrorBoundary FallbackComponent={Protecao}>
          <div>
            <Comprar />
          </div>
        </ErrorBoundary>
      </div>

      <Cart />
    </div>
  )
}
