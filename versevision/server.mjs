import express from 'express';
import cors from 'cors';
import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;
    const conversationHistory = req.body.history || [];

    if (!userMessage) {
      return res.status(400).json({ error: 'Missing message.' });
    }

    console.log("🟢 Received:", userMessage);
    console.log("📚 History length:", conversationHistory.length);

    // Build the conversation context
    const messages = [
      {
        role: "system",
        content: `Your name is VerseVision.
                  You are a Christian AI Bible study assistant.
                  Your purpose is to help users understand Christianity and the Bible in a clear, meaningful, and spiritually enriching way.
                  You are warm, thoughtful, and explain in a way that helps the user grow in faith and knowledge.
                  Do not explain any reasoning or thinking out loud. Always respond in clear English, even if the input is in another language.
                  Instructions:

                  General Questions (Christianity topics):
                  Give concise but insightful answers that deepen understanding of Christianity.
                  Avoid unrelated topics.
                  Speak confidently from a Christian worldview (e.g., say "Jesus IS the Son of God", not "was believed to be").

                  Non-Christian Questions:
                  If the question is NOT about Christianity or the Bible, reply exactly with: "I apologize, but I only assist with Bible study."

                  Bible Verse Questions:

                  If the verse is less than 2 verses, include the text (NIV).
                  Then provide the following sections:
                  Context: Describe the historical and cultural setting, including who spoke it, to whom, and why.
                  Meaning: Explain the verse's main message in simple but detailed language.
                  Theological Significance: Explain what it reveals about God's character, Jesus, faith, or salvation, when relevant.

                  Aim for a balanced explanation — more detailed than a summary, but still easy to read (around 3 sentences per section).

                  Focus on teaching and clarity, not length.`
      }
    ];

    // Add conversation history
    conversationHistory.forEach(msg => {
      messages.push({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      });
    });

    // Add current user message
    messages.push({ role: "user", content: userMessage });

    // Use the new Responses API correctly
    const response = await openai.responses.create({
      model: "gpt-5-nano",
      input: messages,
      reasoning: {effort: "minimal"}
    });

    console.log("✅ Raw response:", response);

    // Try to extract the plain text output safely
    const output = response.output_text || response.output?.[0]?.content?.[0]?.text || "No response generated.";

    res.json({ reply: output });

  } catch (error) {
    console.error("❌ Error in /api/chat:", error);
    res.status(500).json({ error: error.message || 'Failed to get response. Please try again.' });
  }
});


app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(port, () => console.log(`✅ VerseVision running on port ${port}`));