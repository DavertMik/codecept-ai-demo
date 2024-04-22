const OpenAI = require('openai');
const Anthropic = require('@anthropic-ai/sdk');
const Groq = require("groq-sdk");

require('dotenv').config({ path: '.env' });

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] })

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

require('./heal_recipes');

exports.config = {
  tests: "./tests/**_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "",
      show: false,
      windowSize: "1200x900",
      browser: "chromium",
      waitForNavigation: "domcontentloaded",
    }
  },
  include: {},

  ai: {

  // request: async (messages) => {
  //   const completion = await openai.chat.completions.create({
  //     model: 'gpt-3.5-turbo-0125',
  //     messages,
  //   });
  //   // return only text content
  //   return completion?.choices[0]?.message?.content;
  // }

    // request: async(messages) => {
    //   const resp = await anthropic.messages.create({
    //     model: 'claude-3-haiku-20240307',
    //     max_tokens: 1024,
    //     messages
    //   });      
    //   return resp.content.map((c) => c.text).join('\n\n');
    // }


    request: async (messages) => {
      const chatCompletion = await groq.chat.completions.create({
          messages,
          model: "gemma-7b-it"    // mixtral-8x7b-32768  llama2-70b-4096 || gemma-7b-it || llama3-70b-8192 || mixtral-8x7b-32768
      });
      return chatCompletion.choices[0]?.message?.content || "";
    }
  },

  plugins: {    
    screenshotOnFail: {
      enabled: true,
    },
    heal: {
      enabled: true,
    }
  },
};

