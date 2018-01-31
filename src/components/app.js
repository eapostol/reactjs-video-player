import React, { Component } from 'react';

// add youtube api search library
// npm install --save youtube-api-search
import YouTubeSearch from 'youtube-api-search';

// ensure directory ref for custom comp
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyBvvDH0KWcCqgWUZL5bLLYJ75mReUdzrVk';


export default class App extends Component {
	
	constructor(props){
		super(props);
		YouTubeSearch({key:API_KEY,term:'Tron Legacy'},this.onSearchResults.bind(this));
	}

	onSearchResults(data) {
	// onSearchResults(videos) {
		// console.log(data);
		// console.log(videos);
		this.setState({videos: data});
		// this.setState({videos});
		console.log(this.state.videos);
	};

  render() {
    return (
      <div>
		  Search: <SearchBar/>
	  </div>
    );
  }
}
