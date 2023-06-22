import { createBrowserRouter, Route, Link } from "react-router-dom";
import OverviewForm from "./components/OverviewForm.tsx";
import Home from "./components/Home.tsx";
import Tracker from "./components/initiative/Tracker.tsx";
const Router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{ path: "overview", element: <OverviewForm /> },
	{ path: "initiative", element: <Tracker /> },
]);

export default Router;
