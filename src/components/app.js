import React, { Component } from 'react';
// ensure directory ref for custom comp
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyBvvDH0KWcCqgWUZL5bLLYJ75mReUdzrVk';
// npm install --save youtube-api-search

export default class App extends Component {
  render() {
    return (
      <div>
		  Search: <SearchBar/>
	  </div>
    );
  }
}
