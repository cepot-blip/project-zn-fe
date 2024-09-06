import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/element/Button';
import InputField from '../../components/fragment/auth/InputField';
import AuthTemplate from '../../components/template/auth/AuthTemplate';
import useRegister from '../../hook/users/useRegister';
import useAuthStore from '../../store/auth/store';

export default function Register() {
  const {
    username,
    password,
    email,
    fullName,
    phoneNumber,
    setUsername,
    setPassword,
    setEmail,
    setFullName,
    setPhoneNumber,
    setReset,
  } = useAuthStore((state) => ({
    username: state.username,
    password: state.password,
    email: state.email,
    fullName: state.fullName,
    phoneNumber: state.phoneNumber,
    setUsername: state.setUsername,
    setPassword: state.setPassword,
    setEmail: state.setEmail,
    setFullName: state.setFullName,
    setPhoneNumber: state.setPhoneNumber,
    setReset: state.setReset,
  }));

  const { register, isSuccess } = useRegister();
  const handleRegister = () => {
    register({
      username,
      email,
      password,
      fullName,
      phone_number: phoneNumber,
    });
    if (isSuccess) {
      setReset();
    }
  };

  return (
    <AuthTemplate on image="Register.png" title="Daftar Sekarang!">
      <InputField
        htmlFor="fullName"
        labelName="Full Name"
        name="fullName"
        placeholder="Masukkan nama lengkap Anda"
        required
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <InputField
        htmlFor="username"
        labelName="Username"
        name="username"
        placeholder="Masukkan username Anda"
        required
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        htmlFor="email"
        labelName="Alamat Email"
        name="email"
        type="email"
        placeholder="Masukkan alamat email Anda"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        htmlFor="phone"
        labelName="Phone Number"
        name="phone "
        type="text"
        placeholder="08199191923"
        required
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <InputField
        htmlFor="password"
        labelName="password"
        name="password"
        type="password"
        placeholder="Masukkan Password Anda"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mt-4">
        <Button type="submit" onClick={handleRegister}>
          Lanjutkan
        </Button>

        <p className="text-base mt-4 text-center text-white">
          Sudah Punya Akun?{' '}
          <Link to="/login" className="text-[#FF872E]">
            Sign In
          </Link>
        </p>
      </div>
    </AuthTemplate>
  );
}
