import { useParams } from "react-router-dom"
import { Hr } from "./common";
import { future_events, past_events } from "../const";
import { Typography } from "@mui/material";
import { differenceBetweenDays, formatDetailedDate, getSeverityAdjective, getSeverityColor } from "../utils/utils";
import WeatherEventMap from "./weatherEventMap";

const Event = () => {
    const {pastEventId, futureEventId} = useParams();

    const event = pastEventId ? past_events[pastEventId] : future_events[futureEventId];

    return (<>
        <Hr />

        <Typography
            variant="h5"
            sx={{
                mt:2,
            }}
        >
            <span style={{textDecoration:'underline'}}>Event Severity:</span> <span style={{color:getSeverityColor(event.severity)}}>{event.severity.toFixed(2)} / 1.00 ({getSeverityAdjective(event.severity)})</span>
        </Typography>

        <Typography
            variant="h5"
            sx={{
                mt:2,
            }}
        >
            <span style={{textDecoration:'underline'}}>Event Date(s):</span> {`${formatDetailedDate(event.startDate)}  ${event.startDate.toDateString() == event.endDate.toDateString() ? `` : 'to ' + formatDetailedDate(event.endDate)} (${differenceBetweenDays(event.startDate, event.endDate) + 1} day${differenceBetweenDays(event.startDate, event.endDate) ? 's' : ''})`}
        </Typography>

        <Typography
            variant="h6"
            sx={{
                mt:5,
                textDecoration:'underline',
            }}
        >
            View on Map
        </Typography>
        <WeatherEventMap
            data={event}
        />

    </>)
}

export default Event