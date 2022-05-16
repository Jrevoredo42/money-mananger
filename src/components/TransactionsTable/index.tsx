import { Container } from "./styles";

export function Transactions(){
    return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Curso de React</td>
                    <td className="retirada"> - R$400,00</td>
                    <td>Desenvolvimento</td>
                    <td>02/03/22</td>
                </tr>
                <tr>
                    <td>Passe estudantil</td>
                    <td className="deposito">R$50,00</td>
                    <td>Uso Pessoal</td>
                    <td>13/05/22</td>
                </tr>
                <tr>
                    <td>Livro de Estrutura de dados</td>
                    <td className='retirada'> - R$67,65</td>
                    <td>Desenvolvimento</td>
                    <td>10/04/22</td>
                </tr>
                <tr>
                    <td>bolsa permanência</td>
                    <td className="deposito">R$200</td>
                    <td>Uso Pessoal</td>
                    <td>25/04/22</td>
                </tr>
            </tbody>
        </table>
    </Container>
    )
}