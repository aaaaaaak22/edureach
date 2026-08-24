// 





import Vapi from "@vapi-ai/web";

const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;

if (!publicKey) {
  throw new Error("VITE_VAPI_PUBLIC_KEY is missing");
}

if (!assistantId) {
  throw new Error("VITE_VAPI_ASSISTANT_ID is missing");
}

export const vapi = new Vapi(publicKey);

export const startWebCall = async (
  userName?: string,
  course?: string,
  topic?: string
) => {
  await vapi.start(assistantId);

  vapi.addMessage({
    role: "system",
    content: `
Student name: ${userName || "Student"}
Interested course: ${course || "Not specified"}
Topic: ${topic || "General inquiry"}

Use this information to personalize the conversation.
`,
  });
};

export const stopWebCall = () => {
  vapi.stop();
};