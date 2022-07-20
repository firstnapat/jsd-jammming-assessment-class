import React, { Component } from "react";
// import TrackList
import TrackList from "../TrackList/TrackList";
//import Playlist.css
import './Playlist.css'
class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />

        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist;
