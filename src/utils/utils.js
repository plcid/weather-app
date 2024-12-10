
export const getSeverityColor = (severity) => {
    if (severity > .75) {
        return '#ff3333'
    }
    if (severity > .50) {
        return '#ffcc00'
    }
    if (severity > .25) {
        return '#ff9966'
    }
    if (severity >= .10) {
        return '#99cc33'
    }
    return '#339900'
}

export const getSeverityAdjective = (severity) => {
    if (severity > .75) {
        return 'Extremely Dangerous'
    }
    if (severity > .50) {
        return 'Dangerous'
    }
    if (severity > .25) {
        return 'Potentially Harmful'
    }
    if (severity > .10) {
        return 'Mild'
    }
    return 'Safe'
}

export const formatDetailedDate = (date) => {
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long', // Full day name (e.g., Monday)
        month: 'short',  // Abbreviated month name (e.g., Jan, Feb)
        day: 'numeric',  // Day of the month (e.g., 1, 2, 3)
        year: 'numeric'  // Full year (e.g., 2024)
    });
    return formattedDate;
}

export const differenceBetweenDays = (date1, date2) => {
    const timeDiff = Math.abs(date2 - date1); // Get the absolute difference in milliseconds
    const dayDiff = timeDiff / (1000 * 60 * 60 * 24); // Convert milliseconds to days
    return dayDiff;
}