import React from 'react';
import { Link, useFetcher } from 'react-router-dom';
import Button from '../components/element/Button';
import InputField from '../components/fragment/InputField';
import AuthTemplate from '../components/template/AuthTemplate';

export default function Login() {
  const fetcher = useFetcher();

  return (
    <AuthTemplate image="Login.png" title="Sign In to Your Account">
      <fetcher.Form method="post" className="flex flex-col gap-4 flex-1">
        <InputField
          htmlFor="email"
          labelName="Email Address"
          name="email"
          placeholder="Masukkan Alamat Email Anda"
          required
          type="email"
        />
        <InputField
          htmlFor="password"
          labelName="Password"
          placeholder="Masukkan Password Anda"
          type="password"
          name="password"
          required
        />
        <div className="mt-4">
          <Button>Sign In</Button>
          <p className="text-base mt-4 text-center text-white">
            Dont Have Account?{' '}
            <Link to="/register" className="text-[#FF872E]">
              Sign Up
            </Link>
          </p>
        </div>
      </fetcher.Form>
    </AuthTemplate>
  );
}
