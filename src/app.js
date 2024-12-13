import { Route, Routes } from "react-router-dom"
import Main from "./components/main"
import Wrapper from "./components/wrapper";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Event from "./components/event";
import ActiveAlert from "./components/activeAlert";

const WebApp = () => {

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Wrapper Content={Main}/>} />

                <Route path="/pastalerts/:pastAlertId" element={<Wrapper Content={Event}/>} />
                <Route path="/activealerts/:activeAlertId" element={<Wrapper Content={ActiveAlert}/>} />
                <Route path="/pastevents/:pastEventId" element={<Wrapper Content={Event}/>} />
                <Route path="/futureevents/:futureEventId" element={<Wrapper Content={Event}/>} />
            </Routes>
        </ThemeProvider>
    )
}

export default WebApp;