🛍️ NextBuy – Modern E-Commerce Web App

NextBuy is a modern and responsive e-commerce web application built using React, Tailwind CSS, and Context API.
It provides authentication, product browsing, cart management, and protected routes.

🚀 Features

🔐 User Authentication (Login / Signup)

🛒 Add to Cart (Protected Action)

➕ Increase / ➖ Decrease Product Quantity

🗑 Remove Individual Items

🧹 Clear Entire Cart

🔒 Protected Routes (Cart & Dashboard)

📦 Product Fetching using Axios

🔍 Search Products

💅 Fully Responsive UI with Tailwind CSS

💾 Persistent Cart using LocalStorage

🛠 Tech Stack

React JS

React Router DOM

Context API (Auth Management)

Axios

Tailwind CSS

LocalStorage

📂 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProtectedRoute.jsx
│   ├── SearchBar.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── ProductDetails.jsx
|   └── Dashboard.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── api/
│   └── axios.js
│
└── App.jsx

🔐 Authentication Flow

Users must login to:

Add items to cart

Access Cart page

Access Dashboard

Logout redirects to Login page

ProtectedRoute component prevents unauthorized access

🛒 Cart Functionality

Add product to cart

Auto-increment quantity if already added

Remove individual product

Adjust quantity (+ / −)

Clear entire cart

Total price calculation

Cart stored in LocalStorage

📦 API Used

Products are fetched from a dummy API using Axios.

Example:

https://fakestoreapi.com/products

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/your-username/nextbuy.git


2️⃣ Navigate to project folder

cd nextbuy


3️⃣ Install dependencies

npm install


4️⃣ Start development server

npm run dev


🎯 Purpose

This project was built as a learning project to practice:

React component architecture

Routing & Protected Routes

State management

UI design using Tailwind

E-commerce logic implementation

👨‍💻 Author

Developed by Maneesha Mateti
Frontend Developer | React Enthusiast 🚀