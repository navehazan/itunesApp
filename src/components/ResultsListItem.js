import React from "react";
import { Link } from "react-router-dom";
const ResultsListItem = ({ track }) => (
  <div className="ResultsListItem">
      <img
        className="TrackDetails-image"
        src={track.artworkUrl100}
        alt="Track"
      />
      <div className="TrackDetails-info">
        <p>
          <span className="title">Track Name </span> <br />
          {track.trackName}
        </p>
      </div>
      {track.trackId && (
        <Link className="link" to={`/info/${track.trackId}`}>
          info
        </Link>
      )}
    </div>
);

export default ResultsListItem;
