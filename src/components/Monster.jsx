import { useContext } from "react";
import { AppContext } from "../App";
import MonsterFactory from "./MonsterFactory";
import "./Monster.css";

const Monster = () => {
	const { playerStats, monsterStats, playerTurn, stunned } =
		useContext(AppContext);
	const maxHealth = MonsterFactory(monsterStats.title).health;
	const stunIcon = playerStats.skillImg;

	return (
		<div className={`monster card ${!playerTurn && "turn"}`}>
			{stunned && <img src={stunIcon} className="stun-icon" />}
			<p>{monsterStats.title}</p>
			<img src={monsterStats.image} className="monster-img" />
			<p
				className="health"
				style={{
					background: `linear-gradient(
		90deg,
		#cc0000 0%,
		#cc0000 ${(monsterStats.health / maxHealth) * 100}%,
		#000 ${(monsterStats.health / maxHealth) * 100 + 1}%
	)`,
				}}
			>
				Health: {monsterStats.health}
			</p>
			<p>Armor: {monsterStats.armor}</p>
			<p>Attack: {monsterStats.attack}</p>
		</div>
	);
};

export default Monster;
