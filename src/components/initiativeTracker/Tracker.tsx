import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle.tsx";
import { Encounter } from "./Encounter.tsx";
export const Tracker: FC = () => {
	useDocumentTitle("Init Tracker");
	const [encounters, setEncounters] = useState([
		<Encounter
			removeEncounter={handleRemoveEncounterClick}
			key={"first encounter"}
			value={0}
		/>,
	]);

	const handleAddEncounterClick = () => {
		console.log(encounters);
		setEncounters([
			...encounters,
			<Encounter
				removeEncounter={handleRemoveEncounterClick}
				value={encounters.length}
				key={encounters.length}
			/>,
		]);
	};

	function handleRemoveEncounterClick(index: number) {
		console.log('remove ', index)
		setEncounters(
			encounters.filter((encounter, i,array) => {
				console.log(i, index,array)
				return i == index
			})
		);
	}

	return (
		<>
			{encounters}
			<button onClick={() => handleAddEncounterClick()}>Add Encounter</button>
			<br />
			<br />
			<Link to="/">Home</Link>
		</>
	);
};
