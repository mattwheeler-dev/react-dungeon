import { useContext } from "react";
import { AppContext } from "../App";
import "./GameOver.css";

const GameOver = () => {
	const {
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
			<h4>You defeated {score} monsters!</h4>
			<button className="new-game" onClick={startNewGame}>
				New Game
			</button>
		</section>
	);
};

export default GameOver;
