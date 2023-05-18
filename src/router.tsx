import {
	createBrowserRouter,
	Route,
	Link,
} from "react-router-dom";
import OverviewForm from "./components/OverviewForm.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<div>
				<h1>Hell World!</h1>
				<Link to="overview"> Overview</Link>
			</div>
		),
	},
	{ path: "overview", element: <OverviewForm/> },
]);

export default router