import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const Header = () => {
	const favoritesCtx = useContext(FavoritesContext);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All Meetups</Link>
					</li>
					<li>
						<Link to='/new-meetup'>Add New Meetup</Link>
					</li>
					<li>
						<Link to='/favorites'>
							My Favorites{" "}
							<span className={styles.badge}>
								{favoritesCtx.totalFavorites}
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
