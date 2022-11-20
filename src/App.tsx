import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';
import { Header } from '../src/components/Header'
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/Header/NewTransactionModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App () {

const [isNewTansactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);

    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }


  return (
       <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 
      <Dashboard/>

      <NewTransactionModal
        isOpen={isNewTansactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
    <GlobalStyle/>
        </TransactionsProvider>
  )
}