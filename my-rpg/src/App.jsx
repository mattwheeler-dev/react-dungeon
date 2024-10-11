import { useState, useEffect, createContext } from "react";
import HeroFactory from "./components/HeroFactory";
import MonsterFactory from "./components/MonsterFactory";
import Scoreboard from "./components/Scoreboard";
import SelectHero from "./components/SelectHero";
import Battlefield from "./components/Battlefield";

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

	// monster turn
	useEffect(() => {
		setTimeout(() => {
			if (playerTurn) {
				return;
			} else if (monsterStats.health < 1) {
				setMonsterStats(MonsterFactory(randomMonster));
				setPlayerTurn(true);
			} else if (stunned && !playerTurn) {
				setPlayerTurn(true);
			} else {
				setPlayerStats({
					...playerStats,
					health:
						playerStats.health - (monsterStats.attack - playerStats.armor),
				});
				setPlayerTurn(true);
			}
		}, 1500);
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
				<Scoreboard />
				{!gameStatus && <SelectHero />}
				{gameStatus && <Battlefield />}
			</AppContext.Provider>
		</>
	);
};

export default App;
