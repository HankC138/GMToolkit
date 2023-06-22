import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./Container";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function Tracker() {
	useDocumentTitle("Initiative Tracker")
	return (
		<div className="App">
			<DndProvider backend={HTML5Backend}>
				<Container />
			</DndProvider>
		</div>
	);
}

export default Tracker;
