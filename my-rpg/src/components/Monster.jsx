import { useContext } from "react";
import { AppContext } from "../App";
import "./Monster.css";

const Monster = () => {
	const { playerStats, monsterStats, stunned } = useContext(AppContext);
	const stunIcon = playerStats.skillImg;

	return (
		<div className="monster card">
			{stunned && <img src={stunIcon} className="stun-icon" />}
			<p>{monsterStats.title}</p>
			<img src={monsterStats.image} className="monster-img" />
			<p>Health: {monsterStats.health}</p>
			<p>Armor: {monsterStats.armor}</p>
			<p>Attack: {monsterStats.attack}</p>
		</div>
	);
};

export default Monster;
