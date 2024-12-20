import { useState, useEffect, createContext } from "react";
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	query,
	orderBy,
	limit,
} from "firebase/firestore";
import HeroFactory from "./components/HeroFactory";
import MonsterFactory from "./components/MonsterFactory";
import Scoreboard from "./components/Scoreboard";
import SelectHero from "./pages/SelectHero";
import Battlefield from "./pages/Battlefield";
import GameOver from "./pages/GameOver";
import Guide from "./pages/Guide";
import Leaderboard from "./pages/Leaderboard";

export const AppContext = createContext("");

const firebaseConfig = {
	apiKey: "AIzaSyA0l14UCW0YvqCoeL8l2BCawmlEROUwx_g",
	authDomain: "react-dungeon-616f2.firebaseapp.com",
	projectId: "react-dungeon-616f2",
	storageBucket: "react-dungeon-616f2.firebasestorage.app",
	messagingSenderId: "866416045499",
	appId: "1:866416045499:web:7f19836ad2664b8f87a89e",
	measurementId: "G-5YQH28P9J9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const scoresRef = collection(db, "scores");
const leaders = query(scoresRef, orderBy("Score", "desc"), limit(10));

const monsters = ["Slime", "Skeleton", "Shroomer"];

const App = () => {
	const [playerName, setPlayerName] = useState("");
	const [playerStats, setPlayerStats] = useState(HeroFactory(""));
	const randomMonster = monsters[Math.floor(Math.random() * 3)];
	const [monsterStats, setMonsterStats] = useState(
		MonsterFactory(randomMonster)
	);
	const [gameStatus, setGameStatus] = useState(false);
	const [log, setLog] = useState([""]);
	const [playerTurn, setPlayerTurn] = useState(true);
	const [stunned, setStunned] = useState(false);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [leaderboard, setLeaderboard] = useState([]);

	// fetch leaderboard
	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(leaders);
			const data = [];
			querySnapshot.forEach((doc) => {
				data.push(doc.data());
			});
			setLeaderboard(data);
		};
		fetchData();
	}, [gameOver]);

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
					`The ${monsterStats.title} was defeated! ${playerName} now faces a ${randomMonster}!`,
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
					`${monsterStats.title} attacked ${playerName} for ${
						monsterStats.attack - playerStats.armor
					} damage`,
				]);
				setPlayerTurn(true);
			}
		}, 1500);

		if (playerStats.health < 1) {
			setLog([
				...log,
				`Oh no! ${playerName} the ${playerStats.title} has been defeated... `,
			]);
			setGameOver(true);
			setMonsterStats(MonsterFactory(randomMonster));
			try {
				const docRef = addDoc(collection(db, "scores"), {
					"Hero Name": `${playerName}`,
					Class: `${playerStats.title}`,
					Score: `${score}`,
				});
				console.log(`Document written with ID: ${docRef.id}`);
			} catch (e) {
				console.error(
					`Error adding ${playerName}'s score to leaderboard...`,
					e
				);
			}
		}
	}, [playerTurn]);

	return (
		<>
			{!gameStatus && <h1>MW-Dev{`'`}s Dungeon</h1>}
			<Guide />

			<AppContext.Provider
				value={{
					playerName,
					setPlayerName,
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
					gameOver,
					setGameOver,
					leaderboard,
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

				<Leaderboard />
			</AppContext.Provider>
		</>
	);
};

export default App;
