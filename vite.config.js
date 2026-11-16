import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        define: {
            "process.env.OPENAI_API_KEY": JSON.stringify(env.OPENAI_API_KEY),
            "process.env.OPENAI_MODEL": JSON.stringify(env.OPENAI_MODEL),
            "process.env.OPENWEATHER_API_KEY": JSON.stringify(env.OPENWEATHER_API_KEY),
        },
    };
});
