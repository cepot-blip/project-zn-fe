import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/element/Button';
import InputField from '../components/fragment/InputField';
import AuthTemplate from '../components/template/AuthTemplate';

export default function Login() {
  const [email, setEmail] = useState('');

  return (
    <AuthTemplate image="Login.png" title="Sign In to Your Account">
      <InputField
        htmlFor="email"
        name="Email Address"
        placeholder="Masukkan Alamat Email Anda"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        htmlFor="password"
        placeholder="Masukkan Password Anda"
        type="password"
        name="Password"
        required
      />
      <Button>Sign In</Button>
      <p className="text-base text-center text-white">
        Dont Have Account?{' '}
        <Link to="/register" className="text-[#FF872E]">
          Sign Up
        </Link>
      </p>
    </AuthTemplate>
  );
}
