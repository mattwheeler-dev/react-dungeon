import { useContext } from "react";
import { AppContext } from "../App";
import "./Player.css";

const Player = () => {
	const { playerStats } = useContext(AppContext);

	return (
		<div className="player-card">
			<h2>Player{`'`}s current stats:</h2>
			{playerStats.image && (
				<img src={playerStats.image} alt={playerStats.altText} />
			)}
			<p>Class: {playerStats.title}</p>
			<p>Health: {playerStats.health}</p>
			<p>Armor: {playerStats.armor}</p>
			<p>Attack: {playerStats.attack}</p>
			{playerStats.skills && (
				<p>Skills: {`${playerStats.skills[0]}, ${playerStats.skills[1]}`}</p>
			)}
		</div>
	);
};

export default Player;
