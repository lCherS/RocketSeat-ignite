import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createAt: string;
}
/*
interface TransactionInput {
  title: string;
  type: string;
  category: string;
  amount: number;
}
type TransactionInput = Pick<Transaction, 'title' | 'type' | 'category' | 'amount'>;
*/
type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;


type TransactionsProviderProps = {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction [];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
  api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={ {transactions, createTransaction} }>
      {children}
    </TransactionsContext.Provider>
  )

}