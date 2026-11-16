export async function getCurrentWeather({ location }) {
    const weather = {
        location,
        temperature: "75",
        forecast: "sunny",
    };
    return JSON.stringify(weather);
}

export async function getLocation() {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const text = await response.json();
        return JSON.stringify(text);
    } catch (err) {
        console.log(err);
    }
}

export const tools = [
    {
        type: "function",
        function: {
            function: getCurrentWeather,
            parse: JSON.parse,
            description: "Get the current weather",
            parameters: {
                type: "object",
                properties: {
                    location: {
                        type: "string",
                        description: "The location from where to get the weather",
                    },
                },
                required: ["location"],
            },
        },
    },
    {
        type: "function",
        function: {
            function: getLocation,
            description: "Get the user's current location",
            parameters: {
                type: "object",
                properties: {},
            },
        },
    },
];
