import { Avatar, Input } from '@nextui-org/react';
import { Key, User } from 'lucide-react';
import React from 'react';

export default function Setting() {
  return (
    <div className="flex w-full h-full">
      <div className="flex-1 p-4 gap-8 h-full flex flex-col">
        <h2 className="text-2xl font-bold  text-black">Setting</h2>
        <Input placeholder="search" className="w-full" type="text" />
        <ul>
          <li className="font-bold border-b pb-1">font</li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col p-4 border-l  h-full gap-4">
        <div className="setting-header">
          <h2 className="text-blue-500 text-2xl font-bold border-b-2">
            Your Account
          </h2>
          <p className="text-sm text-gray-400">
            See information about your account, download an archive of your
            data, or learn about your account deactivation options
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="border-b-2 pb-2">
            <div className="flex gap-4">
              <Avatar
                icon={<User />}
                classNames={{
                  base: 'bg-gradient-to-br from-[#FFB457] to-[#FF705B]',
                  icon: 'text-black/80',
                }}
              />
              <div>
                <h3 className="text-2xl font-bold">Account Information</h3>
                <p className="text-blue-500 text-sm font-semibold">
                  See your account information like your phone number and email
                  address
                </p>
              </div>
            </div>
          </li>
          <li className="border-b-2 pb-2">
            <div className="flex gap-4">
              <div className="bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center">
                <Avatar
                  icon={<Key />}
                  classNames={{
                    base: 'bg-gradient-to-br from-[#FFB457] to-[#FF705B]',
                    icon: 'text-black/80',
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Changes your password</h3>
                <p className="text-blue-500 text-sm font-semibold">
                  See your account information like your phone number and email
                  address
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
