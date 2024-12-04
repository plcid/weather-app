import { Route, Routes } from "react-router-dom"
import Home from "./components/home"

const WebApp = () => {

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default WebApp;
