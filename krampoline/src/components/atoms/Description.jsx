import styled from "styled-components";

const Description = ({ fontSize, fontColor, fontBold, children }) => {
  return (
    <Wrapper fontSize={fontSize} fontColor={fontColor} fontBold={fontBold}>
      {children}
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : `0.75rem`)};
  font-weight: ${(props) => (props.fontBold ? props.fontBold : `500`)};
  color: ${(props) => (props.fontColor ? props.fontColor : `white`)};
`;
