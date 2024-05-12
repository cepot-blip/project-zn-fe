import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/element/Button';
import InputField from '../../components/fragment/InputField';
import AuthTemplate from '../../components/template/AuthTemplate';
import { useAuth } from '../../context/useAuth';
import useLogin from '../../hook/users/useLogin';

export default function Login() {
  const { state, dispatch } = useAuth();
  const { login, isLoading } = useLogin();
  function handleLogin() {
    if (!state.email || !state.password) {
      toast.error('Email dan Password harus diisi');
      return;
    }
    login({ email: state.email, password: state.password });
  }

  return (
    <AuthTemplate image="Login.png" title="Sign In to Your Account">
      <InputField
        htmlFor="email"
        labelName="Email Address"
        name="email"
        value={state.email}
        placeholder="Masukkan Alamat Email Anda"
        required
        disabled={isLoading}
        onChange={(e) =>
          dispatch({ type: 'SET_EMAIL', payload: e.target.value })
        }
        type="email"
      />
      <InputField
        htmlFor="password"
        labelName="Password"
        placeholder="Masukkan Password Anda"
        type="password"
        name="password"
        disabled={isLoading}
        value={state.password}
        onChange={(e) =>
          dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
        }
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
