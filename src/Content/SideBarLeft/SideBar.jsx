import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import {
  Bookmark,
  CircleUser,
  Compass,
  Home,
  Mail,
  Settings,
  Users,
} from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/element/Button';
import SidebarItem from '../../components/element/SideBarItem';
import useDataLogin from '../../hook/users/useDataLogin';
import './SideBar.css';

export default function SideBarLeft() {
  const { data = {} } = useDataLogin();
  const sidebarItems = [
    { icon: <Home />, text: 'Home', link: '' },
    { icon: <Compass />, text: 'Explore', link: 'explore' },
    { icon: <Mail />, text: 'Message', link: 'message' },
    { icon: <Bookmark />, text: 'Save', link: 'save' },
    { icon: <Users />, text: 'group', link: 'community' },
    { icon: <CircleUser />, text: 'Profile', link: 'profile' },
    { icon: <Settings />, text: 'Setting', link: 'setting' },
  ];

  return (
    <div className="flex row-span-1 justify-self-start col-span-1 flex-col items-center justify-between lg:h-[90vh] pb-10">
      <div className="flex flex-col w-full gap-4 px-4 mt-10 justify-center ">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            link={item.link}
            text={item.text}
          />
        ))}
      </div>

      <div className="hidden lg:flex w-[90%] flex-col gap-12 px-2">
        <Button fullrounded className="h-10 bg-[#3769A5] ">
          Post
        </Button>
        <div className="flex flex-wrap items-center px-1 justify-between ">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem
                textValue="header"
                key="profile"
                className="h-14 gap-2"
              >
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{data?.query?.email}</p>
              </DropdownItem>
              <DropdownItem textValue="Profile" key="profiles">
                <NavLink to="/profile">Profile</NavLink>
              </DropdownItem>
              <DropdownItem textValue="settings" key="settings">
                Settings
              </DropdownItem>

              <DropdownItem textValue="config" key="configurations">
                Configurations
              </DropdownItem>
              <DropdownItem textValue="feedback" key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem textValue="logout" key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="">
            <p>{data?.query?.username || 'user'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
