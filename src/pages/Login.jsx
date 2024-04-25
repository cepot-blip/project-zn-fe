import React from 'react';
import InputField from '../components/fragment/InputField';
import AuthTemplate from '../components/template/AuthTemplate';

export default function Login() {
  return (
    <AuthTemplate image="Login.png" title="Sign In to Your Account">
      <InputField
        name="Email Address"
        placeholder="Masukkan Alamat Email Anda"
      />
      <InputField
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
