import { useContext } from "react";
import { AppContext } from "../App";
import "./CombatLog.css";

const CombatLog = () => {
	const { log } = useContext(AppContext);

	return (
		<div className="combat-log">
			<h3>Combat Log</h3>
			{log}
		</div>
	);
};

export default CombatLog;
