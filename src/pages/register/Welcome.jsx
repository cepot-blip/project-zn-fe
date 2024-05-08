import React from 'react';
import Button from '../../components/element/Button';

export default function Welcome() {
  function handleExplore() {
    window.location.href = '/dashboard';
  }
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <img className="w-[60%] lg:w-[25%]" src="/welcome.png" alt="welcome" />
      <div className="min-w-64 md:min-w-72 lg:min-w-96 flex flex-col items-center justify-center">
        <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl mt-12">
          Selamat Datang!
        </h2>
        <p className="font-extralight text-center text-base md:text-lg lg:text-xl mt-3">
          Akun Anda telah terdaftar
          <br />
          di sistem!
        </p>
        <Button
          onClick={() => handleExplore()}
          fullrounded
          className="mt-[30px]"
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
}
