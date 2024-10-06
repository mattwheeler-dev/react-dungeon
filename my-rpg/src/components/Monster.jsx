import { useState } from "react";
import MonsterFactory from "./MonsterFactory";
import "./Monster.css";

const monsters = ["Slime", "Skeleton", "Shroomer"];
const randomMonster = monsters[Math.floor(Math.random() * 3)];

const Monster = () => {
	const [monsterStats, setMonsterStats] = useState(
		MonsterFactory(randomMonster)
	);

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
