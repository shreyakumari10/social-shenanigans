import React from 'react';
import "./Share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
          <input placeholder="What's on your mind Shreya?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon"/>
              <span className="ShareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="green" className="shareIcon"/>
              <span className="ShareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="blue" className="shareIcon"/>
              <span className="ShareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <span className="ShareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
