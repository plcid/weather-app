import { Route, Routes } from "react-router-dom"
import Main from "./components/main"
import Wrapper from "./components/wrapper";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import PastAlert from "./components/pastAlert";
import Event from "./components/event";

const WebApp = () => {

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Wrapper Content={Main}/>} />
                <Route path="/pastevents/:pastEventId" element={<Wrapper Content={Event}/>} />
                <Route path="/futureevents/:futureEventId" element={<Wrapper Content={Event}/>} />
            </Routes>
        </ThemeProvider>
    )
}

export default WebApp;