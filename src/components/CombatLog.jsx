import { useContext } from "react";
import { AppContext } from "../App";
import "../assets/styles/CombatLog.css";

const CombatLog = () => {
	const { log } = useContext(AppContext);
	const lines = log.map((line, index) => {
		return <p key={index}>{line}</p>;
	});

	return (
		<div className="combat-log">
			<h3>Combat Log</h3>
			{lines}
		</div>
	);
};

export default CombatLog;
