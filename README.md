


***

<div align="center">
  <h1>🛒 SuperMartGPT</h1>
  <p><b>AI-Powered Multilingual Retail Assistant for Local Supermarkets</b></p>
  
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
</div>

<br>

**SuperMartGPT** is a full-stack AI prototype designed to modernize local supermarkets and confectionary stores—especially in linguistically diverse regions like India. It bridges the gap between traditional retail and modern AI by enabling text/voice interactions in regional languages, generating smart product recommendations, processing orders, and delivering actionable sales analytics to store owners.

---

## 🌊 Architecture & Data Flow

```text
 ┌─────────────┐   Voice/Text    ┌───────────────┐                  ┌───────────────┐
 │  Customer   ├────────────────►│               ├─────────────────►│  OpenAI APIs  │
 │ (Web UI)    │                 │    Next.js    │ (Recs & NLP)     │ (GPT-4o-mini) │
 └──────┬──────┘                 │   App Router  │◄─────────────────┤   (Whisper)   │
        │                        │               │                  └───────────────┘
        │                        └───────┬───────┘
        │ (OTP Login)                    │ (Orders & Analytics)
        ▼                                ▼
 ┌─────────────┐                 ┌───────────────┐                  ┌───────────────┐
 │ Supabase    │                 │ Supabase (DB) │    Read-Only     │  Store Owner  │
 │ Auth System │                 │  PostgreSQL   ├─────────────────►│  (Dashboard)  │
 └─────────────┘                 └───────────────┘                  └───────────────┘
```

---

## Table of Contents
1. [The Problem vs. The Solution](#1-the-problem-vs-the-solution)
2. [Key Features](#2-key-features)
3. [AI Integration (OpenAI)](#3-ai-integration-openai)
4. [Tech Stack](#4-tech-stack)
5.[Quick Start (Local Development)](#5-quick-start-local-development)
6. [Authentication & Security](#6-authentication--security)

---

## 1. The Problem vs. The Solution

|  The Problem (Local Supermarkets) |  The SuperMartGPT Solution |
| :--- | :--- |
| **Language Barriers:** Communication gaps between diverse customers and staff. | **Multilingual Chat & Voice:** Native support for 8+ regional Indian languages. |
| **No Product Discovery:** Customers struggle to find specific or new items. | **AI Recommendations:** Smart, inventory-aware product suggestions. |
| **Blind Operations:** Store owners lack visibility into daily sales trends. | **Admin Dashboard:** Real-time revenue and top-selling product analytics. |
| **Manual Ordering:** Inefficient, error-prone, and leads to lost revenue. | **Automated Cart:** Customers manage carts and receive unique Order IDs. |

---

## 2. Key Features

###  Customer Features
* **Multilingual Chat:** Seamless interaction in English, Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, and Marathi.
* **Voice-to-Text Querying:** Speak naturally to search for products instead of typing.
* **Personalized AI Recommendations:** Suggests complementary items based on current queries.
* **Smart Shopping Cart:** Easily add/remove items and securely place orders (generates a unique Order ID).
* **User Authentication:** Checkout is restricted to verified (logged-in) users only.

###  Admin Features
* **Sales Analytics Dashboard:** A password-protected hub for store owners.
* **Revenue Tracking:** Visualizes total revenue and units sold (utilizing both real orders and demo datasets).
* **Top Sellers:** Automatically identifies and ranks best-selling inventory.

---

## 3. AI Integration (OpenAI)
SuperMartGPT relies heavily on OpenAI to provide a seamless, latency-optimized user experience while remaining highly cost-efficient.

| AI Task | OpenAI Model | Rationale |
| :--- | :--- | :--- |
| **Chatbot & Reasoning** | `GPT-4o-mini` | Fast, affordable, and highly capable of contextual reasoning. |
| **Multilingual Translation** | `GPT-4o-mini` | High accuracy across regional Indian dialects. |
| **Product Recommendations** | `GPT-4o-mini` | Understands purchase intent to cross-sell/up-sell items. |
| **Analytics Summaries** | `GPT-4o-mini` | Synthesizes raw DB sales data into plain-text admin insights. |
| **Voice-to-Text Input** | `Whisper API` | Industry-leading speech recognition for noisy retail environments. |

---

## 4. Tech Stack

* **Frontend:** Next.js (App Router), React, Tailwind CSS
* **Backend:** Next.js API Routes (Serverless)
* **AI & NLP:** OpenAI API (GPT-4o-mini, Whisper)
* **Database:** PostgreSQL (Hosted on Supabase)
* **Authentication:** Supabase Auth (Email OTP login)
* **Deployment:** Vercel

---

## 5. Quick Start (Local Development)

Easily run the full stack locally on your machine.

**1. Clone and Install Dependencies:**
```bash
git clone https://github.com/YOUR_USERNAME/SuperMartGPT.git
cd SuperMartGPT
npm install
```

**2. Configure Environment Variables:**
Create a `.env.local` file in the root directory and add the following keys:
```env
OPENAI_API_KEY=your_openai_key_here

SUPABASE_URL=your_supabase_url_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

AUTH_PASSWORD=admin20
```

**3. Boot the Application:**
```bash
npm run dev
```
 The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## 6. Authentication & Security

* **Passwordless Login:** Employs secure Email OTP authentication via Supabase Auth for friction-free customer onboarding.
* **Protected Routes:** Order placements are strictly restricted to authenticated users. The Admin Analytics dashboard is shielded by a separate secure password.
* **Zero Credential Leakage:** All API keys and Supabase credentials are fundamentally separated from the source code using environment variables. 
* *Disclaimer: This repository does not contain real API keys. You must provide your own API keys in the `.env.local` file to use the AI and DB features.*

---
<div align="center">
  <i>SuperMartGPT: Solving real-world retail problems.</i>
</div>
