import React from 'react';
import InputField from '../components/fragment/InputField';
import AuthTemplate from '../components/template/AuthTemplate';

export default function Register() {
  return (
    <AuthTemplate image="Register.png" title="Daftar Sekarang!">
      <InputField name="Username" placeholder="Masukkan nama lengkap Anda" />
      <InputField
        name="Alamat Email"
        placeholder="Masukkan alamat email Anda"
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
        Lanjutkan
      </button>
      <p className="text-base text-center text-white">
        Sudah Punya Akun? <span className="text-[#FF872E]">Sign In</span>
      </p>
    </AuthTemplate>
  );
}
