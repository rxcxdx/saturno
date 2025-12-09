import { Provider } from 'react-redux'
import store from './store'
import Pedido from './Pedido'

export default function Main() {
  return (
    <div>
      <Provider store={store}>
        <Pedido />
      </Provider>
    </div>
  )
}
