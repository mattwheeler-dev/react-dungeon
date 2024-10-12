import { useState, useEffect, createContext } from "react";
import HeroFactory from "./components/HeroFactory";
import MonsterFactory from "./components/MonsterFactory";
import Scoreboard from "./components/Scoreboard";
import SelectHero from "./components/SelectHero";
import Battlefield from "./components/Battlefield";
import GameOver from "./components/GameOver";

export const AppContext = createContext("");

const monsters = ["Slime", "Skeleton", "Shroomer"];

const App = () => {
	const randomMonster = monsters[Math.floor(Math.random() * 3)];
	const [playerStats, setPlayerStats] = useState(HeroFactory(""));
	const [monsterStats, setMonsterStats] = useState(
		MonsterFactory(randomMonster)
	);
	const [gameStatus, setGameStatus] = useState(false);
	const [log, setLog] = useState([""]);
	const [playerTurn, setPlayerTurn] = useState(true);
	const [stunned, setStunned] = useState(false);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	// monster turn
	useEffect(() => {
		setTimeout(() => {
			if (playerTurn) {
				return;
			} else if (monsterStats.health < 1) {
				setMonsterStats(MonsterFactory(randomMonster));
				setScore(score + 1);
				setStunned(false);
				setPlayerTurn(true);
				setLog([
					...log,
					`The ${monsterStats.title} was defeated! ${playerStats.title} has encountered a ${randomMonster}!`,
				]);
			} else if (stunned && !playerTurn) {
				setLog([
					...log,
					`${monsterStats.title} was stunned so it could not attack!`,
				]);
				setPlayerTurn(true);
			} else {
				setPlayerStats({
					...playerStats,
					health:
						playerStats.health - (monsterStats.attack - playerStats.armor),
				});
				setLog([
					...log,
					`${monsterStats.title} attacked ${playerStats.title} for ${
						monsterStats.attack - playerStats.armor
					} damage`,
				]);
				setPlayerTurn(true);
			}
		}, 1500);

		if (playerStats.health < 1) {
			setGameOver(true);
		}
	}, [playerTurn]);

	return (
		<>
			<h1>MW-Dev{`'`}s Dungeon</h1>
			<AppContext.Provider
				value={{
					playerStats,
					setPlayerStats,
					monsterStats,
					setMonsterStats,
					gameStatus,
					setGameStatus,
					log,
					setLog,
					playerTurn,
					setPlayerTurn,
					stunned,
					setStunned,
					score,
					setScore,
				}}
			>
				{!gameStatus && !gameOver && <SelectHero />}
				{gameStatus && !gameOver && (
					<>
						<Scoreboard />
						<Battlefield />
					</>
				)}
				{gameOver && <GameOver />}
			</AppContext.Provider>
		</>
	);
};

export default App;
