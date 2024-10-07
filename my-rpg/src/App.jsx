import { useState, createContext } from "react";
import HeroFactory from "./components/HeroFactory";
import SelectHero from "./components/SelectHero";
import Battlefield from "./components/Battlefield";
import Scoreboard from "./components/Scoreboard";

export const AppContext = createContext("");

const App = () => {
	const [playerStats, setPlayerStats] = useState(HeroFactory(""));
	const [gameStatus, setGameStatus] = useState(false);
	const [score, setScore] = useState(0);

	return (
		<>
			<h1>MW-Dev{`'`}s Dungeon</h1>
			<AppContext.Provider
				value={{
					playerStats,
					setPlayerStats,
					gameStatus,
					setGameStatus,
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
