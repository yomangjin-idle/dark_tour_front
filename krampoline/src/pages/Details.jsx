import styled from "styled-components";
import DetailsTemplate from "components/modules/DetailsTemplate";
import Description from "components/atoms/Description";
import ImageFlexBox from "components/molecules/ImageFlexBox";
import PlaceBox from "components/molecules/PlaceBox";
import IconButton from "components/atoms/IconButton";
import AudioBox from "components/modules/AudioBox";

const Details = () => {
  return (
    <PageWrapper>
      <Container>
        <IconButton />
        <AudioBox title="다랑쉬굴" />
        <DetailBox>
          <DetailsTemplate name="주소">
            <Description>
              제주특별자치도 제주시 구좌읍 세화리 2608-6번지 일대
            </Description>
          </DetailsTemplate>
          <DetailsTemplate name="개요">
            <Description>
              세화리 다랑쉬굴은 1948년 하도리, 종달리 주민 11명이 피신해 살다가
              발각되어 희생당한 곳이다. 군경토벌대는 이 굴을 발견하고 주민들에게
              나올 것을 종용했다. 그러나 주민들이 나오지 않자 토벌대는 굴 입구에
              불을 피워 연기를 불어넣어 고통스게 학살했다.
            </Description>
          </DetailsTemplate>
          <DetailsTemplate name="유적지 사진">
            <ImageFlexBox />
          </DetailsTemplate>
          <DetailsTemplate name="인근 유적지">
            <PlaceBox />
          </DetailsTemplate>
        </DetailBox>
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: ${(props) => props.theme.colors.neutral[700]};
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 1.5rem 1.5rem 0 1.5rem;
  border-radius: 1.75rem 0 0 0;
  background-color: ${(props) => props.theme.colors.background.primary};
`;

export default Details;
