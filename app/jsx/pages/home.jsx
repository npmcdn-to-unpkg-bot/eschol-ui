// ##### Home Page ##### //

import React from 'react'

class Home extends React.Component {
  render() {
		return (
			<div>
	   		<h2>Components</h2>
        <ul>
          <li><a href="#footer">Footer</a></li>
          <li><a href="#globalnav">Global Navigation</a></li>
          <li><a href="#header">Header</a></li>
        </ul>
        <h2>Objects</h2>
        <ul>
          <li><a href="#box">Box</a></li>
          <li><a href="#search">Search</a></li>
        </ul>
	    </div>
  	)
	}
}

module.exports = Home;
