
const temperatureUnits = {
    Celsius: 0,
    Fahrenheit: 1,
}

const userTypes = {
    Meteorologist: 0,
    GovernmentAgency: 1,
    EmergencyResponder: 2,
}

// User Object (add any other properties that you feel are necessary to fulfill requirements but i think this hits all)
const user = {
    preferences: { // All can be changed by user in settings area (that is requirement)
        tempUnit: temperatureUnits.Fahrenheit,
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
    alerts: [], // All received alerts
    events: [], // All events, differentiate between past & current by date, put in different areas of UI
}