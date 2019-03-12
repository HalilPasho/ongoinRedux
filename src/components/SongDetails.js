import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return <div>Select song!</div>;
  }
  return (
    <div>
      <h3>Song Details:</h3>
      Title: {song.title} <br />
      Duration: {song.duration}
    </div>
  );
};

const mapStatetoProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStatetoProps)(SongDetails);
