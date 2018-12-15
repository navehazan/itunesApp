import React from "react";
const InfoCard = ({ track }) => (
  <div className="InfoCard">
    <div className="InfoCard-content">
      <p>
        <span className="title">Artist - </span>
        {track.artistName}
      </p>
      <p>
        <span className="title">Track - </span>
        {track.trackName}
      </p>
      <p>
        <span className="title">Collection - </span>
        {track.collectionName}
      </p>
      <p>
        <span className="title">Media Type - </span>
        {track.kind}
      </p>
      <p>
        <span className="title">Time - </span>
        {(track.trackTimeMillis / 1000 / 60).toFixed(2)}
      </p>
      <p>
        <span className="title">Release Date - </span>
        {track.releaseDate.substring(0, 10)}
      </p>
    </div>
  </div>
);
export default InfoCard;
 
