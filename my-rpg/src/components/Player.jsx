import { useContext } from "react";
import { AppContext } from "../App";
import "./Player.css";

const Player = () => {
	const { playerStats } = useContext(AppContext);

	return (
		<div className="player-card">
			<h2>Player{`'`}s current stats:</h2>
			{playerStats.image && <img src={playerStats.image} />}
			<h3>Class: {playerStats.title}</h3>
			<h3>Health: {playerStats.health}</h3>
			<h3>Armor: {playerStats.armor}</h3>
			<h3>Attack: {playerStats.attack}</h3>
		</div>
	);
};

export default Player;
