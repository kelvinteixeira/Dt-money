import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createDate: string;
};

type TransactionsInputs = Omit<Transaction, "id" | "createDate">;

type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionsProviderData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionsInputs) => Promise<void>;
};

const TransactionsContext = createContext<TransactionsProviderData>(
  {} as TransactionsProviderData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Array<Transaction>>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionsInputs) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createDate: new Date()
    });
    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}