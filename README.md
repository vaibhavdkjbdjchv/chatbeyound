# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Live Website:-https://chatbeyound.vercel.app/

📌 Project Summary
This project is a web-based AI chatbot integration and testing platform that enables clients to seamlessly integrate a chatbot into their website. It provides a user-friendly interface for managing chatbot interactions, testing functionality, and troubleshooting issues. The platform includes features such as automated website scraping, chatbot training, integration instructions, and a success/failure feedback system.

🛠️ Key Features & Modules
1️⃣ Company & Website Data Collection
Users enter their company name and website URL.
The system fetches metadata (e.g., website description) for better chatbot training.
2️⃣ Web Scraping & Data Detection
The platform scrapes important web pages from the client’s website.
Displays detected pages (e.g., About, Services, Contact) with a scraping status (Scraped/Pending).
Users can view extracted data before chatbot training.
3️⃣ Chatbot Training & Testing
After confirming the extracted data, users can start chatbot training.
A chatbot interface allows users to test responses before integrating it into their website.
4️⃣ Chatbot Integration
Users can integrate the chatbot into their own website using:

Easy-to-follow instructions to add a <script> tag in <head>.
Emailing the instructions to their developer.
A test integration button to verify successful implementation.
5️⃣ Integration Testing & Feedback System
If the chatbot is successfully integrated, the system shows a Confetti UI success message.
Users see options to:
Explore Admin Panel (for chatbot management).
Start Talking to Chatbot (live test).
Share on Social Media.
If the integration fails, users receive a "Chatbot not working?" feedback prompt for troubleshooting.
🚀 Technologies Used
Frontend: React.js, Tailwind CSS, Framer Motion (animations)
Backend: Node.js, Express.js
Database: MongoDB (storing chatbot data and user interactions)
Authentication: Auth0 (secure login system)
Web Scraping: Axios (fetching website metadata)
Chatbot Integration: API-based AI chatbot embedded via script
🎯 Project Goals & Impact
✅ Simplify chatbot integration for non-technical users.
✅ Automate website data extraction to train AI models.
✅ Ensure chatbot functionality & usability before deployment.
✅ Provide seamless user experience with success/failure feedback.
