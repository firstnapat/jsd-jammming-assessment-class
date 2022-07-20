import React, { Component } from 'react';
// import Track from '../Track/Track';
// Import TrackList
import TrackList from '../TrackList/TrackList';
//import SearchResults.css
import './SearchResults.css'

class SearchResults extends Component {
  render() {
    return (
      <div className='SearchResults'>
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults}
                    onAdd={this.props.onAdd}
                    isRemoval={false} />
      </div>
    )
  }
}

export default SearchResults;
