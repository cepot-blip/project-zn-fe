import { Avatar, AvatarGroup, Button, ButtonGroup } from '@nextui-org/react';
import { MoveLeft, UserPlus } from 'lucide-react';
import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import StoryPiece from '../../../../components/fragment/beranda/StoryPiece';

export default function CommunityId() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="comm-header py-2 flex justify-between w-full">
        <div className="flex gap-4 items-center">
          <button type="button" onClick={() => navigate('/community')}>
            <MoveLeft className="text-blue-400" size={36} />
          </button>
          <h2 className="text-2xl font-bold border-b pb-1">{id}</h2>
        </div>
      </div>
      <div className="flex w-full max-h-60 h-60 ">
        <NavLink to="#" className="w-full flex">
          <img
            className="object-cover w-full rounded-md"
            alt="NextUI hero"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </NavLink>
      </div>
      <div className="w-full mt-10 px-8">
        <h2 className="text-2xl font-bold">{id}</h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          maiores ea accusamus minima, eius excepturi modi odio laudantium
          deleniti ipsam.
        </p>
        <div className="flex justify-between mt-8">
          <div className="flex gap-3 items-center">
            <Button
              type="button"
              isIconOnly
              variant="ghost"
              aria-label="add"
              className="border-none rounded-full"
            >
              <UserPlus />
            </Button>
            <AvatarGroup isBordered>
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </AvatarGroup>
            <p className="font-semibold">28k Members</p>
          </div>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Join
          </Button>
        </div>
      </div>
      <ButtonGroup
        className="border-b mt-8 w-full justify-between flex"
        variant="ghost"
      >
        <Button className="border-none font-semibold grow">Populer</Button>
        <Button className="border-none font-semibold grow">Terbaru</Button>
        <Button className="border-none font-semibold grow">Media</Button>
        <Button className="border-none font-semibold grow">Tentang</Button>
      </ButtonGroup>
      <StoryPiece />
    </div>
  );
}
