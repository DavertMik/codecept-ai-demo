# CodeceptJS AI Demo

This repository follows the tutorial https://dev.to/davert/unleashing-ai-to-heal-flaky-tests-in-codeceptjs-with-playwright-10do which shows using different AI models for healing tests.

## Installation

```
git clone git@github.com:DavertMik/codecept-ai-demo.git
npm i
```

Create `.env` file. It will be used to store API keys from AI providers:

```
OPENAI_API_KEY=
CLAUDE_API_KEY=
GROQ_API_KEY=
```
## Running tests with AI

Enable one of the providers on `ai.request` secion of `codecept.conf.js` file. Set the model and run tests:

```
npx codeceptjs run --ai
```

To debug requests and responses from AI use `DEBUG="codeceptjs:*"` flag

```
DEBUG="codeceptjs:*" npx codeceptjs run --ai
```


