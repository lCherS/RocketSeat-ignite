import { useContext } from "react";
import { Container } from "./styles";

import { TransactionsContext } from "../../TransactionsContext";

export function TransactionTable() {
const {transactions} = useContext(TransactionsContext)

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
          {transactions.map((transact) => (
            <tr key={transact.id}>
              <td>{transact.title}</td>
              <td className={transact.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transact.amount)}
              </td>
              <td>{transact.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transact.createAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
