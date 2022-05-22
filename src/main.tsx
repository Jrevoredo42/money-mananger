import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs';
import { App } from './App'

createServer({

  models: {
    transaction: Model,


  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Curso de react',
          type: 'withdraw',
          category: 'dev',
          amount: 200,
          createdAt: new Date('2022-03-12 11:48:03'),
        },
        {
          id: 2,
          title: 'bolsa permanencia',
          type: 'deposit',
          category: 'auxilio',
          amount: 130,
          createdAt: new Date('2022-04-27 13:02:00'),
        },

      ],
    })
  },

  routes(){
    this.namespace = 'api';


    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) =>{
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data);

    })

  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
