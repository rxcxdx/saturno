import { Provider } from 'react-redux'
import store from './store'
import Pedido from './Pedido'
import { Toaster } from 'sonner'

export default function Main() {
  return (
    <div>
      <Provider store={store}>
        <Pedido />
      </Provider>
      <Toaster position="top-center" richColors />
    </div>
  )
}
