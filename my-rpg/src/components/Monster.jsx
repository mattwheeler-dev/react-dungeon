import { useState } from "react";
import MonsterFactory from "./MonsterFactory";
import "./Monster.css";

const monsters = ["Slime", "Skeleton", "Witch"];
const randomMonster = monsters[Math.floor(Math.random() * 3)];

const Monster = () => {
	const [monsterStats, setMonsterStats] = useState(
		MonsterFactory(randomMonster)
	);

	return (
		<div className="monster-card">
			<h2>Current Monster:</h2>
			<h3>{monsterStats.title}</h3>
			<h3>Health: {monsterStats.health}</h3>
			<h3>Armor: {monsterStats.armor}</h3>
			<h3>Attack: {monsterStats.attack}</h3>
		</div>
	);
};

export default Monster;
