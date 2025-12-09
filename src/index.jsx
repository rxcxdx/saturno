import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import Main from './Main'
import './index.css'
import 'toastify-js/src/toastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <ErrorBoundary fallback={<div>Erro fatal no programa.</div>}>
      <Main />
    </ErrorBoundary>
  </div>
)
