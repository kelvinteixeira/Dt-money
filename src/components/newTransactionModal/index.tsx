import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBoxButton } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi";
import { useTransactions } from "../../hooks/useTransactions";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionsModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategoty] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategoty("");
    setType("deposit");
    onRequestClose();
  }

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
        <AiOutlineClose />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        ></input>
        <TransactionTypeContainer>
          <RadioBoxButton
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <HiArrowCircleUp className="summary-icons" color="var(--green)" />
            <span>Entrada</span>
          </RadioBoxButton>
          <RadioBoxButton
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <HiArrowCircleDown className="summary-icons" color="var(--red)" />
            <span>Saída</span>
          </RadioBoxButton>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategoty(event.target.value)}
        ></input>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
