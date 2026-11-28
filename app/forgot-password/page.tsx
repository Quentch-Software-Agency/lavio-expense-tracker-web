import { Suspense } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <Suspense
      fallback={
        <p style={{ textAlign: "center", marginTop: 100 }}>Loading...</p>
      }
    >
      <ForgotPasswordForm />
    </Suspense>
  );
}
