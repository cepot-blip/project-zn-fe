import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/element/Button';
import InputField from '../components/fragment/InputField';
import AuthTemplate from '../components/template/AuthTemplate';

export default function Register() {
  return (
    <AuthTemplate image="Register.png" title="Daftar Sekarang!">
      <InputField
        name="Username"
        placeholder="Masukkan nama lengkap Anda"
        required
      />
      <InputField
        htmlFor="email"
        name="Alamat Email"
        type="email"
        placeholder="Masukkan alamat email Anda"
        required
      />
      <InputField
        htmlFor="password"
        name="Password"
        type="password"
        placeholder="Masukkan Password Anda"
        required
      />

      <Button type="submit">Lanjutkan</Button>

      <p className="text-base text-center text-white">
        Sudah Punya Akun?{' '}
        <Link to="/login" className="text-[#FF872E]">
          Sign In
        </Link>
      </p>
    </AuthTemplate>
  );
}
