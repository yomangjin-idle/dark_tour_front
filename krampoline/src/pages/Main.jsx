import React, { useState } from "react";
import jejumap from "assets/map.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from "styled-components";
import { DUMMY } from "./dummy";
import { useNavigate } from "react-router-dom";

import FloatDiv from "components/atoms/FloatDiv";

export const Main = () => {
    const [showTitle, setShowTitle] = useState(false);
    const navigate = useNavigate();

    const handleZoomChange = (transform) => {
        if (transform.state.scale > 3) {
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
        <MapLayout>
            <TransformWrapper
                centerOnInit
                initialScale={1}
                onZoom={handleZoomChange}
            >
                <TransformComponent
                    wrapperStyle={{ width: "323px", height: "100vh" }}
                    contentStyle={{ width: "100%", height: "192px" }}
                >
                    <img src={jejumap} width={"100%"} alt="map" id="jejuMap" />
                    {DUMMY.map(({ px, py, name, id }) => {
                        return (
                            <>
                                <Spot
                                    px={px}
                                    py={py}
                                    id={id}
                                    name={name}
                                    key={name}
                                    onClick={(e) => onClickHandler(e)}
                                >
                                    {showTitle && (
                                        <FloatDiv initialY={0} exitY={0}>
                                            <Text
                                                px={px}
                                                py={py}
                                                id={id}
                                                len={name.length}
                                                name={name}
                                                key={name}
                                                fontSize={"0.1rem"}
                                            >
                                                {name}
                                            </Text>
                                        </FloatDiv>
                                    )}
                                </Spot>
                            </>
                        );
                    })}
                </TransformComponent>
            </TransformWrapper>
        </MapLayout>
    );
};

const MapLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Spot = styled.div`
    position: absolute;
    left: ${(props) => props.px + "px"};
    top: ${(props) => props.py + "px"};
    width: 20px;
    height: 20px;
    background-color: pink;
`;

const Text = styled.span`
    position: absolute;
    width: 100%;
    top: 100%;
    white-space: nowrap;
    transform: ${(props) =>
        `translate(${props.len > 4 ? "-70%" : "-50%"}, 0)`}; // X축과 Y축으로 조건부 이동
    font-size: 0.3rem;
    z-index: 10;
`;

export default Main;
