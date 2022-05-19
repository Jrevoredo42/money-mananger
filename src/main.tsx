import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer } from 'miragejs';
import { App } from './App'

createServer({
  routes(){
    this.namespace = 'api';


    this.get('/transactions', () => {
      return [
        {

          id: 1,
          title: 'first transaction',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ]
    })

  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
