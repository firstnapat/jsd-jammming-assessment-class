import React, { Component } from "react";
// Import Track
import Track from '../Track/Track';
//import TrackList.css
import './TrackList.css'
class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {
        this.props.tracks.map((track) =>{
                return <Track 
                key = {track.id}
                track = {track}
                />
            })
        }
        </div>
    )
  }
}

export default TrackList;
