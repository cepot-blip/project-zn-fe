import './Postingan.css';
import React from 'react';
import UserImg from '../../../components/element/UserImg';
import Link from '../../../components/element/Link';
import { Smile, MapPin, Image } from 'react-feather';

const Postingan = () => {
  return (
    <div className="postingan">
      <div className="postingan-1">
        <div className="postingan-1-1">
          <UserImg />
        </div>
        <input
          type="text"
          placeholder="Apa Yang Anda Pikirkan ?!"
          className="postingan-1-2"
        />
      </div>
      <div className="Postingan-2">
        <div className="postingan-2-1">
          <ul>
            <li className="li">
              <Link>
                <Image size={17} />
              </Link>
            </li>
            <li>
              <Link>
                <Smile size={17} />
              </Link>
            </li>
            <li>
              <Link>
                <img src="gif.png" alt="" className="img" />
              </Link>
            </li>
            <li>
              <Link>
                <MapPin size={17} />
              </Link>
            </li>
            <li>
              <Link>
                <MapPin size={17} />
              </Link>
            </li>
            <button className="button">Post</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Postingan;
