# Twitter Clone

A full-stack Twitter clone built with React, TypeScript, Tailwind CSS, Node.js, and PostgreSQL.

## Features

- 🐦 Tweet creation and display
- 💬 Real-time timeline
- 👤 User profiles
- 🔄 Retweets and likes
- 👥 Follow/unfollow system
- 📱 Responsive design with Tailwind CSS
- 🔒 Type-safe with TypeScript
- 🚀 Modern development stack

## Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Project Structure

```
twitter-clone/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.tsx       # Main app component
│   │   └── index.css     # Tailwind CSS
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── models/       # Database models
│   │   ├── middleware/   # Express middleware
│   │   ├── config/       # Configuration
│   │   └── index.ts      # Server entry point
│   ├── database/
│   │   └── schema.sql    # Database schema
│   ├── package.json
│   └── tsconfig.json
└── package.json          # Root package.json
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd twitter-clone
npm run install:all
```

### 2. Database Setup

1. Install and start PostgreSQL
2. Create a database:
   ```sql
   CREATE DATABASE twitter_clone;
   ```
3. Run the schema:
   ```bash
   psql -d twitter_clone -f server/database/schema.sql
   ```

### 3. Environment Configuration

1. Copy the environment template:
   ```bash
   cp server/.env.example server/.env
   ```

2. Update `server/.env` with your database credentials:
   ```env
   PORT=3001
   NODE_ENV=development
   
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=twitter_clone
   DB_USER=your_username
   DB_PASSWORD=your_password
   
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

### 4. Development

Run both frontend and backend concurrently:

```bash
npm run dev
```

Or run them separately:

```bash
# Frontend (runs on http://localhost:5173)
npm run dev:client

# Backend (runs on http://localhost:3001)
npm run dev:server
```

### 5. Production Build

```bash
# Build both client and server
npm run build

# Start production server
npm start
```

## Available Scripts

### Root
- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build both client and server for production
- `npm run install:all` - Install dependencies for all packages

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server

## API Endpoints (Planned)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Tweets
- `GET /api/tweets` - Get timeline tweets
- `POST /api/tweets` - Create new tweet
- `GET /api/tweets/:id` - Get specific tweet
- `DELETE /api/tweets/:id` - Delete tweet

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/:id/follow` - Follow user
- `DELETE /api/users/:id/follow` - Unfollow user

### Interactions
- `POST /api/tweets/:id/like` - Like tweet
- `DELETE /api/tweets/:id/like` - Unlike tweet
- `POST /api/tweets/:id/retweet` - Retweet
- `DELETE /api/tweets/:id/retweet` - Undo retweet

## Current Status

✅ Basic project structure set up  
✅ React frontend with TypeScript and Tailwind CSS  
✅ Node.js backend with TypeScript and Express  
✅ PostgreSQL database schema  
✅ Basic UI components (Header, TweetForm, TweetList)  
✅ Mock data for development  

🚧 **Next Steps:**
- [ ] Database connection and models
- [ ] User authentication system
- [ ] API endpoints implementation
- [ ] Real-time features
- [ ] File upload for media
- [ ] Advanced features (notifications, search, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details