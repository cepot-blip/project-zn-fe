import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/element/Button';
import InputField from '../../components/fragment/auth/InputField';
import AuthTemplate from '../../components/template/auth/AuthTemplate';
import useLogin from '../../hook/users/useLogin';
import useAuthStore from '../../store/auth/store';

export default function Login() {
  const loginInput = useAuthStore((state) => state.loginInput);
  const setLoginInput = useAuthStore((state) => state.setLoginInput);
  const setReset = useAuthStore((state) => state.setReset);
  const setPassword = useAuthStore((state) => state.setPassword);
  const password = useAuthStore((state) => state.password);
  const { login, isLoading } = useLogin();
  function handleLogin() {
    if (!loginInput || !password) {
      toast.error('Email dan Password harus diisi');
      return;
    }
    login({ loginInput, password });
    setReset();
  }

  return (
    <AuthTemplate image="Login.png" title="Sign In to Your Account">
      <InputField
        htmlFor="email"
        labelName="Email Address / Phone Number"
        name="email"
        value={loginInput}
        placeholder="email@example.com"
        required
        disabled={isLoading}
        onChange={(e) => setLoginInput(e.target.value)}
        type="email"
      />
      <InputField
        htmlFor="password"
        labelName="Password"
        placeholder="********"
        type="password"
        name="password"
        disabled={isLoading}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="mt-4">
        <Button disabled={isLoading} onClick={() => handleLogin()}>
          Sign In
        </Button>
        <p className="text-base mt-4 text-center text-white">
          Dont Have Account?{' '}
          <Link to="/register" className="text-[#FF872E]">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthTemplate>
  );
}
