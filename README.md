# 🛒 SuperMartGPT  
### AI-Powered Multilingual Retail Assistant for Local Supermarkets

SuperMartGPT is a full-stack AI prototype built to modernize **local supermarkets and confectionary stores**, especially in linguistically diverse regions like India.  
It enables customers to interact using **text or voice in multiple languages**, get **personalized product recommendations**, place orders, and allows store owners to view **sales analytics** — all powered by OpenAI and Supabase.

## 🚩 Problem Statement

Local supermarkets face multiple challenges:
- Language barriers between customers and staff  
- No digital assistant for product discovery  
- No personalized recommendations  
- No visibility into sales trends or best-selling products  
- Manual order handling causing inefficiency and lost revenue  

There is a lack of **affordable, AI-driven solutions** tailored for small and medium local stores.

## ✅ Solution Overview

**SuperMartGPT** addresses these problems by providing:
- A multilingual AI chatbot for shopping assistance  
- Voice-based product queries  
- Smart product recommendations based on store inventory  
- Shopping cart and order generation with unique Order ID  
- Admin-only sales analytics dashboard  
- Secure OTP-based user authentication  

The system is lightweight, scalable, and designed for real-world retail use.

## ✨ Key Features

### 👥 Customer Features
- Multilingual chat support (Hindi, English, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi)  
- Voice-to-text input for product queries  
- AI-powered product recommendations  
- Add / remove items from cart  
- Place orders and receive Order ID  
- Orders allowed only for logged-in users  

### 🛠 Admin Features
- Password-protected admin access  
- Sales analytics dashboard  
- Top-selling products  
- Revenue and units-sold analysis  
- Analytics generated using real orders + demo sales data  

## 🤖 OpenAI API Usage

| Task | OpenAI Model |
|----|----|
| AI chatbot & reasoning | GPT-4o-mini |
| Multilingual translation | GPT-4o-mini |
| Personalized recommendations | GPT-4o-mini |
| Sales analytics summaries | GPT-4o-mini |
| Voice-to-text input | Whisper API |

Models were chosen for **low latency, multilingual accuracy, and cost efficiency**.


## 🧱 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- Tailwind CSS

**Backend**
- Next.js API Routes (Serverless)
- OpenAI APIs

**Database & Auth**
- Supabase (PostgreSQL)
- Supabase Auth (Email OTP login)

**Deployment**
- Vercel

## 🏗 Architecture Overview

Layer,Technologies,Key Responsibilities
Frontend,"Next.js, Tailwind","Chat UI, Voice Input (Mic), Product Discovery, Admin Dashboard"
Backend,Next.js API Routes,"Translation Logic, Chat Processing, Sales Analytics, Auth Guard"
AI / Services,OpenAI (GPT-4o-mini),"Speech-to-Text (Whisper), Text Generation, Recommendations"
Database,Supabase (PostgreSQL),"User Auth (OTP), Order History, Sales Data, Product Catalog"

## 🔐 Authentication & Security

- Email OTP authentication using Supabase Auth  
- Orders restricted to authenticated users  
- Admin analytics protected via password  
- API keys stored securely in environment variables  
- No sensitive keys included in the source code  


## 🚀 Running the Project Locally

### 1️⃣ Install dependencies
```bash
npm install

2️⃣ Create .env.local
OPENAI_API_KEY=your_openai_key_here
SUPABASE_URL=your_supabase_url_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
AUTH_PASSWORD=admin20

3️⃣ Start the app
npm run dev

App runs at:
👉 http://localhost:3000

🌟 Why SuperMartGPT is Unique
Built specifically for local Indian supermarkets
Multilingual and voice-enabled shopping experience
Personalized AI recommendations
Real-time sales analytics for store owners
Lightweight, scalable, and affordable AI solution
Solves real-world retail problems, not a generic chatbot


📜 Disclaimer
This repository does not contain real API keys.
All credentials must be added via environment variables for security.


