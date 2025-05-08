
# 🌦️ Weather App

[![Laravel](https://img.shields.io/badge/Laravel-12.x-red?logo=laravel)](https://laravel.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14-blue?logo=next.js)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![GitHub repo](https://img.shields.io/badge/repo-weather--app-black?logo=github)](https://github.com/your-username/weather-app)

A fullstack weather app built with Laravel (backend) and Next.js (frontend). Users can query weather data for any city using OpenWeatherMap API.

---

## 🗂 Project Structure

```bash
weather-app/
├── backend/     # Laravel 12 API backend
└── frontend/    # Next.js 14 frontend interface
🚀 Features
🌍 Fetches live weather data using OpenWeatherMap API

📡 RESTful API endpoint /api/weather/current?city={name}

🎨 Beautiful, responsive weather UI with Next.js

⚙️ CORS and .env ready for deployment

🔐 Secure Laravel app with proper service providers configured

🛠️ Tech Stack
Layer	Framework	Version
Frontend	Next.js	14.x
Backend	Laravel	12.x
Language	TypeScript / PHP	-
API	OpenWeatherMap	-

🔧 Backend Setup (Laravel)
Navigate to backend/:

bash
Copy
Edit
cd backend
Install dependencies:

bash
Copy
Edit
composer install
Create .env:

bash
Copy
Edit
cp .env.example .env
Set your OPENWEATHER_API_KEY in .env.

Generate app key:

bash
Copy
Edit
php artisan key:generate
Serve the app:

bash
Copy
Edit
php artisan serve
✅ Visit API at: http://127.0.0.1:8000/api/weather/current?city=Nairobi

🎨 Frontend Setup (Next.js)
Navigate to frontend/:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Create .env.local and add:

ini
Copy
Edit
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api
Start the frontend server:

bash
Copy
Edit
npm run dev
✅ Visit frontend at: http://localhost:3000

🛡️ .gitignore
Recommended .gitignore at the root should include:

gitignore
Copy
Edit
node_modules/
.env
.env.local
/storage
/vendor
/public/storage
/public/hot
/public/build
*.log
*.cache
📄 License
This project is licensed under the MIT License.

