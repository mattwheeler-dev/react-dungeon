import { useState, createContext } from "react";
import HeroFactory from "./components/HeroFactory";
import MonsterFactory from "./components/MonsterFactory";
import Scoreboard from "./components/Scoreboard";
import SelectHero from "./components/SelectHero";
import Battlefield from "./components/Battlefield";

export const AppContext = createContext("");

const App = () => {
	const [playerStats, setPlayerStats] = useState(HeroFactory(""));
	const [monsterStats, setMonsterStats] = useState(MonsterFactory(""));
	const [gameStatus, setGameStatus] = useState(false);
	const [playerTurn, setPlayerTurn] = useState(true);
	const [score, setScore] = useState(0);

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
					playerTurn,
					setPlayerTurn,
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
