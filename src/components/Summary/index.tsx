import { Container } from "./styles";
import iconImg from '../../assets/Entradas.svg';
import outIconImg from '../../assets/Saídas.svg';
import totalIcon from '../../assets/cifrao.svg';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={iconImg} alt='Entradas'/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outIconImg} alt='Saídas'/>
                </header>
                <strong> - R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt='Total'/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}