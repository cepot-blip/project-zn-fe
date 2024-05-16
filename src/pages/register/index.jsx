import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/element/Button';
import InputField from '../../components/fragment/InputField';
import AuthTemplate from '../../components/template/AuthTemplate';
import { useAuth } from '../../context/useAuth';
import useRegister from '../../hook/users/useRegister';

export default function Register() {
  const { state, dispatch } = useAuth();

  const { register, isSuccess } = useRegister();
  const handleRegister = () => {
    register({
      username: state.username,
      email: state.email,
      password: state.password,
      fullName: state.fullName,
      phone_number: state.phoneNumber,
    });
    if (isSuccess) {
      dispatch({ type: 'SET_RESET' });
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
        value={state.fullName}
        onChange={(e) =>
          dispatch({ type: 'SET_FULLNAME', payload: e.target.value })
        }
      />
      <InputField
        htmlFor="username"
        labelName="Username"
        name="username"
        placeholder="Masukkan username Anda"
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
        htmlFor="phone"
        labelName="Phone Number"
        name="phone "
        type="text"
        placeholder="08199191923"
        required
        value={state.phoneNumber}
        onChange={(e) =>
          dispatch({ type: 'SET_PHONE', payload: e.target.value })
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
