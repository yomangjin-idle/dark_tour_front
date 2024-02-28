import styled from "styled-components";

const Title = ({ fontSize, fontColor, fontBold, children }) => {
  return (
    <Wrapper fontSize={fontSize} fontColor={fontColor} fontBold={fontBold}>
      {children}
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : `1rem`)};
  font-weight: ${(props) => (props.fontBold ? props.fontBold : `500`)};
  color: ${(props) => (props.fontColor ? props.fontColor : `black`)};
`;
