import { useState, createContext } from "react";
import HeroFactory from "./components/HeroFactory";
import SelectHero from "./components/SelectHero";
import Player from "./components/Player";

export const AppContext = createContext("");

const App = () => {
	const [playerStats, setPlayerStats] = useState(HeroFactory(""));

	return (
		<>
			<h1>MW-Dev RPG</h1>
			<AppContext.Provider value={{ playerStats, setPlayerStats }}>
				<Player />
				<SelectHero />
			</AppContext.Provider>
		</>
	);
};

export default App;
