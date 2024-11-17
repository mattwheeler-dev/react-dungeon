import { useContext } from "react";
import { AppContext } from "../App";
import HeroFactory from "../components/HeroFactory";
import "../assets/styles/Player.css";

const Player = () => {
	const { playerName, playerStats, playerTurn, gameOver } = useContext(AppContext);
	const maxHealth = HeroFactory(`${playerStats.title}`).health;

	return (
		<div
			className={`player card ${playerStats.title.toLowerCase()} ${
				playerTurn && "turn"
			}`}
		>
			<h3>{playerName} the {playerStats.title}</h3>
			{playerStats.image && (
				<img src={playerStats.image} alt={playerStats.altText} />
			)}
            { !gameOver && 
                <>
                    <p
                        className="health"
                        style={{
                            background: `linear-gradient(
                            90deg,
                            #bd0000 0%,
                            #bd0000 ${(playerStats.health / maxHealth) * 100}%,
                            #000 ${(playerStats.health / maxHealth) * 100 + 1}%)`,
                        }}
                    >
                        Health: {playerStats.health}
                    </p>
                    <p>Armor: {playerStats.armor}</p>
                    <p>Attack: {playerStats.attack}</p>
                </>
            }
		</div>
	);
};

export default Player;
