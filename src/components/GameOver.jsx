import { useContext } from "react";
import { AppContext } from "../App";
import CombatLog from "./CombatLog";
import "./GameOver.css";

const GameOver = () => {
	const {
        playerName,
        playerStats,
		setPlayerStats,
		setGameStatus,
		setLog,
		score,
		setScore,
		setGameOver,
	} = useContext(AppContext);
    
	const startNewGame = () => {
		setPlayerStats("");
		setGameStatus(false);
		setLog([""]);
		setScore(0);
		setGameOver(false);
	};

	return (
		<section className="game-over">
			<h3>Game Over</h3>
			<h4>{playerName} defeated {score} monsters!</h4>
            <img src={playerStats.image} alt={playerStats.altText} />
			<button className="new-game" onClick={startNewGame}>
				New Game
			</button>
            <CombatLog />
		</section>
	);
};

export default GameOver;
