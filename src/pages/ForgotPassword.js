import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Card, CardBody } from '../components/Card';
import './Auth.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <CardBody>
          <div className="auth-header">
            <h1 className="auth-logo">COPE Business</h1>
            <h2>Reset Password</h2>
            <p>Enter your email address and we'll send you a link to reset your password</p>
          </div>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Check Your Email</h3>
              <p>We've sent a password reset link to <strong>{email}</strong></p>
              <p>Click the link in the email to reset your password. You'll be redirected to login shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <Button variant="primary" className="btn-block" type="submit">
                Send Reset Link
              </Button>

              <div className="auth-footer">
                <p>
                  Remember your password?{' '}
                  <Link to="/login" className="auth-link">
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
