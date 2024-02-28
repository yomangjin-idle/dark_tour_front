import React from "react";
import styled, { keyframes } from "styled-components";
import map from "assets/map.png";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FloatDiv from "components/atoms/FloatDiv";

export default function Onboading() {
    const navigate = useNavigate();

    const onClickStartHandler = () => {
        navigate("/main");
    };

    return (
        <MovingBackground>
            <LogoBox>
                <AnimatePresence mode="wait">
                    <FloatDiv initialY={10} exitY={-10}>
                        <Logo src={map}></Logo>
                    </FloatDiv>
                </AnimatePresence>
            </LogoBox>
            <BottomBox>
                <OnboadingText>제주도를 여행해보세요</OnboadingText>
                <StartButton onClick={onClickStartHandler}>
                    제주파티
                </StartButton>
            </BottomBox>
        </MovingBackground>
    );
}

const moveBackground = keyframes`
  from { background-position: 0 0; }
  to { background-position: -100% 0; }
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const LogoBox = styled.div`
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomBox = styled.div`
    height: 40%;
    flex-direction: column;
    display: flex;
    align-items: center;
`;
const StartButton = styled.button`
    width: 90%;
    height: 50px;
    margin-top: 25%;
    border: none;
    background-color: black;
    color: white;
    background-color:;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        opacity: 0.9;
    }
`;

const OnboadingText = styled.div`
    color: ${(props) => props.theme.colors.white};
`;

// 애니메이션을 적용할 스타일드 컴포넌트 생성
const MovingBackground = styled.div`
    background-image: url(${map});
    background-repeat: repeat-x;
    animation: ${moveBackground} 30s linear infinite;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;
