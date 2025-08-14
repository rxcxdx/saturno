import { Provider } from 'react-redux'
import store from './store'
import Pedido from './Pedido'
import { Toaster } from 'sonner'

export default function Main() {
  return (
    <div>
      <div>Saturno</div>
      <Provider store={store}>
        <Pedido />
      </Provider>
      <Toaster
        position="top-center"
        theme="dark"
        richColors
        toastOptions={{ duration: 1000 }}
      />
    </div>
  )
}
