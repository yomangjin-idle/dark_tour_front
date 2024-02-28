import aa from "assets/test.png";
import Image from "components/atoms/Image";
import useMouseDrag from "hooks/useMouseDrag";
import styled from "styled-components";
const ImageFlexBox = () => {
  const { scrollRef, isDrag, onDragStart, onDragEnd, onThrottleDragMove } =
    useMouseDrag();
  return (
    <Container
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={isDrag ? onThrottleDragMove : undefined}
      ref={(e) => (scrollRef.current = e)}
    >
      <Image src={aa} radius="0" margin="0.2rem" />
    </Container>
  );
};

export default ImageFlexBox;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
