import { Container, TransactionTypeContainer } from "./style";
import Modal from "react-modal";

import IconClose from "../../assets/close.svg";
import incomeIcon from "../../assets/income.svg";
import outcomeIcon from "../../assets/outcome.svg";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={IconClose} alt="fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeIcon} alt="entrada" />
            Entrada
          </button>
          <button type="button">
            <img src={outcomeIcon} alt="Saida" />
            Entrada
          </button>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
