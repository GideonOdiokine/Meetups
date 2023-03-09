import { useContext } from "react";
import MeetupList from "../components/Meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
	const favoritesCtx = useContext(FavoritesContext);

	console.log(favoritesCtx.favorites);

	let content;

	if (favoritesCtx.totalFavorites === 0) {
		content = <p>You got no favorites yet. Start adding some?</p>;
	} else {
		content = <MeetupList meetups={favoritesCtx.favorites} />;
	}

	return (
		<div>
			<h1>My Favorites</h1>
			{content}
		</div>
	);
};

export default Favorites;
