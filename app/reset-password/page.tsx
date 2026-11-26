"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  LockKeyhole,
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { createClient } from "../../lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [validLink, setValidLink] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function verifyResetLink() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const tokenHash = params.get("token_hash");
      const type = params.get("type");

      // Supabase PKCE flow
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          setError("This password reset link is invalid or has expired.");
          setVerifying(false);
          return;
        }

        setValidLink(true);
        setVerifying(false);
        return;
      }

      // Supabase token-hash flow, if configured
      if (tokenHash && type === "recovery") {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: "recovery",
        });

        if (error) {
          setError("This password reset link is invalid or has expired.");
          setVerifying(false);
          return;
        }

        setValidLink(true);
        setVerifying(false);
        return;
      }

      setError("Invalid or expired password reset link.");
      setVerifying(false);
    }

    verifyResetLink();
  }, [supabase]);

  async function handleResetPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Your password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);
  }

  if (verifying) {
    return (
      <main className="reset-page">
        <div className="reset-card">
          <div className="loader" />
          <h2>Verifying your link</h2>
          <p>Please wait while we verify your password reset link.</p>
        </div>
        <style jsx>{styles}</style>
      </main>
    );
  }

  return (
    <main className="reset-page">
      <div className="reset-card">
        <Link href="/" className="brand">
          <Image
            src="/lavio-logo.png"
            alt="LAVIO Logo"
            width={42}
            height={42}
            priority
          />
          <span>
            LAVIO <small>Money Tracker</small>
          </span>
        </Link>

        {success ? (
          <div className="success-content">
            <div className="success-icon">
              <CheckCircle2 size={34} />
            </div>

            <h1>Password Updated!</h1>
            <p>
              Your password has been successfully changed. You can now sign in
              to your LAVIO account using your new password.
            </p>

            <Link href="/login" className="primary-button">
              Go to Login
            </Link>
          </div>
        ) : !validLink ? (
          <div className="error-content">
            <div className="error-icon">
              <LockKeyhole size={30} />
            </div>
            <h1>Link Expired</h1>
            <p>{error}</p>
          </div>
        ) : (
          <>
            <div className="heading-icon">
              <ShieldCheck size={28} />
            </div>

            <h1>Create a New Password</h1>
            <p className="subtitle">
              Choose a strong password to keep your LAVIO account secure.
            </p>

            <form onSubmit={handleResetPassword}>
              <label htmlFor="password">New Password</label>
              <div className="password-field">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>

              <label htmlFor="confirmPassword">Confirm New Password</label>
              <div className="password-field">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password again"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              <p className="password-hint">
                Your password must contain at least 8 characters.
              </p>

              {error && <div className="error-message">{error}</div>}

              <button
                type="submit"
                className="primary-button"
                disabled={loading}
              >
                {loading ? "Updating Password..." : "Update Password"}
              </button>
            </form>
          </>
        )}

        <div className="security-note">
          <ShieldCheck size={16} />
          <span>Your account security matters to us.</span>
        </div>
      </div>

      <footer>© {new Date().getFullYear()} LAVIO. All rights reserved.</footer>

      <style jsx>{styles}</style>
    </main>
  );
}

const styles = `
  .reset-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #E1F1F0 0%, #EDF5F7 55%, #F3F8F9 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px 20px;
    color: #193B40;
  }

  .reset-card {
    width: 100%;
    max-width: 440px;
    background: #FFFFFF;
    padding: 42px;
    border: 1px solid #DDEAEA;
    border-radius: 22px;
    box-shadow: 0 15px 45px rgba(25, 59, 64, 0.08);
    text-align: center;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #193B40;
    text-decoration: none;
    font-size: 23px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 35px;
  }

  .logo-icon {
    width: 42px;
    height: 42px;
    background: #E1F1F0;
    color: #287D83;
    border-radius: 12px;
    display: grid;
    place-items: center;
  }

  .heading-icon,
  .success-icon,
  .error-icon {
    width: 65px;
    height: 65px;
    border-radius: 20px;
    display: grid;
    place-items: center;
    margin: 0 auto 20px;
  }

  .heading-icon {
    background: #E1F1F0;
    color: #287D83;
  }

  .success-icon {
    background: #E1F1F0;
    color: #287D83;
  }

  .error-icon {
    background: #FCEEEE;
    color: #C45D5D;
  }

  h1 {
    font-size: 27px;
    line-height: 1.3;
    font-weight: 750;
    margin: 0 0 12px;
    color: #193B40;
  }

  h2 {
    font-size: 21px;
    margin-bottom: 10px;
  }

  .subtitle,
  .success-content p,
  .error-content p,
  .reset-card > p {
    color: #71878B;
    font-size: 14px;
    line-height: 1.7;
    margin: 0 0 28px;
  }

  form {
    text-align: left;
  }

  label {
    display: block;
    font-size: 13px;
    font-weight: 650;
    color: #31545A;
    margin: 20px 0 9px;
  }

  .password-field {
    position: relative;
  }

  input {
    width: 100%;
    height: 50px;
    padding: 0 48px 0 15px;
    border: 1px solid #DDEAEA;
    border-radius: 11px;
    background: #FAFCFC;
    color: #193B40;
    font-size: 14px;
    outline: none;
    transition: border 0.2s, box-shadow 0.2s;
  }

  input:focus {
    border-color: #287D83;
    box-shadow: 0 0 0 3px rgba(40, 125, 131, 0.1);
  }

  input::placeholder {
    color: #A0B0B2;
  }

  .eye-button {
    position: absolute;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    background: transparent;
    color: #829699;
    cursor: pointer;
    display: grid;
    place-items: center;
  }

  .password-hint {
    font-size: 12px;
    color: #829699;
    margin: 10px 0 18px;
  }

  .primary-button {
    width: 100%;
    min-height: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 11px;
    background: #287D83;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }

  .primary-button:hover {
    background: #195C62;
    transform: translateY(-1px);
  }

  .primary-button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
  }

  .error-message {
    padding: 11px 13px;
    margin: 0 0 16px;
    border-radius: 9px;
    background: #FFF1F1;
    color: #B54747;
    font-size: 13px;
    line-height: 1.5;
  }

  .back-link {
    margin-top: 25px;
  }

  .back-link a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: #287D83;
    text-decoration: none;
    font-size: 13px;
    font-weight: 650;
  }

  .back-link a:hover {
    color: #195C62;
  }

  .security-note {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    border-top: 1px solid #EAF0F1;
    margin-top: 27px;
    padding-top: 20px;
    color: #829699;
    font-size: 12px;
  }

  .security-note :global(svg) {
    color: #287D83;
  }

  footer {
    margin-top: 25px;
    color: #829699;
    font-size: 12px;
    text-align: center;
  }

  .loader {
    width: 35px;
    height: 35px;
    border: 3px solid #E1F1F0;
    border-top-color: #287D83;
    border-radius: 50%;
    margin: 10px auto 22px;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 480px) {
    .reset-card {
      padding: 30px 22px;
      border-radius: 18px;
    }

    h1 {
      font-size: 24px;
    }
  }
`;
