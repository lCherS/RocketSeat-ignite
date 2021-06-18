import React, { useState } from "react";
// import style from "styled-components";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTTransactionModalOpen, setIsNewTTransactionModalOpen] =
    useState(false);

  function handleOpenNewTTransactionModal() {
    setIsNewTTransactionModalOpen(true);
  }
  function handleCloseNewTTransactionModal() {
    setIsNewTTransactionModalOpen(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTTransactionModalOpen}
        onRequestClose={handleCloseNewTTransactionModal}
      />
      <Dashboard />
    </TransactionsContext.Provider>
  );
}
