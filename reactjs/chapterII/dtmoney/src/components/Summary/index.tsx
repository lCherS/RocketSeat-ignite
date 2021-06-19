import { Container } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import iconImgIncome from "../../assets/income.svg";
import iconImgOutcome from "../../assets/outcome.svg";
import iconImgTotal from "../../assets/total.svg";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  /* REFATORADO
  const totalDeposits = transactions.reduce((acc, transaction) => {
    return transaction.type === "deposit" 
    ? acc + transaction.amount
    : acc
  }, 0);
*/

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );
  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconImgIncome} alt="Logo Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={iconImgOutcome} alt="Logo Saidas" />
        </header>
        <strong> -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </strong>
      </div>

      <div className="highlightBackground">
        <header>
          <p>Total</p>
          <img src={iconImgTotal} alt="Logo Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
