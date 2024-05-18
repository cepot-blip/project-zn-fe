import { Card, CardBody } from '@nextui-org/react';
import React from 'react';

export default function ChatUserMain() {
  return (
    <div className="min-h-80 h-full my-2">
      <div className="grid w-full px-2 mt-2">
        <div className="w-1/2  justify-self-end">
          <Card className="bg-[#3769A5] text-white">
            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
          </Card>
          <p className="text-gray-400 text-sm">22 Apr 2024 9.28 PM • Sent</p>
        </div>
        <div className="w-1/2  justify-self-start">
          <Card className="bg-gray-200 text-black">
            <CardBody>
              <p>Make beautiful websites</p>
            </CardBody>
          </Card>
          <p className="text-gray-400 text-sm">22 Apr 2024 9.28 PM • Sent</p>
        </div>
        <div className="w-1/2  justify-self-end">
          <Card className="bg-[#3769A5] text-white">
            <CardBody>
              <p>info link rebecca terbaru?</p>
            </CardBody>
          </Card>
          <p className="text-gray-400 text-sm">22 Apr 2024 9.28 PM • Sent</p>
        </div>
      </div>
    </div>
  );
}
