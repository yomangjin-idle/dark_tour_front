//import { useState } from 'react';
import styled from "styled-components";
import "./App.css";
//import { instance } from "./api.js";

function Main() {
    // const [apiTest, setApiTest] = useState(false);
    // const [dbTest, setDbTest] = useState(false);

    // const handleApiOnclick = async () => {
    //     try {
    //         await instance.get("/test");
    //         setApiTest(true);
    //     } catch(err) {
    //         console.log(err);
    //     }

    // }

    // const handleDbOnClick = async () => {
    //     try {
    //         await instance.get("/db");
    //         setDbTest(true);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    return (
        <div className="App">
            <Container></Container>
        </div>
    );
}

const Container = styled.div`
    width: 375px;
    height: 100vh;
    background-color: white;
    border: 1px solid black;
    box-sizing: border-box;
`;
export default Main;
