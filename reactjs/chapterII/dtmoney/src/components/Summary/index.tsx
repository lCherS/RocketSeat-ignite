import {Container} from './styles';
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

import iconImgIncome from '../../assets/income.svg';
import iconImgOutcome from '../../assets/outcome.svg';
import iconImgTotal from '../../assets/total.svg';

export function Summary() {
  const {transactions} = useContext(TransactionsContext);

  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconImgIncome} alt="Logo Entradas" />
        </header>
        <strong>
          R$ 1.800,00
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={iconImgOutcome} alt="Logo Saidas" />
        </header>
        <strong>
          - R$ 1.000,00
        </strong>
      </div>

      <div className="highlightBackground">
        <header>
          <p>Total</p>
          <img src={iconImgTotal} alt="Logo Total" />
        </header>
        <strong>
          R$ 800,00
        </strong>
      </div>
    </Container>
  )
}