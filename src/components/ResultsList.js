import React from "react";
import ResultsListItem from "./ResultsListItem";
import { connect } from "react-redux";
import Loader from "react-loader";
const ResultsList = ({ results, isLoading,queries }) => {
  if (isLoading) {
    return <Loader lines={13} length={20} width={10} radius={30} />;
  }
  if (!results.length && queries.length) {
    return (
      <div className="ResultsList">
        <p className="ResultsList-error">
          Sorry, we couldn't find any results for this search
        </p>
      </div>
    );
  }
  if (!results.length && !queries.length) {
    return (
      <div className="ResultsList">
        <div className="ResultsList-welcome">
        </div>
      </div>
    );
  }
  return (
    <div className="ResultsList">
      {results.map(item => (
        <ResultsListItem
          track={item}
          key={item.trackId ? item.trackId : item.artistId}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ results, isLoading, queries }) => ({
  results,
  isLoading,
  queries
});
export default connect(mapStateToProps)(ResultsList);
