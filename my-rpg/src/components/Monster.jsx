import { useContext } from "react";
import { AppContext } from "../App";
import "./Monster.css";

const Monster = () => {
	const { monsterStats } = useContext(AppContext);

	return (
		<div className="monster-card">
			<p>{monsterStats.title}</p>
			<img src={monsterStats.image} />
			<p>Health: {monsterStats.health}</p>
			<p>Armor: {monsterStats.armor}</p>
			<p>Attack: {monsterStats.attack}</p>
		</div>
	);
};

export default Monster;
