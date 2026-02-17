import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SERVICES } from '../constants';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "Nexus AI", the intelligent virtual assistant for Nexus Media, a premier Moroccan communication agency.
Your goal is to assist Moroccan SME owners in choosing the right digital services.

Here are the services we offer (prices in Moroccan Dirham - DH):
${SERVICES.map(s => `- ${s.title} (${s.category}): ${s.description}. Price: ${s.price}.`).join('\n')}

Guidelines:
1. Tone: Professional, enthusiastic, and concise. Friendly but business-oriented.
2. Context: You are talking to business owners. Focus on "growth", "ROI", and "professionalism".
3. Language: Respond in the language the user speaks to you (English, French, or Darija/Arabic if typed phonetically). Default to English if unsure.
4. Goal: Try to understand their business needs and recommend a specific package.
5. Call to Action: Encourage them to click the "Order Now" button or provide their WhatsApp number in the chat if they are interested.
6. Do not make up services that are not listed.
7. If asked for payment methods, mention: Bank Transfer (Virement), Wafacash, CashPlus, and Credit Card.

Keep responses relatively short (under 100 words) unless explaining a strategy.
`;

export const getChatResponseStream = async function* (message: string): AsyncGenerator<string, void, unknown> {
  try {
    if (!chatSession) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSession = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    yield "I apologize, but I'm having trouble connecting to the server right now. Please try again later.";
  }
};
