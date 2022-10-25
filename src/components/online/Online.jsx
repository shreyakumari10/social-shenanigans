import React from 'react';
import "./Online.css";

export default function Online({user}) {
  return (
    <div>
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <div className="rightbarUsername">{user.username}</div>
          </li>
    </div>
  )
}
