import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewTransactionsModal } from "./components/newTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransctionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionsModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
