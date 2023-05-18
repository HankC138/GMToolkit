import { Link } from "react-router-dom";
const OverviewForm = () => {
	return (
		<>
			<Link to="/">Home</Link>
			<div>
				<form>
					<input type="text" name="worldName" placeholder="world name" />
					<br />
					<textarea name="description" placeholder="description" />
					<br />
					
				</form>
			</div>
		</>
	);
};

export default OverviewForm;
