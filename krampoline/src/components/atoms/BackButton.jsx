import styled from "styled-components";
import back from "assets/back.svg";
import { useNavigate } from "react-router-dom";

const BackButton = ({ title }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };
  return (
    <Container>
      <ButtonWrapper>
        <Wrapper onClick={onClickHandler}>
          <img src={back} />
        </Wrapper>
        <Content>{title}</Content>
      </ButtonWrapper>
    </Container>
  );
};

export default BackButton;

const Container = styled.div`
  position: fixed;
  display: flex;
  z-index: 50;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: ${(props) => props.theme.layout.minWidth.mobile};
  height: 3rem;
`;

const Wrapper = styled.button`
  position: absolute;
  border: none;
  width: 3rem;
  height: 3rem;
  background: transparent;
  top: 0px;
  left: 0px;

  > img {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
  }
`;

const Content = styled.div`
  height: 100%;
  font-size: ${(props) => props.theme.font.fontSize.large};
  flex-grow: 2;
  color: ${(props) => props.theme.font.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;
