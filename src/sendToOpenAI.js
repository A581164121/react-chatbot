// src/sendToOpenAI.js
import axios from 'axios';

export const sendToOpenAI = async (userMessage) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',  // Or 'gpt-3.5-turbo' if you are on the free tier
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
        },
      }
    );
    return response.data.choices[0].message.content; // Return the response from the model
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return 'Sorry, something went wrong.'; // Return a fallback message in case of an error
  }
};
