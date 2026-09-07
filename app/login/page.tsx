import { AuthHeader } from "@/src/features/auth/components/AuthHeader";
import { LoginForm } from "@/src/features/auth/components/LoginForm";

export const metadata = {
  title: "Sign in or create an account | Booking.com",
  description: "Sign in to your Booking.com account",
};

export default function LoginPage() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: 'var(--bg-primary)' 
    }}>
      <AuthHeader />
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: 'var(--spacing-8)'
      }}>
        <LoginForm />
      </div>
    </main>
  );
}
