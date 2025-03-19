# User Management CRUD App

A simple CRUD application built with React/TypeScript for the frontend and Express/TypeScript for the backend.

## Features

- Create, Read, Update, and Delete users
- TypeScript integration for type safety
- React frontend with functional components and hooks
- Express backend with RESTful API endpoints
- In-memory data storage for simplicity

## Project Structure

```
├── src/
│   ├── client/             # Frontend React app
│   │   ├── components/     # React components
│   │   ├── App.tsx         # Main React application
│   │   ├── api.ts          # API call functions
│   │   ├── index.html      # HTML template
│   │   ├── index.tsx       # React entry point
│   │   ├── styles.css      # CSS styles
│   │   └── types.ts        # TypeScript interfaces
│   ├── models/             # Data models
│   │   └── user.ts         # User model and in-memory DB
│   ├── routes/             # API routes
│   │   ├── create.ts       # Create user route
│   │   ├── delete.ts       # Delete user route
│   │   ├── index.ts        # Route aggregator
│   │   ├── read.ts         # Read user routes
│   │   └── update.ts       # Update user route
│   └── index.ts            # Express server entry point
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Copy `.env.example` to `.env` and configure as needed
4. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

## Scripts

- `npm run dev` - Runs both frontend and backend in development mode
- `npm run dev:server` - Runs only the backend server
- `npm run dev:client` - Runs only the frontend client
- `npm run build` - Builds the frontend for production
- `npm start` - Starts the backend server

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Technologies Used

- React
- TypeScript
- Express
- Parcel (bundler)
- Axios
- Dotenv