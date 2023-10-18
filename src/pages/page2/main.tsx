import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

import ErrorBoundary from '@/components/ErrorBoundary'
import App from './index'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)
