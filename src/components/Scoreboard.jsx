import { useContext } from "react";
import { AppContext } from "../App";

const Scoreboard = () => {
	const { score } = useContext(AppContext);

	return (
		<div className="scoreboard">
			<p>Score: {score}</p>
		</div>
	);
};

export default Scoreboard;
