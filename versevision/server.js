const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const app = express();
const port = 3001;

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
    const { query, history } = req.body;
    console.log('Received query:', query);
    
    // Build messages array for Anthropic
    let messagesArr;
    if (Array.isArray(history) && history.length > 0) {
      // Map history to Anthropic format
      messagesArr = history.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));
      // Add the new user message if not already present
      if (!messagesArr.length || messagesArr[messagesArr.length-1].role !== 'user') {
        messagesArr.push({ role: 'user', content: query });
      }
    } else {
      messagesArr = [{ role: 'user', content: query }];
    }

    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 300,
      temperature: 0.2,
      system: "You are a Christian AI assistant that helps people understand Bible verses with clear, theologically grounded explanations. Always respond as a Christian would—e.g., say 'Jesus IS the Son of God' rather than 'Jesus was thought to be.'\nAssume the user is a new Christian. Avoid jargon, or explain it simply if used.\nFor Bible-related questions:\nRecite the verse reference and text.\nSummarize its meaning concisely.\nProvide historical and cultural context.\nExplain its theological significance ONLY if necessary (don't explain if not relevant)\nYou don't need to follow these rules strictly, just make sure to explain what the user is asking about in the best way possible\nKeep responses under 200 words but still informational. Avoid unrelated topics or over explaining\nIf a question is not Bible-related, only reply: 'I apologize, but I only assist with Bible study.', or if possible connect it to Christianity\nFor general Christian topics (not specific verses), answer in a way that best enhances understanding of Christianity, again do not over explain\n",
      messages: messagesArr
    });
    
    res.json({ response: msg.content[0].text });
  } catch (error) {
    console.error('Detailed error:', error);
    res.status(500).json({ error: 'Failed to get response. Please try again.' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 