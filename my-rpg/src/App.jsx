import { useState, createContext } from "react";
import HeroFactory from "./components/HeroFactory";
import SelectHero from "./components/SelectHero";
import Player from "./components/Player";
import Monster from "./components/Monster";

export const AppContext = createContext("");

const App = () => {
	const [playerStats, setPlayerStats] = useState(HeroFactory(""));
	const [gameStatus, setGameStatus] = useState(false);

	return (
		<>
			<h1>MW-Dev RPG</h1>
			<AppContext.Provider
				value={{ playerStats, setPlayerStats, gameStatus, setGameStatus }}
			>
				<Player />
				{!gameStatus && <SelectHero />}
				{gameStatus && <Monster />}
			</AppContext.Provider>
		</>
	);
};

export default App;
