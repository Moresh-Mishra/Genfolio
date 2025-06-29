# Backend Setup

## Environment Variables

This backend requires a Groq API key to generate AI-powered "About Me" sections.

### Setting up your API key:

1. **Get a Groq API key:**
   - Visit: https://console.groq.com/keys
   - Sign up or log in to your Groq account
   - Create a new API key

2. **Configure the .env file:**
   - Open the `.env` file in the Backend directory
   - Replace `your_groq_api_key_here` with your actual API key
   - Save the file

3. **Restart the server:**
   - Stop the current server (Ctrl+C)
   - Run `npm start` again

### Example .env file:
```
GROQ_API_KEY=gsk_your_actual_api_key_here
```

## Running the server

```bash
npm start
```

The server will run on http://localhost:5000

## API Endpoints

- `POST /user` - Store user data
- `GET /user` - Retrieve user data  
- `POST /generate-about` - Generate AI-powered About Me section
- `GET /` - Health check 