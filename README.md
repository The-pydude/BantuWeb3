# BantuWeb3
 AI-powered Web3 onboarding via chat, localized for emerging markets using Ethereum + XLayer + OKX + Polygon
 
 MetaBantu is a lightweight AI chatbot that simplifies crypto onboarding via WhatsApp-style chat, localized in Pidgin or Hausa/Yoruba, and rewards users with Web3 assets through smart contracts

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Architecture & Tech Stack](#architecture--tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Configuration](#configuration)  
5. [Usage](#usage)  
   - [Frontend (React)](#frontend-react)  
   - [Backend (Node.js)](#backend-nodejs)  
   - [Smart Contracts (Hardhat)](#smart-contracts-hardhat)  
6. [Smart Contract Details](#smart-contract-details)  
7. [Testing](#testing)  
8. [Deployment](#deployment)  
9. [Project Roadmap](#project-roadmap)  
10. [Contributing](#contributing)  
11. [License](#license)  
12. [Contact](#contact)

---

## Project Overview

**BantuWeb3** tackles the steep learning curve of Web3 in emerging markets by delivering:

- A **chatbot tutor** that speaks local languages (Pidgin, Hausa, Yoruba).  
- A **step-by-step onboarding** into wallets, NFTs, DeFi concepts via conversational UI.  
- **On-chain rewards** (ERC-20 token or ERC-721 NFT) for completing micro-lessons.  
- **Low-data & offline-first support** for poor-connectivity environments.

Our mission: **“Make crypto education as easy as texting a friend.”**

---

## Features

- ** Welcome & Language Selection**  
- ** AI-Driven Chat Lessons** (OpenAI GPT-API or self-hosted LLM)  
- ** Wallet Integration** (MetaMask, WalletConnect, OKX SDK)  
- ** Reward Engine** (ERC-20 token / ERC-721 NFT mint)  
- ** Offline Caching** (IndexedDB / Firebase)  
- ** Admin Dashboard** (view user progress & claim stats)

---

##  Architecture & Tech Stack

| Layer             | Technology                                                      |
|-------------------|-----------------------------------------------------------------|
| **Frontend**      | React.js, Tailwind CSS, Web3Modal / WalletConnect               |
| **Backend**       | Node.js, Express, Firebase or Supabase, OpenAI SDK              |
| **Smart Contracts** | Solidity, Hardhat, OpenZeppelin, deployed on Polygon + XLayer |
| **Storage**       | IPFS (for images/metadata), Firebase / Supabase                |
| **Hosting**       | Vercel (frontend), Heroku / Railway (backend), Hardhat tests   |

Diagram:  
