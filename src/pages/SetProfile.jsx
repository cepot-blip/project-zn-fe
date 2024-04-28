import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/element/Button';

export default function SetProfile() {
  const [skip, setSkip] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Handle the file upload, e.g., send it to a server or process it
      toast.success('File uploaded successfully!');
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  if (skip) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="relative z-0 flex bg-primary h-screen items-center justify-center">
      <img
        className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2"
        src="/Radial.png"
        alt="radial"
      />

      <div className="absolute w-[20rem] lg:w-[31.25rem] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <div className="relative">
            <img src="/Profile.svg" alt="profile" />
            <button
              type="button"
              onClick={triggerFileUpload}
              className="absolute z-30 bottom-0 right-0"
            >
              <img
                className="hover:cursor-pointer"
                src="/icon-avatar-add.svg"
                alt="addavatar"
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
              />
            </button>
          </div>
          <h2 className="font-medium text-4xl">Hi, Name</h2>
          <p className="font-extralight text-xl text-center">
            Please upload your selfie
          </p>
          <Button onClick={() => toast.success('Sign Up')} fullrounded>
            Sign Up Now
          </Button>
          <Button onClick={() => setSkip(true)} fullrounded outline>
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
}
