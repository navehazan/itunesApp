import React from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import InfoCard from "./InfoCard";
const InfoPage = ({ track }) => (
  <div className="InfoPage">
    <InfoCard track={track} />
    <ReactPlayer
      height={track.kind === "song" ? "200px" : "350px"}
      controls={true}
      url={track.previewUrl}
    />
  </div>
);

const mapStateToProps = ({ results }, { match }) => ({
  track: results.find(item => item.trackId.toString() === match.params.id)
});
export default connect(mapStateToProps)(InfoPage);
