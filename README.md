# book-my-show-clone

# 🎬 CineBook - Premium Movie Booking Experience

CineBook is a modern, full-stack movie ticket booking application designed with a premium user experience in mind. It features a sleek dark-themed interface, real-time seat selection, and a smooth booking flow.

![CineBook UI](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80) 


---

## ✨ Features

- **🎯 Interactive Hero Section**: Featured movies with dynamic trailers and booking shortcuts.
- **📅 Real-time Scheduling**: Browse "Now Showing" and "Coming Soon" movies with ease.
- **🪑 Advanced Seat Selection**: Interactive seat map to pick your perfect spot.
- **💳 Seamless Booking Flow**: Streamlined process from movie selection to ticket confirmation.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- **🔒 Secure Authentication**: Built-in user registration and login system.

---

## 🚀 Tech Stack

### Frontend
- **React (Vite)**: For a fast and modern development experience.
- **Tailwind CSS**: Utility-first styling with custom dark-mode themes.
- **Framer Motion**: Smooth animations and micro-interactions.
- **Radix UI**: Accessible and unstyled primitive components.
- **TanStack Query**: Efficient server-state management.
- **Wouter**: Minimalist routing.

### Backend
- **Node.js & Express**: Robust and scalable API server.
- **Drizzle ORM**: Type-safe database interactions.
- **Passport.js**: Secure authentication middle-ware.
- **TypeScript**: End-to-end type safety.

### Database
- **PostgreSQL**: Reliable relational data storage (using DrizzleKit for migrations).

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd Cinema-Reserve-1
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env` file in the root directory and add your database connection string:
    ```env
    DATABASE_URL=postgres://user:password@localhost:5432/cinebook
    ```

4.  **Push Database Schema**:
    ```bash
    npm run db:push
    ```

### Running the Application

- **Development Mode**:
  ```bash
  npm run dev
  ```
  Starts both the frontend and backend with hot-reloading.

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Start Production Server**:
  ```bash
  npm run start
  ```

---

## 📁 Project Structure

```text
├── api/            # API entry points (Vercel)
├── client/         # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Page-level components (Home, Booking)
│   │   └── lib/         # Utility functions and data
├── server/         # Express backend
│   ├── routes.ts   # API route definitions
│   ├── storage.ts  # Database abstraction layer
│   └── auth.ts     # Authentication logic
├── shared/         # Shared TypeScript types and Zod schemas
└── drizzle/        # Database migrations and configuration
```

---

## 📜 License

This project is licensed under the **MIT License**. See the `package.json` for details.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve CineBook, feel free to fork the repo and submit a pull request.

---


