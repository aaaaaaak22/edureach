# 🎓 EduReach

> **An AI-powered college intelligence and student support platform built with React, Node.js, MongoDB, Gemini, LangChain, RAG, and Vapi.**

EduReach is a full-stack web application designed to provide students with a centralized platform for accessing college information, discovering mentors and opportunities, interacting with an AI-powered college counselor, and receiving personalized assistance through both **text and voice**.

The platform combines a modern React frontend with a Node.js/Express backend, MongoDB, **Retrieval-Augmented Generation (RAG)**, Google Gemini, LangChain, and Vapi voice AI.

---

## ✨ Key Features

### 🤖 AI College Counselor

EduReach includes an AI-powered college counselor that can answer student questions using information from the application's knowledge base.

The AI system uses:

* Google Gemini
* LangChain
* Retrieval-Augmented Generation (RAG)
* Google Gemini embeddings
* MongoDB Atlas Vector Search

Instead of relying only on the model's general knowledge, the system retrieves relevant information from the EduReach knowledge base before generating a response.

### 🧠 RAG-Based Knowledge Retrieval

The knowledge-base pipeline works approximately as follows:

```text
Knowledge Base
      │
      ▼
   Text Loader
      │
      ▼
Text Chunking
      │
      ▼
Gemini Embeddings
      │
      ▼
MongoDB Atlas Vector Store
      │
      ▼
Similarity Search
      │
      ▼
Relevant Context
      │
      ▼
LangChain Agent
      │
      ▼
Google Gemini
      │
      ▼
AI Response
```

This allows EduReach to provide responses grounded in the information available to the application.

---

## 📞 AI Voice Counselor

EduReach also integrates **Vapi** to provide voice-based interaction.

Students can initiate a call through the application, which communicates with the backend and uses Vapi to create an AI-powered voice interaction.

```text
Student
   │
   ▼
React Call Interface
   │
   ▼
Express API
   │
   ▼
Vapi API
   │
   ▼
AI Voice Assistant
   │
   ▼
Student Phone
```

This provides students with an alternative to text-based AI assistance.

---

## 🔐 Authentication

The application includes user authentication with:

* User registration
* User login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Authentication middleware

The frontend maintains authentication state through the application's authentication context.

---

## 🎓 Student Features

EduReach provides multiple sections designed around the student experience:

* 🏠 College information
* 📚 Courses
* 👨‍🏫 Mentors
* 🏆 Achievements
* 📅 Events
* 🌱 Student life
* 💬 AI chat
* 👩‍💼 Counselor support
* 📞 AI voice assistance

---

# 🛠️ Technology Stack

## Frontend

| Technology      | Purpose                   |
| --------------- | ------------------------- |
| React           | UI development            |
| TypeScript      | Type safety               |
| Vite            | Development/build tooling |
| React Router    | Client-side routing       |
| Tailwind CSS    | Styling                   |
| Axios           | API communication         |
| Lucide React    | Icons                     |
| React Hot Toast | Notifications             |
| Vapi Web SDK    | Voice interaction         |

## Backend

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | Runtime               |
| Express    | REST API              |
| TypeScript | Type-safe backend     |
| MongoDB    | Database              |
| Mongoose   | MongoDB ODM           |
| JWT        | Authentication        |
| bcryptjs   | Password hashing      |
| CORS       | Cross-origin requests |

## AI / RAG

| Technology                  | Purpose              |
| --------------------------- | -------------------- |
| Google Gemini               | LLM                  |
| Google Gemini Embeddings    | Text embeddings      |
| LangChain                   | AI/RAG orchestration |
| MongoDB Atlas Vector Search | Vector retrieval     |
| Vapi                        | AI voice calls       |

---

# 🏗️ System Architecture

```text
                         ┌──────────────────┐
                         │     EduReach     │
                         └────────┬─────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
             ┌──────▼──────┐             ┌──────▼──────┐
             │   Frontend  │             │   Backend   │
             │ React + TS  │◄───────────►│ Node/Express│
             │    Vite     │    REST     │ TypeScript  │
             └──────┬──────┘             └──────┬──────┘
                    │                           │
                    │                    ┌──────▼──────┐
                    │                    │   MongoDB   │
                    │                    │   Mongoose  │
                    │                    └──────┬──────┘
                    │                           │
                    │              ┌────────────┴────────────┐
                    │              │                         │
                    │       ┌──────▼──────┐           ┌──────▼──────┐
                    │       │ RAG / AI    │           │    Vapi     │
                    │       │ LangChain   │           │ Voice AI    │
                    │       │ Gemini      │           └─────────────┘
                    │       └──────┬──────┘
                    │              │
                    │       ┌──────▼─────────────┐
                    │       │ MongoDB Atlas      │
                    │       │ Vector Search      │
                    │       └────────────────────┘
```

---

# 📁 Project Structure

