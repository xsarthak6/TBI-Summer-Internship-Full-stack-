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

## Database Choice

This project uses MongoDB Atlas as the primary database.

Why MongoDB Atlas?
Cloud-hosted and easy to configure.
Integrates seamlessly with Mongoose for Node.js applications.
Flexible NoSQL document structure suitable for storing stay information.
Scalable and ideal for full-stack web applications.
Provides secure remote access and easy database management through MongoDB Atlas.

## Schema Diagram
Database Schema
Stay Collection
Stay
│
├── title      : String (Required)
├── location   : String (Required)
├── price      : Number (Required)
└── image      : String (Optional)

<img width="569" height="778" alt="W5_SchemaDiagram_ TBI-26100815" src="https://github.com/user-attachments/assets/f40db100-58cd-42dd-813a-9de3b77490ee" />


## Set Up the Database
1. Clone the Repository
git clone https://github.com/xsarthak6/TBI-Summer-Internsh<img width="1600" height="861" alt="schema" src="https://github.com/user-attachments/assets/3fb95791-25b7-4387-a387-699bc0831aa8" />
2. Navigate to the Backend
cd backend
3. Install Dependencies
npm install
4. Create a .env File

Create a .env file inside the backend folder.

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/ecostay?retryWrites=true&w=majority

Replace:

<username> with your MongoDB Atlas username.
<password> with your MongoDB Atlas password.
<cluster> with your cluster name.
5. Start the Backend Server
node server.js

If the connection is successful, you should see:

Server running on port 5000
MongoDB Connected Successfully
6. Verify the API

Open:

http://localhost:5000/api/stays

The API should return the stay data stored in MongoDB.

Also ensure your .env.example file contains only placeholder values, for example:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/ecostay?retryWrites=true&w=majority

Do not commit your real MongoDB password or connection string to GitHub.


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




