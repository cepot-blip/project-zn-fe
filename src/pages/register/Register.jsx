import React from 'react';
import { Link, useFetcher } from 'react-router-dom';
import Button from '../../components/element/Button';
import InputField from '../../components/fragment/InputField';
import AuthTemplate from '../../components/template/AuthTemplate';
import { useAuth } from '../../context/useAuth';

export default function Register() {
  const { state, dispatch } = useAuth();
  const fetcher = useFetcher();

  return (
    <AuthTemplate image="Register.png" title="Daftar Sekarang!">
      <fetcher.Form method="post" className="flex flex-col gap-4 flex-1">
        <InputField
          htmlFor="username"
          labelName="Username"
          name="username"
          placeholder="Masukkan nama lengkap Anda"
          required
          type="text"
          value={state.username}
          onChange={(e) =>
            dispatch({ type: 'SET_USERNAME', payload: e.target.value })
          }
        />
        <InputField
          htmlFor="email"
          labelName="Alamat Email"
          name="email"
          type="email"
          placeholder="Masukkan alamat email Anda"
          required
          value={state.email}
          onChange={(e) =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
        />
        <InputField
          htmlFor="password"
          labelName="password"
          name="password"
          type="password"
          placeholder="Masukkan Password Anda"
          required
          value={state.password}
          onChange={(e) =>
            dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
          }
        />
        <div className="mt-4">
          <Button type="submit">Lanjutkan</Button>

          <p className="text-base mt-4 text-center text-white">
            Sudah Punya Akun?{' '}
            <Link to="/login" className="text-[#FF872E]">
              Sign In
            </Link>
          </p>
        </div>
      </fetcher.Form>
    </AuthTemplate>
  );
}
