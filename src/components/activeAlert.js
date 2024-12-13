import { useParams } from "react-router-dom";
import { Hr } from "./common";
import { active_alerts } from "../const";
import { Box, Button, styled, Typography } from "@mui/material";
import { useState } from "react";

const ToggleButton = styled(Button)(({ theme, isActive }) => ({
    borderRadius:32,
    paddingLeft:16,
    paddingRight:16,
    backgroundColor:isActive?`#283eff`:`rgba(0,0,0,0)`
}))

const ActiveAlert = () => {

    const {activeAlertId} = useParams();
    const [local, setLocal] = useState(false);

    const alert = active_alerts[activeAlertId];

    return (
        <>
            <Hr />

            <Typography
                variant='body1'
                sx={{
                    my:2,
                }}
            >
                {`You ${active_alerts[activeAlertId].active ? 'will' : `won't`} receive ${active_alerts[activeAlertId].description}.`}
            </Typography>

            <Box
                sx={{
                    display:'flex',
                    padding:0,
                    borderRadius:32,
                    boxShadow:4,
                    width:'fit-content',
                }}
            >
                <ToggleButton
                    isActive={active_alerts[activeAlertId].active}
                    onClick={() => {
                        active_alerts[activeAlertId].active = true
                        setLocal(true);
                    }}
                >
                    Turn On
                </ToggleButton>
                <ToggleButton
                    isActive={!active_alerts[activeAlertId].active}
                    onClick={() => {
                        active_alerts[activeAlertId].active = false
                        setLocal(false);
                    }}
                >
                    Turn Off
                </ToggleButton>
            </Box>
        </>
    )
}

export default ActiveAlert;