import React, {Component} from 'react';

const SearchBarDOM = () => {
	// recall creates React.CreateElement("input") but JSX is supported
	// through importing te React package
	let onInputChange = (event) => {
		console.log(event.target.value);
	};
	return <input onChange={onInputChange} />
};

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: ''};
	}

	render() {
		return (SearchBarDOM());
	}
}

export default SearchBar;