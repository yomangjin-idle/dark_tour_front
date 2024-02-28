import styled from "styled-components";
import back from "assets/back.svg";

const IconButton = () => {
  return (
    <Container>
      <ButtonWrapper>
        <Wrapper>
          <img src={back} />
        </Wrapper>
      </ButtonWrapper>
    </Container>
  );
};

export default IconButton;

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
