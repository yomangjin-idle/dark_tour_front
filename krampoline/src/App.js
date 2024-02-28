import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Onboading from "pages/Onboading";
import Layout from "./Layout";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<Onboading />} />
                        <Route path="/test" element={""} />
                        <Route path="/details" element={""} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
