import { OpenAIApi, Configuration } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// /api/completion
export async function POST(req: Request) {
  const { prompt } = await req.json();
  console.log("Shortcut Used");

  // Use the user's input directly as the prompt for the AI
  const fullPrompt = `
You are a helpful AI embedded in a notion text editor app that is used to autocomplete sentences.
The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
AI is a well-behaved and well-mannered individual.
AI is always friendly, kind, and inspiring, and eager to provide vivid and thoughtful responses to the user.

Help me complete my train of thought here: ##${prompt}##
Keep the tone of the text consistent with the rest of the text.
Keep the response short and sweet.
`;

  console.log("AI SUGGESTION CALLED");

  const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: fullPrompt,
      parameters: {
        temperature: 0.7,
        max_length: 100,
      },
    }),
  });

  if (!response.ok) {
    console.error("Hugging Face error:", await response.text());
    return new Response("Failed to generate completion", { status: 500 });
  }

  const data = await response.json();
  console.log(data);
  const completion = data[0]?.generated_text?.trim() || "";

  return new Response(completion, {
    headers: { "Content-Type": "text/plain" },
  });
}