const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


app.post('/generate-exam', async (req, res) => {
  
  const { topic, numQuestions, includeAnswers } = req.body;

  
  if (!topic || !numQuestions) {
    return res.status(400).json({ error: 'Topic and number of questions are required.' });
  }

  try {
   
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    
    let prompt;
    if (includeAnswers) {
      prompt = `Generate a math exam for a primary school student with exactly ${numQuestions} questions on the topic of "${topic}". Provide the questions followed by a separate section labeled "Answer Key". For each question, provide the correct answer. The format should be clear and easy to read.`;
    } else {
      prompt = `Generate a math exam for a primary school student with exactly ${numQuestions} questions on the topic of "${topic}". Provide only the questions, without any answers or extra text. Format the output as a numbered list.`;
    }

    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

   
    res.json({ questions: text });

  } catch (error) {
    console.error('Error generating exam:', error);
    res.status(500).json({ error: 'Failed to generate exam. Please try again.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
