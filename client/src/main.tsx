import { AuthorizedApolloProvider } from 'core/provider/AuthorizedApolloProvider'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <AuthorizedApolloProvider>
      <App />
    </AuthorizedApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
