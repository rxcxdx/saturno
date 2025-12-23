import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import Pedido from './Pedido'
import { Toaster } from 'sonner'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="container">
    

    <ErrorBoundary fallback={<div>Erro fatal no programa.</div>}>
      <Pedido />
    </ErrorBoundary>

    <Toaster richColors position="top-center" />
  </div>
)
