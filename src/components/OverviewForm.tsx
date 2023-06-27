import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const OverviewForm = () => {
	useDocumentTitle("Overview");
	return (
		<>
		<h1>overview</h1>
		<h2>overview</h2>
		<h3>overview</h3>

			<div className="content">
				<form>
					<label htmlFor="worldName"> Name of Your World:</label>
					<input
						type="text"
						name="worldName"
						id="worldName"
						placeholder="world name"
					/>
					<br />
					<label htmlFor="year">Current Year:</label>
					<input type="text" name="year" id="year" placeholder="year" />
					<br />
					<label htmlFor="description">Description:</label>
					<br />
					<textarea
						name="description"
						id="description"
						placeholder="description"
					/>

					<br />
				</form>
			</div>

			<Link to="/">Home</Link>
		</>
	);
};

export default OverviewForm;
