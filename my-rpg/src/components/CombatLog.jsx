import { useContext } from "react";
import { AppContext } from "../App";
import "./CombatLog.css";

const CombatLog = () => {
	const { playerStats, monsterStats, playerTurn } = useContext(AppContext);

	return (
		<div className="combat-log">
			<h3>Combat Log</h3>
			<p>{playerStats.title}</p>
		</div>
	);
};

export default CombatLog;
