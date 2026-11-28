"use client";

import { useMemo, useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = useMemo(() => createClient(), []);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);
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

      {success ? (
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
            }}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      )}
    </main>
  );
}
