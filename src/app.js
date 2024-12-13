import { Route, Routes } from "react-router-dom"
import Main from "./components/main"
import Wrapper from "./components/wrapper";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Event from "./components/event";
import { SettingsPage, UpdateStatusPage, GenerateReportPage, ShareWeatherDataPage } from './components/actionpages';

const WebApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Wrapper Content={Main}/>} />
                <Route path="/pastevents/:pastEventId" element={<Wrapper Content={Event}/>} />
                <Route path="/futureevents/:futureEventId" element={<Wrapper Content={Event}/>} />
                
                {/* New action routes */}
                <Route path="/settings" element={<Wrapper Content={SettingsPage}/>} />
                <Route path="/updatestatus" element={<Wrapper Content={UpdateStatusPage}/>} />
                <Route path="/generatereport" element={<Wrapper Content={GenerateReportPage}/>} />
                <Route path="/share" element={<Wrapper Content={ShareWeatherDataPage}/>} />
            </Routes>
        </ThemeProvider>
    )
}

export default WebApp;