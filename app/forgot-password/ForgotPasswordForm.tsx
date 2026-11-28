"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function ForgotPasswordForm() {
  const supabase = useMemo(() => createClient(), []);
  const searchParams = useSearchParams();
  const submittedEmail = useRef("");

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const queryEmail = searchParams.get("email");

    if (!queryEmail) return;

    const validEmail = queryEmail.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validEmail)) {
      setEmail(validEmail);
      setError("Please provide a valid email address.");
      return;
    }

    if (submittedEmail.current === validEmail) return;

    submittedEmail.current = validEmail;
    setEmail(validEmail);

    async function sendResetLink() {
      setError("");
      setLoading(true);

      try {
        const { error } = await supabase.auth.resetPasswordForEmail(
          validEmail,
          {
            redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
          },
        );

        if (error) {
          setError(error.message);
          return;
        }

        setSuccess(true);
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    sendResetLink();
  }, [searchParams, supabase]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validEmail)) {
      setError("Please provide a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(validEmail, {
        redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        maxWidth: 420,
        margin: "100px auto",
        padding: 24,
        fontFamily: "Arial",
      }}
    >
      <h1>Forgot Password?</h1>

      {loading ? (
        <p>Sending password reset link...</p>
      ) : success ? (
        <p>
          If an account exists for this email, you will receive a password
          recovery link.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>Enter your email to receive a password reset link.</p>

          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 14,
              marginBottom: 15,
            }}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: 14,
              background: "#287D83",
              color: "white",
              border: 0,
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      )}
    </main>
  );
}
