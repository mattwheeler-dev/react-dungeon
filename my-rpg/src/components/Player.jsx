import { useContext } from "react";
import { AppContext } from "../App";
import "./Player.css";

const Player = () => {
	const { playerStats } = useContext(AppContext);

	return (
		<div className="player-card">
			<h2>{playerStats.title}</h2>
			{playerStats.image && (
				<img src={playerStats.image} alt={playerStats.altText} />
			)}
			<p>Health: {playerStats.health}</p>
			<p>Armor: {playerStats.armor}</p>
			<p>Attack: {playerStats.attack}</p>
		</div>
	);
};

export default Player;