```text
edureach/
│
├── client/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatDrawer
│   │   │   ├── FloatingChat
│   │   │   ├── Navbar
│   │   │   ├── CallPopup
│   │   │   └── ...
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage
│   │   │   ├── Login
│   │   │   ├── Signup
│   │   │   └── ...
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext
│   │   │
│   │   ├── services/
│   │   │   └── API services
│   │   │
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── server/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │
│   │   ├── controllers/
│   │   │
│   │   ├── middleware/
│   │   │
│   │   ├── models/
│   │   │
│   │   ├── routes/
│   │   │
│   │   ├── services/
│   │   │
│   │   ├── utils/
│   │   │
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# 🔄 AI Chat Flow

When a student asks the AI counselor a question:

```text
Student Question
       │
       ▼
React Chat Interface
       │
       ▼
Backend Chat API
       │
       ▼
LangChain
       │
       ▼
Vector Search
       │
       ▼
Retrieve Relevant Documents
       │
       ▼
Gemini
       │
       ▼
Generated Answer
       │
       ▼
React Chat Interface
```

This architecture follows the **Retrieval-Augmented Generation** approach.

---

# 🔎 Why RAG?

A traditional LLM can answer general questions, but it may not know the specific information contained in a college's internal knowledge base.

EduReach solves this by retrieving relevant information first.

### Without RAG

```text
Question → LLM → Answer
```

### With RAG

```text
Question
   ↓
Search Knowledge Base
   ↓
Retrieve Relevant Information
   ↓
LLM + Retrieved Context
   ↓
Grounded Answer
```

This makes the AI counselor more useful for domain-specific college information.

---

# 🚀 Getting Started

## Prerequisites

Install the following before running the project:

* Node.js
* npm
* MongoDB / MongoDB Atlas
* Google Gemini API access
* Vapi account/API access

---

## 1. Clone the Repository

```bash
git clone https://github.com/aaaaaaak22/edureach.git
cd edureach
```

---

# 💻 Frontend Setup

Move into the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server will provide the frontend URL in the terminal.

---

# ⚙️ Backend Setup

Open another terminal and move into the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file according to the environment variables required by the backend.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_API_KEY=your_google_api_key

VAPI_API_KEY=your_vapi_api_key
```

> Use the exact environment-variable names expected by the source code when configuring your local environment.

Start the development server:

```bash
npm run dev
```

---

# 🗄️ MongoDB Atlas Vector Search

The AI system uses MongoDB not only for application data but also for vector-based retrieval.

The RAG pipeline stores embeddings and performs similarity searches against the knowledge base.

You need to configure the required **MongoDB Atlas Vector Search index** before the RAG functionality can work correctly.

---

# 🧠 Knowledge Base

EduReach uses a dedicated knowledge-base document as the source for its RAG system.

The processing pipeline includes:

```text
Knowledge Base
      ↓
Load Documents
      ↓
Split Into Chunks
      ↓
Generate Embeddings
      ↓
Store Vectors
      ↓
Vector Similarity Search
```

When a user asks a question, the most relevant chunks are retrieved and supplied to the AI model.

---

# 🔑 Environment Variables

Keep API keys and secrets outside the source code.

Typical configuration includes:

| Variable      | Description             |
| ------------- | ----------------------- |
| `PORT`        | Backend server port     |
| `MONGODB_URI` | MongoDB connection      |
| `JWT_SECRET`  | JWT signing secret      |
| Google AI key | Gemini/embedding access |
| Vapi key      | Vapi API access         |

**Never commit real API keys, database credentials, or JWT secrets to GitHub.**

---

# 🔒 Security

The application implements several security mechanisms:

* JWT authentication
* Password hashing
* Protected backend routes
* Authentication middleware
* Environment-based secrets
* CORS configuration

For production deployment, additional security hardening should be applied, including secure cookies/token handling, rate limiting, validation, logging, and production CORS configuration.

---

# 🎯 Project Objective

EduReach aims to create a single platform where students can:

* Discover college resources
* Explore courses
* Find mentors
* Learn about achievements and events
* Ask questions through an AI counselor
* Communicate through chat
* Interact with an AI voice assistant

The combination of **RAG + Gemini + MongoDB Vector Search + Vapi** makes the project more than a conventional CRUD-based college portal.

---

# 🚧 Future Improvements

Potential improvements include:

* 📊 Student analytics dashboard
* 🎯 Personalized learning recommendations
* 🤖 More advanced AI counseling
* 📚 Expanded knowledge base
* 👥 Real-time student communities
* 🔔 Notifications
* 📱 Mobile application
* 🎥 Video counseling
* 🏫 College administration dashboard
* 📈 Career recommendation features
* ☁️ Cloud deployment and CI/CD
* 🛡️ Advanced API security and monitoring

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add your feature"
```

5. Push the branch

```bash
git push origin feature/your-feature
```

6. Create a Pull Request

---

# 👨‍💻 Author

### ADARI KARTHIK

GitHub: **[@aaaaaaak22](https://github.com/aaaaaaak22)**

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📌 EduReach

**Connecting students with information, guidance, mentors, and AI-powered assistance.**

> 🎓 **Learn. Connect. Ask. Grow.**
