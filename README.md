# DevLinker - Developer Portfolio Platform

DevLinker is a full-stack web application that allows developers to showcase their projects, share knowledge through blogs, and connect with the tech community.

## Project Structure

```
devlinker/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   └── utils/         # Utility functions
│   ├── public/
│   └── Dockerfile
├── backend/           # Node.js/Express backend API
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── Dockerfile
└── docker-compose.yml    # Docker orchestration
```

## Features

- **User Authentication**: Secure JWT-based authentication with registration and login
- **Profile Management**: Create and edit detailed developer profiles
- **Project Showcase**: Display coding projects with descriptions, tech stacks, and live demos
- **Blog Platform**: Write and publish technical blogs and tutorials
- **Public Portfolio**: Each user gets a public portfolio page at `/user/:username`
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- React 18 with JSX
- React Router for navigation
- Axios for API communication
- Tailwind CSS for styling
- Lucide React for icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS and security middleware

### DevOps
- Docker containerization
- Nginx for frontend serving
- Docker Compose for orchestration

## Quick Start

### Using Docker Compose (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd devlinker
```

2. Start the application:
```bash
docker-compose up -d
```

3. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: mongodb://localhost:27017

### Manual Setup

#### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/devlinker
JWT_SECRET=your-super-secret-jwt-key-here
FRONTEND_URL=http://localhost:3000
```

5. Start the server:
```bash
npm run dev
```

#### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### User Management
- `GET /api/user/profile` - Get current user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/:username` - Get user by username

### Projects
- `GET /api/project` - Get current user's projects
- `POST /api/project` - Create new project
- `PUT /api/project/:id` - Update project
- `DELETE /api/project/:id` - Delete project
- `GET /api/project/user/:username` - Get projects by username

### Blogs
- `GET /api/blog` - Get current user's blogs
- `POST /api/blog` - Create new blog
- `PUT /api/blog/:id` - Update blog
- `DELETE /api/blog/:id` - Delete blog
- `GET /api/blog/user/:username` - Get blogs by username

### Admin
- `GET /api/admin/users` - Get all users (admin only)

## Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
npm run dev
```

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Docker Deployment

### Build and Run with Docker

#### Backend
```bash
cd backend
docker build -t devlinker-backend .
docker run -p 5000:5000 devlinker-backend
```

#### Frontend
```bash
cd frontend
docker build -t devlinker-frontend .
docker run -p 3000:80 devlinker-frontend
```

### Environment Variables

Make sure to set these environment variables in production:

- `NODE_ENV=production`
- `MONGODB_URI=your-mongodb-connection-string`
- `JWT_SECRET=your-secure-jwt-secret`
- `FRONTEND_URL=your-frontend-url`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.