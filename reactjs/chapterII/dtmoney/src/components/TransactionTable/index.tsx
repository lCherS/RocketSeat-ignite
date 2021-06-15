import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Deposito</td>
            <td className="deposity">R$ 400,00</td>
            <td>Pagamento</td>
            <td>23/02/2021</td>
          </tr>

          <tr>
            <td>conta de luz</td>
            <td className="withdraw">-R$ 230,00</td>
            <td>Contas</td>
            <td>28/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
