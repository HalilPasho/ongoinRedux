import React, { Component } from "react";
import { connect } from "react-redux";
import { SelectSong } from "../actions";

export class SongList extends Component {
  renderList() {
    return this.props.song.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button onClick={()=>this.props.SelectSong(song)} className="ui button primary">Select</button>
          </div>
          <div className="content ui header">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStatetoprops = state => {
  return { song: state.songs };
};

export default connect(
  mapStatetoprops,
  {
    SelectSong: SelectSong
  }
)(SongList);
