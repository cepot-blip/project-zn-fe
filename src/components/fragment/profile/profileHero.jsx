import { BriefcaseIcon, MapPinIcon } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProfileHero() {
  return (
    <div className="pl-8">
      <div className="w-2/5">
        <div className="flex">
          <p className="text-slate-900 font-semibold text-xl">Mprooy</p>
          <p className="text-slate-400 text-sm pt-1.5">@Mprooy</p>
        </div>
        <div className="flex">
          <div className="flex py-2 w-[115px]">
            <MapPinIcon width={30} />
            <p className="text-sm text-slate-900 font-semibold">Eghead</p>
          </div>
          <div className="flex  py-2 w-[115px]">
            <BriefcaseIcon width={30} />
            <p className="text-sm text-slate-900 font-semibold">Scientist</p>
          </div>
        </div>
        <div className="py-2">
          <p className="text-sm text-slate-900 font-semibold">
            Hy There I Am Using WhatsAPP!
          </p>
          <NavLink to="#" className="text-blue-600 text-sm">
            https://www.figma.com/design/F7lgpcwMmkhuw
          </NavLink>
        </div>
        <div className="flex justify-between text-center pt-2">
          <div>
            <p className="font-semibold text-sm">FOLOWING</p>
            <p className="font-semibold text-sm">890</p>
          </div>
          <div>
            <p className="font-semibold text-sm">FOLOWING</p>
            <p className="font-semibold text-sm">1,23K</p>
          </div>
        </div>
      </div>
    </div>
  );
}
