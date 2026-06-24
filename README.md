# React + Vite

# EcoStay 🌿

EcoStay is an AI-assisted sustainable travel platform that helps users discover eco-friendly homestays, plan trips, and receive personalized travel recommendations.

## Features

* Responsive Landing Page
* Dark / Light Mode Toggle
* Reusable UI Component Library
* Property Search Interface
* AI Travel Assistant
* Mobile-Friendly Design

## Component Library

The project includes reusable UI components:

* Button
* Input
* Modal
* Toast
* Loader

All components are located inside:

```plaintext
src/components/ui/
```

and exported through:

```plaintext
src/components/ui/index.js
```

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router

### State Management

* React Context API

### Development Tools

* Git
* GitHub
* Figma

## Project Structure

```plaintext
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Toast.jsx
│   │   ├── Loader.jsx
│   │   └── index.js
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   └── Searchbar.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── pages/
│   └── ComponentDemo.jsx
│
├── App.jsx
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```
**How to Run Backend Locally**
1. Navigate to backend folder
cd backend
2. Install dependencies
npm install
3. Start the server
node server.js

The backend will run at:

http://localhost:5000
Available API Endpoints
Get All Stays
GET /api/stays
Get Single Stay
GET /api/stays/:id
Create Stay
POST /api/stays
Update Stay
PUT /api/stays/:id
Delete Stay
DELETE /api/stays/:id
Search Stays
GET /api/stays/search?q=manali


## Future Enhancements

* User Authentication
* Booking System
* AI Travel Recommendations
* Wishlist Functionality
* Payment Integration

## Author

Sarthak Jaiswal
B.Tech CSE
AI-Assisted Full Stack Web Development Internship




