import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import Pedido from './Pedido'
import { Toaster } from 'sonner'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="mt-1 mb-8 mx-1 lg:mx-8">
    <ErrorBoundary fallback={<div>Erro fatal no programa.</div>}>
      <Pedido />
    </ErrorBoundary>
    <Toaster richColors position="top-center" />
  </div>
)
