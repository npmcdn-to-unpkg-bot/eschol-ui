// ##### Global Navigation Component ##### //

import React from 'react'
import { polyfillDetails } from 'lavu-details-polyfill';
import MediaQuery from 'react-responsive'
import Breakpoints from '../../js/breakpoints.json'

class CompGlobalNav extends React.Component {
  render() {
		return (
			<nav className="c-globalnav">
				<MediaQuery maxWidth={759}>
					<details className="c-globalnav__main">
						<summary className="c-globalnav__main-button" role="button">Menu
						</summary>
						<CompGlobalNavMainItems />
					</details>
				</MediaQuery>
				<MediaQuery minWidth={760}>
					<details open className="c-globalnav__main">
						<summary className="c-globalnav__main-button" role="button">Menu
						</summary>
						<CompGlobalNavMainItems />
					</details>
				</MediaQuery>
			</nav>
		)
	}
}

class CompGlobalNavMainItems extends React.Component {
  render() {
		return (
   		<div className="c-globalnav__main-items">
				<a className="c-globalnav__item--active" href="">About</a>
				<details className="c-globalnav__sub">
					<summary className="c-globalnav__sub-button">
						Campuses
					</summary>
					<div className="c-globalnav__sub-items">
						<a href="">UC Berkeley</a>
						<a href="">UC Davis</a>
						<a href="">UC Irvine</a>
						<a href="">UCLA</a>
						<a href="">UC Merced</a>
						<a href="">UC Riverside</a>
						<a href="">UC San Diego</a>
						<a href="">UC San Francisco</a>
						<a href="">UC Santa Barbara</a>
						<a href="">UC Santa Cruz</a>
						<a href="">UC Office of the President</a>
						<a href="">UC Press</a>
					</div>
				</details>
				<a href="">Open Access Policies</a>
				<a href="">Journals</a>
				<a href="">Get Started</a>
			</div>
  	)
	}
}

module.exports = CompGlobalNav;
