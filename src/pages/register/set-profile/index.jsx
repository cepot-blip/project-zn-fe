import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../../components/element/Button';
import useDataLogin from '../../../hook/users/useDataLogin';
import useUpdateUser from '../../../hook/users/useUpdateUser';

export default function SetProfile() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(false);
  const fileInputRef = useRef(null);

  const { editUser } = useUpdateUser();
  const { userLogin } = useDataLogin();
  const navigate = useNavigate();

  const oneMBInBytes = 1024 * 1024;
  const token = Cookies.get('token');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));

    if (file) {
      toast.success('File uploaded successfully!');
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  async function handleSetup() {
    if (!image) {
      toast.error('Please upload your profile picture');
      return;
    }
    if (image.size > oneMBInBytes) {
      toast.error('File size should not exceed 1MB');
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    const res = await axios.post(
      'http://localhost:9000/api_v1//image-uploads',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (res.data) {
      const imageUrl = `http://localhost:9000/${res.data.image_link}`;
      editUser({
        id: userLogin.query.id,
        profilePicture: imageUrl,
        username: userLogin.query.username,
        email: userLogin.query.email,
        phone_number: userLogin.query.phone_number,
        fullName: userLogin.query.fullName,
      });
      toast.success('Profile picture uploaded successfully!');
      navigate('/');
    }
  }

  function skip() {
    navigate('/');
  }

  if (!token) {
    return <Navigate to="/login" replace />;
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
            <div className="w-[7.5rem] h-[7.5rem] rounded-full">
              <img
                src={preview || '/Profile.svg'}
                alt="profile"
                className="object-cover w-full h-full max-w-[7.5rem] max-h-[7.5rem] rounded-full"
              />
            </div>
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
          <Button onClick={() => handleSetup()} fullrounded>
            Sign Up Now
          </Button>
          <Button onClick={() => skip()} fullrounded outline>
            Skip
          </Button>
        </div>
      </div>
    </div>
  );
}
