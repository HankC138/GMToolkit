import type { FC } from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle.tsx";
import { Encounter } from "./Encounter.tsx";
export const Tracker: FC = () => {
	useDocumentTitle("Init Tracker");

	return (
		<>
			<Encounter/>
			<br />
			<Link to="/">Home</Link>
		</>
	);
};
