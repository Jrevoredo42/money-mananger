import  Modal  from 'react-modal';
import  { Container } from './styles';
import closeImg from '../../../assets/cancel.svg';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;

}



export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){
    return  (
        <Modal isOpen={isOpen}
             onRequestClose={onRequestClose}
             overlayClassName='react-modal-overlay'
             className='react-modal-content'
             >
            <button onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt='Fechar' />
            </button>
              <Container>  

              <h2>Cadastrar Transação </h2>

                <input type='text' placeholder='Título'/>

                <input type='number' placeholder='valor'/>

                <input placeholder='Categoria'/>

                <button type='submit'>
                    Cadastrar
                </button>

              </Container>

      </Modal>
    )

}