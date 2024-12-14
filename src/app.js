import { Route, Routes } from "react-router-dom"
import Main from "./components/main"
import Wrapper from "./components/wrapper";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import Event from "./components/event";
import { SettingsPage, UpdateStatusPage, GenerateReportPage, ShareWeatherDataPage } from './components/actionpages';
import { FlexibleGraph, WindSpeeds } from "./components/flexibleGraph";
import { humidity, pressure, temperature, wind_speeds } from "./const";
import ActiveAlert from "./components/activeAlert"

const WebApp = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                {/* conditions routes */}
                <Route path="/windspeeds" element={<Wrapper Content={() => (
                    <FlexibleGraph title={`Wind Speeds`} graphData={wind_speeds} unit={`mph`}/>
                )}/>} />
                <Route path="/humidity" element={<Wrapper Content={() => (
                    <FlexibleGraph title={`Humidity`} graphData={humidity} unit={`%`}/>
                )}/>} />
                <Route path="/pressure" element={<Wrapper Content={() => (
                    <FlexibleGraph title={`Atmospheric Pressure`} graphData={pressure} unit={`PSI`}/>
                )}/>} />
                <Route path="/temperature" element={<Wrapper Content={() => (
                    <FlexibleGraph title={`Temperature`} graphData={temperature} unit={`F`}/>
                )}/>} />


                <Route path="/" element={<Wrapper Content={Main}/>} />
                <Route path="/pastevents/:pastEventId" element={<Wrapper Content={Event}/>} />
                <Route path="/futureevents/:futureEventId" element={<Wrapper Content={Event}/>} />
                <Route path="/pastalerts/:pastAlertId" element={<Wrapper Content={Event}/>} />
                <Route path="/activealerts/:activeAlertId" element={<Wrapper Content={ActiveAlert}/>} />
                
                {/* action routes */}
                <Route path="/settings" element={<Wrapper Content={SettingsPage}/>} />
                <Route path="/updatestatus" element={<Wrapper Content={UpdateStatusPage}/>} />
                <Route path="/generatereport" element={<Wrapper Content={GenerateReportPage}/>} />
                <Route path="/share" element={<Wrapper Content={ShareWeatherDataPage}/>} />
            </Routes>
        </ThemeProvider>
    )
}

export default WebApp;