import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Main from "./Main";
import { theme } from './styles/theme';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
