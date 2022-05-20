import { GlobalStyle } from './styles/global';
import { Header } from '../src/components/Header'
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import  Modal  from 'react-modal';

Modal.setAppElement('#root');

export function App () {

const [isNewTansactionOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);

    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }


  return (
       <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 
      <Dashboard/>

      <Modal isOpen={isNewTansactionOpen}
             onRequestClose={handleCloseNewTransactionModal}>
              <h2>Cadastrar Transação </h2>
      </Modal>
    <GlobalStyle/>
        </>
  )
}