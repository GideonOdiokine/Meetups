import React, { useEffect, useState } from "react";
import MeetupList from "../components/Meetups/MeetupList";

const AllMeetups = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	const fetchMeetups = async () => {
		setIsLoading(true);
		await fetch(
			"https://react-getting-started-9428e-default-rtdb.firebaseio.com/meetups.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};

					meetups.push(meetup);
				}

				setIsLoading(false);
				setLoadedMeetups(meetups);
			});

		if (!isLoading && loadedMeetups.length === 0) {
			return (
				<section>
					<p>No meetups found.</p>
				</section>
			);
		}
	};

	useEffect(() => {
		fetchMeetups();
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
};

export default AllMeetups;
