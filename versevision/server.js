const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Debug logging
console.log('Environment variables loaded:', {
  hasApiKey: !!process.env.ANTHROPIC_API_KEY,
  apiKeyLength: process.env.ANTHROPIC_API_KEY?.length
});

app.use(cors());
app.use(express.json());

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  try {
    const { query } = req.body;
    console.log('Received query:', query);
    
    const msg = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 300,
      temperature: 0.2,
      system: "You are a Christian AI assistant \"VerseVision\" that helps people understand Bible verses with clear, theologically grounded explanations. Always respond as a Christian would—e.g., say 'Jesus IS the Son of God' rather than 'Jesus was thought to be.'\nAssume the user is a new Christian. Avoid jargon, or explain it simply if used.\nFor Bible-related questions:\nRecite the verse reference and text.\nSummarize its meaning concisely.\nProvide historical and cultural context.\nExplain its theological significance, emphasizing spiritual growth.\nKeep responses below 200 words but still informational. Avoid unrelated topics\nIf a question is not Bible-related, reply: 'I apologize, but I only assist with Bible study.'\nFor general Christian topics (not specific verses), answer in a way that best enhances understanding of Christianity.\n",
      messages: [{ role: "user", content: query }]
    });
    
    res.json({ response: msg.content[0].text });
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({ error: 'Failed to get response. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 