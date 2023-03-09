import React from "react";
import classes from "../Layout/styles/MeetupItem.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

	function handleFavoriteClick() {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				address: props.address,
			});
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.item}>
					<div className={classes.image}>
						<img src={props.image} alt={props.title} />
					</div>
					<div className={classes.content}>
						<h3>{props.title}</h3>
						<address>{props.address}</address>
						<p>{props.description}</p>
					</div>
					<div className={classes.actions}>
						<button onClick={handleFavoriteClick}>
							{itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
						</button>
					</div>
				</div>
			</Card>
		</li>
	);
};

export default MeetupItem;
