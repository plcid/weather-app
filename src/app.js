import { Route, Routes } from "react-router-dom"
import Main from "./components/main"
import Wrapper from "./components/wrapper";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

const WebApp = () => {

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Wrapper Content={Main}/>} />
            </Routes>
        </ThemeProvider>
    )
}

export default WebApp;