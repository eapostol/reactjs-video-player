// react is javascript library used to produce HTML and transpiled
// javascript that is shown to a user in a web browser
// components or views are snippets of code that produce HTML
// React code consists of multiple components and nest them together
// one inside the other

/* Create a component an produce some HTML.
*  We will then insert the component into the DOM
*  */
import React, { Component } from 'react';

export default class App extends Component {
	// This is a REPL (Read , eval, print,  loop)
	comp = () => {
		return <div>qqq React simple starter!!!</div>;
	};
	compAlt = () => {
		return React.createElement(
			"ol",
			"null",
			React.createElement("li",null,"one"),
			React.createElement("li",null,"two"),
			React.createElement("li",null,"three"),
			);

	};
  render() {
    return (
      this.compAlt()
    );
  }
}
