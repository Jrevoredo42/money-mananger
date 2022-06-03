import  Modal  from 'react-modal';
import  { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../../assets/cancel.svg';
import incomeImg from '../../../assets/Entradas.svg';
import outcomeImg from '../../../assets/Saídas.svg';
import { FormEvent, useState } from 'react'; 
import { useTransactions } from '../../../hooks/useTransactions';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;

}


export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){

const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [ type, setType] = useState('deposit');


    async function handleCreateNewTransaction(event: FormEvent) {
         event.preventDefault()

         await createTransaction({
             title,
             amount,
             category,
             type,
         })

         setTitle('');
         setAmount(0);
         setType('deposit');
         setCategory('');
         onRequestClose();

    }

    return  (
        <Modal isOpen={isOpen}
             onRequestClose={onRequestClose}
             overlayClassName='react-modal-overlay'
             className='react-modal-content'
             >
            <button onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt='Fechar' />
            </button>
              <Container onSubmit={handleCreateNewTransaction}>  

              <h2>Cadastrar Transação </h2>

                <input 
                 type='text'
                 placeholder='Título'
                 value={title}
                 onChange={event => setTitle(event.target.value)}
                 />

                <input 
                 type='number'
                 placeholder='valor'
                 value={amount}
                 onChange={ event => setAmount(Number(event.target.value))}
                 />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        isActive={type === 'deposit'}

                        onClick={() => {setType('deposit')}}
                        >
                      <img src={incomeImg} alt='Entrada' />
                      <span>
                          Entrada
                      </span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        isActive={type === 'withdraw'}

                        onClick={() => {setType('withdraw')}}
                        >
                      <img src={outcomeImg} alt='Saída' />
                      <span>
                          Saída
                      </span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                placeholder='Categoria'
                alt='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type='submit'>
                    Cadastrar
                </button>

              </Container>

      </Modal>
    )

}