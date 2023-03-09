import React from "react";
import { toast } from "react-toastify";
import AddMeetupForm from "../components/Meetups/AddMeetupForm";
import { useNavigate } from "react-router-dom";

const AddMeetups = () => {
	const history = useNavigate();

	function handleAddMeetup(meetupData) {
		fetch(
			"https://react-getting-started-9428e-default-rtdb.firebaseio.com/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then(() => {
			toast.success("Data sent to server");
			history("/");
		});
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<AddMeetupForm addMeetUp={handleAddMeetup} />
		</section>
	);
};

export default AddMeetups;
