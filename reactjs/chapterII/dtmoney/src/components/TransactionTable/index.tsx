import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}

export function TransactionTable() {
  const [transaction, setTransaction] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransaction(res.data.transactions));
  }, []);

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
          {transaction.map((transact) => (
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
