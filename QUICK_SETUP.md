# 🚀 Quick Setup Instructions

## Step 1: Copy the .env file
Copy .env.example to .env:
```
Copy-Item .env.example .env
```

## Step 2: Get your FREE API keys

### 🤗 Hugging Face (RECOMMENDED)
1. Go to: https://huggingface.co
2. Sign up (completely free)
3. Go to: https://huggingface.co/settings/tokens
4. Create new token
5. Copy and paste into .env file

### 🚀 Google Gemini
1. Go to: https://makersuite.google.com
2. Sign in with Google
3. Get API key
4. Copy and paste into .env file

### 🔥 Cohere
1. Go to: https://dashboard.cohere.ai
2. Sign up
3. Get API key from dashboard
4. Copy and paste into .env file

## Step 3: Restart the dev server
After adding your keys, restart:
```
npm run dev
```

## 🎉 That's it!
Your AI chat will now use the real APIs for much better conversations! 