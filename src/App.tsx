import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {  RouterProvider } from "react-router-dom";
import Router from "./router";
function App() {
	return (
		<>
			<DndProvider debugMode={true} backend={HTML5Backend}>
				<RouterProvider router={Router} />
			</DndProvider>
		</>
	);
}

export default App;
