import OpenAI from "openai";
import { tools } from "./tools";
import { renderNewMessage } from "./dom";

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const messages = [
    {
        role: "system",
        content: `
You are a helpful AI agent. Transform technical data into engaging, 
conversational responses, but only include the normal information a 
regular person might want unless they explicitly ask for more. Provide 
highly specific answers based on the information you're given. Prefer 
to gather information with the tools provided to you rather than 
giving basic, generic answers.
`,
    },
];

async function agent(query) {
    messages.push({ role: "user", content: query });
    renderNewMessage(query, "user");

    const runner = openai.chat.completions
        .runTools({
            model: process.env.OPENAI_MODEL,
            messages,
            tools,
        })
        .on("message", (message) => console.log(message));

    const finalContent = await runner.finalContent();
    messages.push({ role: "assistant", content: finalContent });
    renderNewMessage(finalContent, "assistant");
}

document.getElementById("form").addEventListener("submit", async function (event) {
    event.preventDefault();
    const inputElement = document.getElementById("user-input");
    inputElement.focus();
    const formData = new FormData(event.target);
    const query = formData.get("user-input");
    event.target.reset();
    await agent(query);
});
