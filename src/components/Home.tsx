import { Link } from "react-router-dom";
import {useDocumentTitle} from "../hooks/useDocumentTitle.tsx";


const Home = () => {
	const [documentTitle, setDocumentTitle] = useDocumentTitle("Home")
	return (
		<>
			<Link to="/overview">OverView</Link><br/>
			<Link to="/initiative">Initiative Tracker</Link>
		</>
	);
};

export default Home;

