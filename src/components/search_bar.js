import React, {Component} from 'react';

class SearchBar extends Component {

	SearchBarDOM = () => {
		// recall creates React.CreateElement("input") but JSX is supported
		// through importing te React package
		let onInputChange = (event) => {
			// console.log(this); // this is SearchBar class
			// console.log(event.target.value);
			this.setState( {term: event.target.value } );
		};
		// Value of Input: {this.state.term} can confirm state change
		return (
			<div>
			<input value={this.state.term} onChange={onInputChange} />
			</div>
		);
	};

	constructor(props) {
		super(props);
		this.state = { term: ''};
	}

	render() {
		return (this.SearchBarDOM());
	}
}

export default SearchBar;