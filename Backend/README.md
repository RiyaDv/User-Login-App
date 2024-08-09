#  **User Authentication Backend**

This is the backend service for the User Authentication System built with Node.js and Express.js. It handles API requests, user authentication, session management, and role-based access control.

---

## 🛠️ **Technologies Used**

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM library for MongoDB.
- **JSON Web Tokens (JWT)**: For secure authentication and session management.
- **bcrypt**: For password hashing.

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js installed on your machine.
- MongoDB instance running locally or in the cloud.

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. **Navigate to the backend directory:**
   ```bash
   cd User-Login-App/backend
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### **Running the Server**

Start the backend server:

```bash
npm run server
```

## 📚 **API Endpoints**

### **Authentication Routes**

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login an existing user
- **GET /api/auth/profile** - Get the authenticated user's profile

### **Protected Routes**

- **GET /api/users/admin** - Access admin-only data (admin role required)
- **GET /api/users** - Access general user data (user role required)
