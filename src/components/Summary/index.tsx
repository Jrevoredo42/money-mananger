import { Container } from "./styles";
import iconImg from '../../assets/Entradas.svg';
import outIconImg from '../../assets/Saídas.svg';
import totalIcon from '../../assets/cifrao.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(){

    const { transactions } = useTransactions()

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'deposit'){
    //         return acc + transaction.amount;
    //     }

    //     return acc;
    // }, 0)
    const summary = transactions.reduce((acc, transaction) =>{

        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        }
        else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },{

        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    console.log(transactions);

    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconImg} alt='Entradas'/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outIconImg} alt='Saídas'/>
                </header>
                <strong> 
                    - 
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt='Total'/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}