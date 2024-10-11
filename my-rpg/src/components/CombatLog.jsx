import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import "./CombatLog.css";

const CombatLog = () => {
	const { playerStats, monsterStats, log, setLog, playerTurn } =
		useContext(AppContext);

	// const lines = log.map((line) => {
	// 	<p>{line}</p>;
	// });

	return (
		<div className="combat-log">
			<h3>Combat Log</h3>
			{/* {lines} */}
		</div>
	);
};

export default CombatLog;
