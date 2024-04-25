import React, { useState } from 'react';
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        htmlFor="password"
        placeholder="Masukkan Password Anda"
        type="password"
        name="Password"
      />
      <button
        type="submit"
        className="w-full flex items-center justify-center h-14 bg-[#FF872E] rounded-[10px] font-semibold text-xl text-white"
      >
        Sign In
      </button>
      <p className="text-base text-center text-white">
        Dont Have Account? <span className="text-[#FF872E]">Sign Up</span>
      </p>
    </AuthTemplate>
  );
}
