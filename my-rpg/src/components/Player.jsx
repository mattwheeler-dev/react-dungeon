import { useState } from "react";
import HeroFactory from "./HeroFactory";
import "./Player.css";

const Player = () => {
	const [playerStats, setPlayerStats] = useState(HeroFactory(""));

	return (
		<div className="player-card">
			<h2>Player{`'`}s current stats:</h2>
			<h3>Class: {playerStats.title}</h3>
			<h3>Health: {playerStats.health}</h3>
			<h3>Armor: {playerStats.armor}</h3>
			<h3>Attack: {playerStats.attack}</h3>
		</div>
	);
};

export default Player;
