# Weather Activity Agent

An AI agent built with ReAct prompting that gets the current weather at your location and suggests localized activity ideas you can do based on the conditions.

## Goal

Build an agent that can:

- Detect your current location
- Fetch the current weather for that location
- Suggest localized activities suited to the weather and area

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the example env file and fill in your keys:

```bash
cp .env.example .env
```

3. Set the required values in `.env`:

| Variable | Required | Description |
| --- | --- | --- |
| `OPENAI_API_KEY` | Yes | Your OpenAI API key |
| `OPENAI_MODEL` | Yes | Chat model to use (default: `gpt-4o`) |
| `OPENWEATHER_API_KEY` | Yes | Free key from [OpenWeatherMap](https://openweathermap.org/api) |

4. Start the app:

```bash
npm run dev
```

Then open the local URL Vite prints in the terminal.
