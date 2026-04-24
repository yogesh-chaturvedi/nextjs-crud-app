This is a [Next.js](https://nextjs.org) assignment project,,,, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Next.js User CRUD App

A simple User Management (CRUD) application built using Next.js (App Router) and JSONPlaceholder API.


## 📌 Features

- View all users
- View individual user details
- Update user information (Optimistic UI)
- Delete user (Optimistic UI)
- Dynamic routing using Next.js App Router


## 🛠 Tech Stack
- Next.js (App Router)
- React
- JavaScript
- Fetch API


## 🌐 API Used

Base URL:
https://jsonplaceholder.typicode.com

Endpoints used:

- GET /users
- GET /users/
- PUT /users/
- DELETE /users/

⚠️ Note: This is a fake API. Changes are not persisted after refresh.
First, run the development server:

## 📁 Project Structure

```
src/
├── app/
│ ├── users/
│ │ ├── page.js
│ │ ├── [id]/page.js
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── UsersCard.jsx
```

## ⚡ Getting Started
1. Clone the repository

   git clone https://github.com/yogesh-chaturvedi/nextjs-crud-app.git

2. Navigate to project

   cd nextjs-crud-app

3. Install dependencies

   npm install

4. Run the development server

   npm run dev

5. Open in browser

   http://localhost:3000/users


## 🌍 Live Demo

👉 Add your deployed link here (Vercel)

## Author

Yogesh Chaturvedi