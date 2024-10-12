import { useContext } from "react";
import { AppContext } from "../App";
import "./GameOver.css";

const GameOver = () => {
	const { score } = useContext(AppContext);
	return (
		<section className="game-over">
			<h2>Game Over</h2>
			<h3>You defeated {score} monsters!</h3>
		</section>
	);
};

export default GameOver;
