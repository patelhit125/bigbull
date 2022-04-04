import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { firebaseAuth } from "../auth";

function LandingMenu({ name, url, url2, name2 }) {
	const [logged, setUser] = useState(null);

	function userCheck() {
		firebaseAuth().onAuthStateChanged((user) => {
			if (user) {
				setUser(true);
			} else {
				setUser(false);
			}
		});
	}

	userCheck();

	return (
		<nav className="header">
			<div className="header__logo">
				<img src={require("../../images/bigbull.png")} alt="" width={50} />
				<h3>Bigbull</h3>
			</div>
			{logged === false ? (
				<ul className="header__menu">
					<Link to={url}>
						<li>
							<button
								type="submit"
								className="header__button-register"
							>
								{name}
							</button>
						</li>
					</Link>
					<Link to={url2}>
						<li>
							<button
								type="submit"
								className="header__button-register"
							>
								{name2}
							</button>
						</li>
					</Link>
				</ul>
			) : (
				<Link to="/bigbull/dashboard">
					<button type="submit" className="header__button-register">
						DASHBOARD
					</button>
				</Link>
			)}
		</nav>
	);
}
LandingMenu.propTypes = {
	url: PropTypes.string,
	url2: PropTypes.string,
	name: PropTypes.string,
	name2: PropTypes.string,
};

export default LandingMenu;
