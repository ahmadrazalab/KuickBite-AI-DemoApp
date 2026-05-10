# Project Name: KuickBite AI

> Goal:
This is a DevOps + AI platform landing page. The design should be minimal, fast, and professional — not flashy or over-designed.

Requirements:

1. Structure:
- Navbar (logo: KuickBite AI + simple nav links like Home, Features, Docs, Login)
- Hero Section
- Features Section
- Architecture Highlight Section
- Call-to-Action Section
- Footer

2. Hero Section:
- Strong headline: "Build, Deploy, and Scale AI Systems on AWS"
- Subtext explaining it's a production-grade AI platform
- CTA button: "Get Started"
- Clean layout (text left, visual/box right)

3. Features Section (3–4 cards):
- AI Chat
- Image Generation
- Token-based usage system
- Scalable Infrastructure (AWS + Kubernetes)

4. Architecture Section:
- Show simple flow:
  Frontend → Backend → Database → AI Services
- Use clean boxes or simple visual styling (no images required)

5. Design Constraints:
- Dark theme (black/dark blue background)
- Accent colors: yellow + purple (for highlights)
- Use modern font styling (system fonts only)
- Good spacing, padding, and alignment
- Mobile responsive (use flexbox/grid)

6. Footer:
- Simple footer with:
  KuickBite AI
  GitHub / LinkedIn placeholders

7. Code Quality:
- Well-structured HTML
- Clean CSS (prefer separate style block or file)
- Use reusable classes
- No inline styles

Output:
- Provide complete HTML + CSS code in one file
- No explanations, only code




---


Improve the UI spacing, typography, and visual hierarchy.
Make it look more premium and less generic.
Keep it minimal and production-ready.




## frontend Prompt 

This the the frontend and build this frontend in the frontend Folder : @contextScopeItemMention 
```
Create a modern ChatGPT/Gemini style AI chat frontend using React.

Requirements:
- Use React with functional components
- Clean folder structure
- Dark theme UI
- Responsive layout
- Left sidebar for chat history
- Main chat window
- User messages on right
- AI messages on left
- Input box fixed at bottom
- Smooth scrolling
- Loading animation while AI responds
- Simple clean UI like ChatGPT/Gemini

Pages/components required:
- ChatLayout
- Sidebar
- ChatWindow
- MessageBubble
- ChatInput

Project structure should be production friendly.
and this will connect to backend so use .env for api base url 
```

# Backend Prompt : 

Create a Node.js Express backend for an AI chat application.

Requirements:
- Use Express.js
- Clean scalable folder structure
- Create API endpoint:
  POST /api/chat

Request body:
{
  "message": "Hello"
}

Response:
{
  "reply": "AI response here"
}

Features:
- Separate routes/controllers
- Middleware support
- CORS enabled 
- Environment variable support
- Error handling middleware
- Health endpoint:
  GET /health
- And For Chatting will gemini api key in the .env for chatting and will use gemini free flash model.
Project structure should be production-ready.



# GEmini API CURL REQ : 


curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'