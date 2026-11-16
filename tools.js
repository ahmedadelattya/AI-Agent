export async function getCurrentWeather({ location }) {
    try {
        const weatherUrl = new URL("https://api.openweathermap.org/data/2.5/weather");
        weatherUrl.searchParams.append("q", location);
        weatherUrl.searchParams.append("units", "imperial");
        weatherUrl.searchParams.append("appid", process.env.OPENWEATHER_API_KEY);

        const res = await fetch(weatherUrl);
        const data = await res.json();
        return JSON.stringify(data);
    } catch (err) {
        console.error(err.message);
        return JSON.stringify({ error: err.message });
    }
}

export async function getLocation() {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const text = await response.json();
        return JSON.stringify(text);
    } catch (err) {
        console.error(err.message);
        return JSON.stringify({ error: err.message });
    }
}

export const tools = [
    {
        type: "function",
        function: {
            function: getCurrentWeather,
            parse: JSON.parse,
            description: "Get the current weather for a city",
            parameters: {
                type: "object",
                properties: {
                    location: {
                        type: "string",
                        description: "The name of the city from where to get the weather",
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
            description: "Get the user's current location based on their IP address",
            parameters: {
                type: "object",
                properties: {},
            },
        },
    },
];
