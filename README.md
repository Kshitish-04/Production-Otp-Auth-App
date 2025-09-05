# 🔒 Auth App - Modern Authentication Made Simple

A secure and reliable MERN stack authentication system with email verification, featuring a modern dark-themed UI and comprehensive user management.

## ✨ Features

- 🔐 **Secure User Registration** - Complete signup flow with form validation
- 📧 **Email Verification (OTP)** - 6-digit OTP system using Nodemailer
- 🔑 **JWT Authentication** - Token-based session management
- 🛡️ **Password Security** - Bcrypt hashing for credential protection
- 🎨 **Modern UI/UX** - Dark theme with glassmorphism design
- 📱 **Responsive Design** - Mobile-first approach
- ⭐ **Animated Backgrounds** - Space-themed starfield animations
- 🚀 **3D Integration** - Spline 3D robot model
- 🔄 **Smooth Navigation** - Seamless scrolling between sections

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building interfaces
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Security & Authentication
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing library
- **Nodemailer** - Email sending for OTP verification
- **Dotenv** - Environment variable management

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- Gmail account for email services

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Production Manual Auth app"
   ```

2. **Backend Setup**
   ```bash
   cd Backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   ```

### Environment Configuration

Create a `.env` file in the Backend directory:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
```

### Gmail Setup for OTP
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings → Security
   - 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the 16-character app password in `EMAIL_PASS`

### Running the Application

1. **Start Backend Server**
   ```bash
   cd Backend
   npm start
   ```

2. **Start Frontend Development Server**
   ```bash
   cd Frontend
   npm run dev
   ```

3. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 📁 Project Structure

```
Production Manual Auth app/
├── Backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   └── authController.js     # Authentication logic
│   ├── middleware/
│   │   └── auth.js              # JWT middleware
│   ├── models/
│   │   └── User.js              # User schema
│   ├── routes/
│   │   └── authRoutes.js        # API routes
│   ├── .env                     # Environment variables
│   └── server.js                # Express server
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Landing page
│   │   │   ├── Signup.jsx       # User registration
│   │   │   ├── Login.jsx        # User login
│   │   │   ├── VerifyOtp.jsx    # OTP verification
│   │   │   └── Dashboard.jsx    # User dashboard
│   │   ├── Api.js               # Axios configuration
│   │   ├── App.jsx              # Main app component
│   │   └── App.css              # Global styles
│   └── package.json
│
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Register new user |
| POST | `/verify-otp` | Verify email with OTP |
| POST | `/resend-otp` | Resend OTP to email |
| POST | `/login` | User login |
| GET | `/profile` | Get user profile (protected) |
| GET | `/test-email` | Test email configuration |

## 🎨 UI Features

### Landing Page
- Modern hero section with 3D robot model
- Tech stack showcase with interactive cards
- Smooth scrolling navigation
- Responsive design

### Authentication Pages
- Animated starfield background
- Glassmorphism form design
- Real-time form validation
- Loading states and error handling

### Dashboard
- User profile information
- Tech stack display
- Contact information
- Social media links

## 🔧 Development

### Available Scripts

**Backend:**
- `npm start` - Start server with nodemon
- `npm test` - Run tests

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Structure

- **Components** - Reusable UI components
- **Pages** - Route-based page components
- **API** - Centralized API configuration
- **Styles** - Modern CSS with animations

## 🚀 Deployment

### Backend Deployment
1. Deploy to platforms like Heroku, Railway, or Vercel
2. Set environment variables in deployment platform
3. Ensure MongoDB Atlas is accessible

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy to Netlify, Vercel, or similar platforms
3. Update API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Kshitish Pradhan**
- Email: pradhankshitish1@gmail.com
- LinkedIn: [kshitish-pradhan-316b47351](https://www.linkedin.com/in/kshitish-pradhan-316b47351/)
- GitHub: [Kshitish-04](https://github.com/Kshitish-04)

## 🙏 Acknowledgments

- React community for excellent documentation
- MongoDB for flexible database solutions
- Spline for 3D model integration
- All open-source contributors

---

Made with ❤️ by Kshitish Pradhan