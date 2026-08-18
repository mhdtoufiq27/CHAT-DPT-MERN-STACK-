# VEXIS PRO - Adaptive AI Assistant Platform 🚀

VEXIS PRO is a production-quality, full-stack MERN AI Conversational Platform designed with an adaptive workspace, real-time response engine, and realistic AI interview simulator.

---

## ✨ Features Highlight

- **🎨 Modern VEXIS PRO Two-Panel Interface**:
  - Two-panel responsive layout with collapsible/expandable sidebar and mobile drawer navigation.
  - Light, Dark, and System appearance modes with seamless theme transitions.
  - Category-based welcome screen cards (**Learn**, **Code**, **Create**, **Analyze**).

- **⚡ Production Conversational AI Engine**:
  - Real token streaming via **Server-Sent Events (SSE)**.
  - Multi-turn conversation context window with automatic conversation title generation.
  - Real `AbortController` generation cancellation ("Stop Generating").
  - Response regeneration and user message edit branching.

- **🎯 Real Interview Simulator & AI Recruiter Assessment**:
  - Fullscreen immersive Real Interview Room with 4-state visual AI avatar.
  - Human-like dynamic interviewer engine with adaptive difficulty, topic switching, and follow-up probing.
  - Detailed post-interview recruiter evaluation scorecard, role readiness %, JD requirement match, and personalized preparation plan.

- **🎙️ Introduction Coach**:
  - Dedicated self-introduction voice trainer, speech analytics, and guided intro builder.

- **🛠️ Scalable Tool / Function Calling Architecture**:
  - **Calculator Tool**: Evaluates mathematical queries safely.
  - **File Analysis Tool**: Parses text, code, JSON, CSV, and PDF file buffers.
  - **Web Search Tool**: Dedicated search layer with `🌐 Web search used` visual indicator.

- **🧠 Long-Term & Short-Term Memory System**:
  - **Long-Term Preference Memory**: Automatically extracts and persists user preferences and facts across sessions.
  - **Memory Management UI**: Dedicated Settings tab to view, delete, or clear memories transparently.
  - **Short-Term Context & Follow-ups**: Seamlessly resolves short follow-ups ("make it simpler", "give an example").

- **💻 Advanced Code Assistant Features**:
  - Full GFM Markdown rendering (`react-markdown` + `remark-gfm`).
  - Custom syntax highlighting with line numbers for Java, Python, JavaScript, TypeScript, SQL, HTML, CSS, C, C++.
  - One-click **Copy Code** and **Download Code** buttons.

- **🔊 Voice & Speech Controls**:
  - Speech-to-Text voice input using Web Speech API with permission handling and error toasts.
  - Text-to-Speech (TTS) Read Aloud with Play, Pause, Resume, and Stop controls.

- **🔒 Production Security, Authorization & Optimization**:
  - Strict user isolation enforcing ownership checks on all private resources.
  - Backend request rate limiting (max 30 requests/min).
  - Dual Persistence Architecture (MongoDB + In-Memory Fallback Map) ensuring zero application downtime.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Lucide Icons, React Markdown, Remark GFM.
- **Backend**: Node.js, Express.js, Server-Sent Events (SSE), Multer, JWT Authentication, Rate Limiting.
- **Database**: MongoDB with Mongoose Schemas & Compound Indexes.
- **AI Integration**: Google Generative AI (Gemini 1.5 Flash / Pro) with VEXIS PRO smart AI engine.

---

## 📂 Project Structure

```
vexis-pro/
├── client/                     # Vite React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── chat/          # MessageItem, ChatInput, WelcomeState
│   │   │   ├── layout/        # Header, Sidebar
│   │   │   ├── interview/     # InterviewModal, RealInterviewRoom, InterviewReport, IntroCoachModal
│   │   │   └── modals/        # SettingsModal, AuthModal, ShareModal, UpgradeModal
│   │   ├── context/           # ChatContext, AuthContext
│   │   ├── services/          # Axios API instance
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.css              # Custom CSS design tokens & prose styling
│
└── server/                     # Express Node Backend
    ├── config/                # Database connection
    ├── controllers/           # messageController, chatController, memoryController, interviewController, authController
    ├── middleware/            # authMiddleware, rateLimitMiddleware
    ├── models/                # Chat, Message, Memory, User, InterviewSession, IntroSession, Feedback
    ├── routes/                # messageRoutes, chatRoutes, memoryRoutes, modelRoutes, interviewRoutes, introRoutes, authRoutes
    ├── services/tools/        # toolDispatcher (Calculator, File Ingestion, Search)
    ├── uploads/               # File upload storage
    └── server.js              # Server entry point
```

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (Running locally on `mongodb://127.0.0.1:27017` or MongoDB Atlas URI)

### 1. Environment Setup
Copy `.env.example` in `server/` to `server/.env`:
```bash
cp server/.env.example server/.env
```

Configure `server/.env`:
```env
PORT=5000
JWT_SECRET=your_super_secret_jwt_key
MONGO_URI=mongodb://127.0.0.1:27017/chatdpt
GEMINI_API_KEY=your_gemini_api_key_here
```

### 2. Backend Server Setup
```bash
cd server
npm install
node server.js
```
*Backend runs at: `http://localhost:5000`*

### 3. Frontend Client Setup
```bash
cd client
npm install
npm run dev
```
*Frontend runs at: `http://localhost:5173`*

---

## 🧪 Production Verification & Build

To test production bundle compilation:
```bash
cd client
npm run build
```

---

## 🛡️ License & Author

Built as a production-grade AI Assistant Application.
