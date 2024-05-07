import React from 'react';
import Link from '../../element/Link';
import UserImg from '../../element/UserImg';
import { Icons } from '../../element/Icon';
import './ContentBlock.css';

const ContentBlock = () => (
  <div className="MainContent-1">
    <div className="MainContent-1-1">
      <div className="MainContent-1-1-1">
        <Link>
          <UserImg />
        </Link>
      </div>
      <div className="MainContent-1-1-2">
        <p>MProoy</p>
        <p className="p">3 hours ago</p>
      </div>
    </div>
    <div className="MainContent-1-2">
      <div className="MainContent-1-2-1"></div>
      <div className="MainContent-1-2-2">
        <p>Text</p>
        <div className="MainContent-1-2-2-1"></div>
        <div className="MainContent-1-2-2-2">
          <ul>
            {Icons.map((item) => (
              <li key={item.id}>{item.icon}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ContentBlock;
