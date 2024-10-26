"use client";

import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const handleGoogleSignIn = async () => {
    try {
      console.log(process.env.NEXT_PUBLIC_BASE_URL)
      await signIn('google', {
        callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
        redirect: false,
      });
    } catch (error) {
      console.error('Google Sign in failed', error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      style={{
        padding: '10px 20px',
        backgroundColor: '#4285F4',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      Googleでログイン
    </button>
  );
};

export default LoginForm;
