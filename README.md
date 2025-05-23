# EduLingual

## Live Demo

You can try the live version of the platform by clicking [here](https://v0-multilingual-ed-tech-design-khaki.vercel.app/).

 # 🌐 Multilingual EdTech Platform

A fully responsive and interactive web application designed to provide **text-based educational content** in various Indian regional languages. The platform offers categories like tech tutorials, logical reasoning, innovation projects, and more. Built using **Next.js**, **Tailwind CSS**, and modern web technologies with full support for multilingual UI, note-taking, progress tracking, and community features.

---

## ✨ Features

### 🔐 Authentication
- Secure login/signup with email and Google
<!-- - Dummy login: `user@example.com / demo1234` -->
- Language selection during signup and from profile

### 🧑‍💼 Profile Management
- Upload profile picture
- Change name, password, and preferred language
- View saved notes and progress tracking

### 🏠 Home Page
- Hero banner: “Learn. Innovate. Grow — in your own language.”
- Smart search and language dropdown
- Featured content, categories, and call-to-action buttons

### 🧠 Regional Language Support
- Full manual translation support for:
  - Hindi, Tamil, Telugu, Marathi, Gujarati, Bengali, Kannada, Malayalam, Urdu
- All UI and content adapt based on selected language

### 📝 Text-Based Learning
- Articles, tutorials, logical challenges, career tips
- Features:
  - “Take Notes” editor
  - “Listen to this” (TTS)
  - Download transcript
  - Social sharing (WhatsApp, Telegram, LinkedIn, X, Facebook)

### ✍️ Notes System
- Create/Edit/Delete notes per content
- Auto-save, download as PDF
- Linked to content title

### 📈 Progress Tracking
- Visual progress indicators
- Topic/category-wise completion
- Resume button, weekly streaks & badges

### 💬 Multilingual Chatbot
- Floating chatbot for content help & navigation
- Responds in selected language

### 📤 Upload Section
- Contributors can upload text-based content
- Add title, language, description, and translations
- Preview and earn points after approval

### 📚 Dummy Content
- Preloaded articles for testing:
  - Tech Tutorials
  - Logic Challenges
  - Innovation
  - Career Guidance

### 🧾 Quizzes & Challenges
- Daily and topic-based text quizzes
- Timer, practice mode, leaderboard by language

### 📱 Responsive Design
- Works perfectly across devices: Desktop, Tablet, Mobile
- Adaptive layouts and components

---

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language Support**: Manual multilingual content
- **Authentication**: Firebase Auth / NextAuth
- **Icons**: Lucide
- **Charts**: Recharts
- **PDF/Notes**: html2pdf, localStorage
- **TTS**: Bhashini (planned)

---

## 📦 Installation & Running Locally

### Prerequisites
- Node.js ≥ 18.x
- npm or pnpm

### Steps

```bash
git clone https://github.com/your-username/edtech-platform.git
cd edtech-platform
npm install
npm run dev
