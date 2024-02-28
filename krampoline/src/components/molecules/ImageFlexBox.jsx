import example from "assets/example.png";
import ImageTemplate from "components/modules/ImageTemplate";
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
      <ImageTemplate src={example} text="다랑쉬굴" margin="0 1rem 0 0" />
      <ImageTemplate src={example} text="다랑쉬굴" margin="0 1rem 0 0" />
      <ImageTemplate src={example} text="다랑쉬굴" margin="0 1rem 0 0" />
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
