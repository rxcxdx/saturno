import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import Main from './Main'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div style={{ margin: '1rem' }}>
    <ErrorBoundary fallback={<div>Erro fatal no programa.</div>}>
      <Main />
    </ErrorBoundary>
  </div>
)
