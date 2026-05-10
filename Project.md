# KuickBite AI Chat Application Documentation

Welcome to the full-stack AI chat platform project! This document provides a complete architectural overview and step-by-step guide to getting the application running locally on your machine.

---

## 📚 Table of Contents
1. [Project Overview](#project-overview)
2. [System Requirements](#system-requirements)
3. [Project Structure](#project-structure)
4. [Backend Setup Guide](#backend-setup-guide)
5. [Frontend Setup Guide](#frontend-setup-guide)
6. [Environment Configuration](#environment-configuration)
7. [Connection & Networking Logic](#connection--networking-logic)
8. [Troubleshooting](#troubleshooting)

---

## 1. Project Overview

This application is a modern ChatGPT-style conversational platform utilizing modern software paradigms:
- **Backend**: Node.js & Express.js serving as a secure API proxy layer.
- **Frontend**: React via Vite utilizing Vanilla CSS for styling and Axios for stateful API communications.
- **AI Brain**: Integrated with Google's `gemini-flash-latest` generative model for speed and intelligence.

---

## 2. System Requirements

Before running this software, guarantee your system fulfills the following binaries:

| Requirement | Recommended Version | Command to Check |
|-------------|---------------------|------------------|
| Node.js     | `v18.x` or higher   | `node -v`        |
| NPM / Node Package Manager | `v9.x` or higher    | `npm -v`         |
| OS          | Windows, MacOS, Linux | N/A              |

*Note: Tested and optimized heavily for Node v20+ environment.*

---

## 3. Project Structure

The repository is organized logically into two distinct root workspaces:

```text
KuickBite.Project/
├── Backend/                # Express Proxy Server
│   ├── src/
│   │   ├── config/         # Gemini API Initialization
│   │   ├── controllers/    # Logic Handlers
│   │   ├── middleware/     # Errors & Global Middleware
│   │   └── routes/         # Express Routes Configuration
│   ├── .env.example        # Secrets Template
│   └── package.json
│
├── Frontend/               # React GUI
│   ├── src/
│   │   ├── components/     # Reusable JSX Structures
│   │   ├── assets/         # SVGs, static visuals
│   │   └── index.css       # Core Theme Engine
│   ├── .env                # UI Environment Bindings
│   └── package.json
```

---

## 4. Backend Setup Guide

The backend utilizes an event-driven non-blocking system. It performs filtering, logging, and interacts natively with the external Google SDK on behalf of the client browser.

### Installation Steps:

1. Open a terminal and navigate to backend directory:
   ```bash
   cd Backend
   ```

2. Install NPM dependencies:
   ```bash
   npm install
   ```

3. Prepare local runtime environment by creating `.env` copied from template:
   ```bash
   cp .env.example .env
   ```

### Execution Commands:

- **Development Mode (Hot reloading):**
  ```bash
  npm run dev
  ```
- **Standard Run Mode:**
  ```bash
  npm run start
  ```

You will verify backend existence via: `http://localhost:5000/health`

---

## 5. Frontend Setup Guide

Crafted using the lightning-fast build-tool Vite, delivering optimal rendering speeds for client browsing experiences.

### Installation Steps:

1. Open a parallel terminal tab and navigate into front-end space:
   ```bash
   cd Frontend
   ```

2. Download and bootstrap node packages:
   ```bash
   npm install
   ```

### Execution Commands:

- **Local UI Development Run:**
  ```bash
  npm run dev
  ```
  *Wait for terminal feedback, which reveals your port (typically `http://localhost:5173`).*

- **Build for Production Compilation:**
  ```bash
  npm run build
  ```

---

## 6. Environment Configuration

Critical functionality relies firmly on environment definitions stored safely outside source control repositories.

### Backend Configuration (`/Backend/.env`)
You will spot a setting mapped as follows:
```bash
PORT=5000
GEMINI_API_KEY=INSERT_YOUR_GOOGLE_AI_KEY_HERE
```
👉 Obtain a free experimental key at: [Google AI Studio Key Management](https://aistudio.google.com/app/apikey)

### Frontend Configuration (`/Frontend/.env`)
Vite looks for custom variable syntax starting specifically with `VITE_`:
```bash
VITE_API_URL=http://localhost:5000
```

---

## 7. Connection & Networking Logic

The two tiers connect through standard Hyper-Text Transfer Protocol over synchronous network payloads.

### Flow Diagram

```text
[ Browser Input ] 
       ↓
[ React UI Component ]
       ↓
[ Axios .post() Request sends to http://localhost:5000/api/chat ]
       ↓
[ Express Router (/src/routes) ]
       ↓
[ Express Controller checks validation ]
       ↓
[ Google SDK Call to Gemini-1.5-Flash over Secure TLS ]
       ↓
[ Gemini generates response string ]
       ↓
[ Express transmits JSON back to browser { "reply": "..." } ]
       ↓
[ React sets state & re-renders DOM ]
```

### CORS Details:
Because your frontend runs on one local port (5173) and your backend processes operations on another port (5000), modern browsers trigger Cross-Origin Resource Sharing validation mechanisms. We installed the `cors` package server-side in `index.js` to permit and unlock browser communications automatically.

---

## 8. Core Modules Breakdown

### Styling Palette
Located completely in `Frontend/src/index.css`.
- Theme: Dark/Carbon High-Contrast palette.
- Typography Stack: `Inter` variable font coupled with monospace `Fira Code` for coding blocks.

### Messaging Engine
Driven by `ChatLayout.jsx` Hook states.
- Maintains an `Array` of objects comprising `role` (User/AI) and `content` strings.
- On transmission, renders simulated loaders directly inside visual arrays to yield high perceptual fluidity before replacement by server streams.

### Resilience
A specific centralized catch-all routine is found under `/Backend/src/middleware/errorHandler.js` that forces standardized JSON return objects for runtime errors preventing crash iterations on wrong input payloads.

---

## 9. Troubleshooting

**Q: API connection timed out?**
Ensure both terminal instances remain alive concurrently. Backend must possess a visible listening socket `🚀 Server actively listening on port 5000` for front end requests to hit cleanly.

**Q: AI replies "Missing API Key"?**
The Node.js execution engine reads disk files on boot. If you edited `.env` AFTER starting the server, terminate process (`CTRL+C`) and run `npm run dev` once more to trigger fresh initialization reads.

**Q: Layout looks broken on mobile devices?**
We employ specific CSS `@media (max-width: 768px)` selectors. While highly responsive, minimizing the sidebar is automatic on compact viewport triggers to optimize center chat space.

---
