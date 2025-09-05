import React from 'react'
import API from '../Api';
import { useState } from "react";
import { useNavigate ,useLocation} from 'react-router-dom';

const VerifyOtp = () => {

    const [otp, setOtp] = useState("");
    const [resending, setResending] = useState(false);
    const navigate = useNavigate();
    const {state} = useLocation();


    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
          await API.post("/verify-otp", {email: state.email,otp });
          alert("Email verified successfully");
          navigate('/login');
      }
      catch(err){
            alert(err.response?.data?.message || "OTP verification failed");
      }
     }

    const handleResendOtp = async () => {
        setResending(true);
        try {
            const response = await API.post('/resend-otp', { email: state.email });
            alert(response.data.message);
        } catch (err) {
            alert(err.response?.data?.message || "Failed to resend OTP");
        } finally {
            setResending(false);
        }
    };

  return (
    <div className="auth-container">
        <div className="auth-form">
            <h2>Verify OTP</h2>
            <p>Please enter the OTP sent to your email: <strong>{state?.email}</strong></p>
            <form onSubmit={handleSubmit}>
                <input placeholder='Enter 6-digit OTP' type="text" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength="6" required/>
                <button type='submit'>Verify</button>
            </form>
            <div className="resend-section">
                <p>Didn't receive the OTP?</p>
                <button 
                    type="button" 
                    onClick={handleResendOtp} 
                    disabled={resending}
                    className="resend-btn"
                >
                    {resending ? 'Resending...' : 'Resend OTP'}
                </button>
            </div>
            <p><a href="/login">← Back to Login</a></p>
        </div>
    </div>
  )
}

export default VerifyOtp