import LogoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransctionModal: () => void;
};

export function Header({ onOpenNewTransctionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money logo" />
        <button type="button" onClick={onOpenNewTransctionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
