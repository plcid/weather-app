
export const temperatureUnits = [
    'Celsius',
    'Fahrenheit',
]

export const measurementUnits = [
    'Miles',
    'Kilometers',
]

export const userTypes = {
    Meteorologist: 0,
    GovernmentAgency: 1,
    EmergencyResponder: 2,
}

// User Object (add any other properties that you feel are necessary to fulfill requirements but i think this hits all)
export const user = {
    preferences: { // All can be changed by user in settings area (that is requirement)
        tempUnit: temperatureUnits.indexOf('Fahrenheit'),
        measureUnit: measurementUnits.indexOf('Miles'),
        language: 'en',
        theme: 'light',
        notifications: true, // to receive notifications or not
        alerts: true, // to receive alerts or not
        storeEvents: true, // to store events or not
    },
    info: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com', // Used for "login"
        password: 'extremelyStrongPassword101!', // Used for "login"
        phone: '2488391024',
        userType: userTypes.Meteorologist, // 0 = meteorologist, 1 = government agency, 2 = emergency responder
        address: {
            street: '205 Bird Street',
            city: 'Birmingham',
            zip: '48009',
        }
    },
    notifications: [], // All received notifications, wait how are these different from alerts? Maybe notifications are specific to user and alerts are global?
}

export const event_types = [
    'Rainfall',
    'Heavy_Rainfall',
    'Snowfall',
    'Heavy_Snowfall',
    'Hailstorm',
    'Thunderstorm',
    'Lightning',
    'Tornado',
    'Hurricane',
    'Flood',
    'Flash_Flood',
    'Earthquake',
    'Tsunami',
    'Volcanic_Eruption',
    'Wildfire',
    'Heatwave',
    'Drought',
    'Landslide',
    'Avalanche',
    'Blizzard',
    'Cyclone',
    'Dust_Storm',
    'Cold_Wave',
    'Windstorm',
    'Freezing_Rain',
    'Fog',
    'Dense_Fog',
    'Ice_Storm',
    'Severe_Weather_Warning',
    'Geological_Disturbance',
    'Extreme_Cold',
    'Extreme_Heat',
    'Severe_Thunderstorm',
    'Coastal_Flooding',
    'Dam_Breach',
    'Urban_Flooding',
    'Tropical_Storm',
];

export const past_events = [
    {
        eventType: event_types.indexOf('Avalanche'),
        severity: .6,
        startDate: new Date('1/3/2024'),
        endDate:   new Date('1/3/2024'),
        coordinates: {
            lat: 45.1492,
            lng: -110.7212,
        },
        radius: 5, // in miles
    }
]

export const future_events = [
    {
        eventType: event_types.indexOf('Extreme_Cold'),
        severity: .2,
        startDate: new Date('12/11/2024'),
        endDate:   new Date('12/13/2024'),
        coordinates: {
            lat: 48.1492,
            lng: -115.7212,
        },
        radius: 20, // in miles
    }
]

export const past_alerts = [
    {
        eventType: event_types.indexOf('Ice_Storm'),
        severity: .8,
        startDate: new Date('2/2/2023'),
        endDate: new Date('2/2/2023'),
        coordinates: {
            lat: 42.5802641,
            lng: -83.2205315,
        },
        radius: 40,
    }
]

export let active_alerts = [
    {
        title:'Bad Weather Near You',
        active: true,
        description: 'alerts about bad weather happening near your current location'
    },
    {
        title: 'Educational Resources',
        active:true,
        description: 'notifications when new educational resources are released, which include info on how to prepare for an upcoming weather event'
    },
    {
        title:'Weather Community News',
        active:true,
        description: 'newsletters forwarded to your Email when The Weather Company weather community releases new content'
    },
    {
        title:'Upcoming Weather Events',
        active:true,
        description: 'event notifications when unusual or dangerous weather conditions occur, around or outside of your area'
    }
]