import React, { useState } from "react";
import jejumap from "assets/main_island.svg";
import jejuBackGroundNight from "assets/main_background_night.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled, { keyframes } from "styled-components";
import { DUMMY } from "./dummy";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo.svg";

export const Main = () => {
    const [showTitle, setShowTitle] = useState(false);
    const navigate = useNavigate();

    const handleZoomChange = (transform) => {
        if (transform.state.scale > 2.0) {
            setShowTitle(true);
        } else {
            setShowTitle(false);
        }
    };

    const onClickHandler = (e) => {
        const id = e.currentTarget.getAttribute("id");
        navigate(`/details/${id}`);
    };

    return (
        <Container>
            <MapLayout>
                <TransformWrapper
                    centerOnInit
                    initialScale={1}
                    onZoom={handleZoomChange}
                >
                    <Logo src={logo} />
                    <TransformComponent
                        wrapperStyle={{ width: "375px", height: "667px" }}
                        contentStyle={{ width: "100%", height: "192px" }}
                    >
                        <img
                            src={jejumap}
                            width={"100%"}
                            alt="map"
                            id="jejuMap"
                        />
                        {DUMMY.map(
                            ({
                                px,
                                py,
                                name,
                                id,
                                imageLink,
                                scale,
                                fontPx,
                                fontPy,
                            }) => {
                                return (
                                    <>
                                        <Spot
                                            link={`/landmarks/${imageLink}.svg`}
                                            px={px}
                                            py={py}
                                            id={id}
                                            name={name}
                                            key={name}
                                            scale={scale}
                                            onClick={(e) => onClickHandler(e)}
                                        />
                                        {showTitle && (
                                            <Text
                                                fontPx={fontPx}
                                                fontPy={fontPy}
                                                id={id}
                                                len={name.length}
                                                name={name}
                                                key={name}
                                                fontSize={"1rem"}
                                            >
                                                {name}
                                            </Text>
                                        )}
                                    </>
                                );
                            }
                        )}
                    </TransformComponent>
                </TransformWrapper>
            </MapLayout>
        </Container>
    );
};

const Logo = styled.img`
    position: absolute;
    top: 128px;
    left: 19px;
    z-index: 10;
`;

const slideInUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(50%);
  }
`;

const Container = styled.div`
    position: relative;
    width: 375px;
    height: 667px;
    background-image: url(${jejuBackGroundNight});
`;
const MapLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Spot = styled.div`
    position: absolute;
    left: ${(props) => props.px + 25}px;
    top: ${(props) => props.py}px;
    width: 50px;
    height: 50px;
    background-image: url(${(props) => props.link});
    background-repeat: no-repeat; /* 배경 이미지 반복 없음 */
    background-size: contain;
    transform: scale(${(props) => props.scale});
`;

const Text = styled.div`
    position: absolute;
    left: ${(props) => props.fontPx + 25}px;
    top: ${(props) => props.fontPy + 35}px;
    z-index: 100;
    white-space: nowrap;
    text-shadow: 2px 2px 4px rgba(0.2, 0.2, 0.2, 0.3);
    font-size: 0.5rem;
    z-index: 10;
    color: white;
    animation: ${slideInUp} 1s ease forwards;
`;

export default Main;
