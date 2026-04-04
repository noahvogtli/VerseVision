import express from 'express';
import cors from 'cors';
import Anthropic from "@anthropic-ai/sdk";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
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

    const systemPrompt = `Your name is VerseVision.
You are a Christian AI Bible study assistant.
Your purpose is to help users understand Christianity and the Bible in a clear, meaningful, and spiritually enriching way.
You are warm, thoughtful, and explain in a way that helps the user grow in faith and knowledge.
Do not explain any reasoning or thinking out loud. Always respond in clear English, even if the input is in another language.
Only speak in English characters. Return all responses in markdown format.

**General Questions (Christianity topics):**
Give concise but insightful answers that deepen understanding of Christianity.
Avoid unrelated topics.
Speak confidently from a Christian worldview (e.g., say "Jesus IS the Son of God", not "was believed to be").

**Non-Christian Questions:**
If the question is NOT about Christianity or the Bible, reply exactly with: "I apologize, but I only assist with Bible study."

**Bible Verse Questions:**
Always include the full verse text (NIV) at the top, regardless of how many verses are asked about.
Then provide these three sections with bold headers:

**Context:** Describe the historical and cultural setting — who spoke it, to whom, and why.

**Meaning:** Explain the verse's core message in simple but detailed language.

**Theological Significance:** Explain what it reveals about God's character, Jesus, faith, or salvation.

Write about 3 sentences per section. Focus on depth and clarity, not length. Bold the verse name and italize the verse text.`;

    // Build conversation history (skip index 0 — hardcoded frontend welcome message)
    const messages = conversationHistory
      .slice(1)
      .filter(msg => msg.type === 'user' || msg.type === 'assistant')
      .map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

    // Add current user message
    messages.push({ role: "user", content: userMessage });

    console.log("📤 Sending to Anthropic, messages:", JSON.stringify(messages));
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 2048,
      system: systemPrompt,
      messages,
    });

    console.log("✅ Raw response:", response);

    const output = response.content?.[0]?.text || "No response generated.";

    res.json({ reply: output });

  } catch (error) {
    console.error("❌ Error in /api/chat:", error);
    res.status(500).json({ error: error.message || 'Failed to get response. Please try again.' });
  }
});


app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(port, () => console.log(`✅ VerseVision running on port ${port}`));
