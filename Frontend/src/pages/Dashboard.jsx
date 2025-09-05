import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../Api';

// Tech Stack Data
const techStackData = [
  {
    name: 'React',
    description: 'Frontend library for building user interfaces',
    color: '#61DAFB',
    icon: '⚛️'
  },
  {
    name: 'Vite',
    description: 'Fast build tool and development server',
    color: '#646CFF',
    icon: '⚡'
  },
  {
    name: 'Node.js',
    description: 'JavaScript runtime for backend development',
    color: '#3C873A',
    icon: '🟢'
  },
  {
    name: 'Express',
    description: 'Web framework for Node.js applications',
    color: '#000000',
    icon: '🚀'
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database for flexible data storage',
    color: '#47A248',
    icon: '🍃'
  },
  {
    name: 'Mongoose',
    description: 'ODM library for MongoDB and Node.js',
    color: '#880000',
    icon: '📊'
  },
  {
    name: 'JWT',
    description: 'Secure token-based authentication',
    color: '#000000',
    icon: '🔐'
  },
  {
    name: 'Bcrypt',
    description: 'Password hashing for security',
    color: '#FF6B6B',
    icon: '🛡️'
  },
  {
    name: 'Nodemailer',
    description: 'Email sending for OTP verification',
    color: '#0F9D58',
    icon: '📧'
  },
  {
    name: 'React Router',
    description: 'Client-side routing for React apps',
    color: '#CA4245',
    icon: '🛣️'
  },
  {
    name: 'Axios',
    description: 'HTTP client for API requests',
    color: '#5A29E4',
    icon: '🌐'
  },
  {
    name: 'Dotenv',
    description: 'Environment variable management',
    color: '#ECD53F',
    icon: '⚙️'
  }
];

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        
        const response = await API.get('/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-items">
          <a href="#home" className="nav-link" onClick={handleSmoothScroll}>Home</a>
          <a href="#techstack" className="nav-link" onClick={handleSmoothScroll}>Tech Stack</a>
          <a href="#about" className="nav-link" onClick={handleSmoothScroll}>About</a>
          <a href="#contact" className="nav-link" onClick={handleSmoothScroll}>Contact</a>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>

      {/* Landing Section */}
      <section id="home" className="landing-section">
        <div className="landing-content">
          <div className="landing-left">
            <div className="auth-description">
              <h2 className="auth-title">🔒 Auth App – Modern Authentication Made Simple</h2>
              <p className="auth-subtitle">A secure and reliable authentication system with powerful features:</p>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <div className="feature-content">
                    <strong>User Registration</strong> – Seamless sign-up with form validation
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <div className="feature-content">
                    <strong>Email Verification (OTP)</strong> – Ensures only real users get access
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <div className="feature-content">
                    <strong>JWT-based Authentication</strong> – Secure token handling for sessions
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <div className="feature-content">
                    <strong>Password Protection</strong> – Strong hashing for safe credential storage
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="landing-right">
            <div className="spline-wrapper">
              <iframe 
                src="https://my.spline.design/robotfollowcursorforlandingpage-Tppad5PCtBr3AVhcmgPy7TBK/" 
                frameBorder="0" 
                width="100%" 
                height="100%"
                title="3D Robot Model"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="techstack-section">
        <div className="techstack-content">
          <h2 className="techstack-title">Tech Stack Used</h2>
          <div className="techstack-divider"></div>
          <div className="techstack-grid">
            {techStackData.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon" style={{color: tech.color}}>
                  {tech.icon}
                </div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2 className="about-text">Made with love by Kshitish</h2>
          
          <div className="contact-info">
            <div className="email-container">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Gmail" className="gmail-icon" />
              <span className="email-text">pradhankshitish1@gmail.com</span>
            </div>
            
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/kshitish-pradhan-316b47351/" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://github.com/Kshitish-04" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;