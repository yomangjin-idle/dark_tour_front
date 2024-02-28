import Image from "components/atoms/Image";
import styled from "styled-components";
import example from "assets/example.png";
import DetailsDescription from "components/modules/DetailsDescription";
import SubTitle from "components/atoms/SubTitle";
import Content from "components/atoms/Content";

const PlaceBox = () => {
  return (
    <Wrapper>
      <Image src={example} />
      <DescriptionBox>
        <SubTitle fontSize="1rem" color="white" margin="0 0 0.125rem 0">
          제주 4.3 평화공원
        </SubTitle>
        <Content fontSize="0.75rem" margin="0 0 0.25rem 0">
          제주 4.3 사건의 희생자를 기리는 공간
        </Content>
        <DetailsDescription name="주소" margin="0 0 0.125rem 0">
          제주특별자치도 제주시 오라로 2653
        </DetailsDescription>
        <DetailsDescription name="거리">약 5km</DetailsDescription>
      </DescriptionBox>
    </Wrapper>
  );
};

export default PlaceBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;
`;
