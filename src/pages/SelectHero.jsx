import { useContext } from "react";
import { AppContext } from "../App";
import HeroFactory from "../components/HeroFactory";
import NameInput from "../components/NameInput";
import "../assets/styles/SelectHero.css";

const SelectHero = () => {
	const {
        playerName,
		playerStats,
		setPlayerStats,
		monsterStats,
		setGameStatus,
		log,
		setLog,
	} = useContext(AppContext);
	const knight = HeroFactory("Knight");
	const rogue = HeroFactory("Rogue");
	const mage = HeroFactory("Mage");
	const heroes = [knight, rogue, mage];

	const handleSelect = (e) => {
		const cards = document.querySelectorAll(".hero-card");
		if (e.target == cards[0] || e.target.parentElement == cards[0]) {
			cards[0].classList.add("chosen");
			cards[1].classList.remove("chosen");
			cards[2].classList.remove("chosen");
			setPlayerStats(knight);
		} else if (e.target == cards[1] || e.target.parentElement == cards[1]) {
			cards[0].classList.remove("chosen");
			cards[1].classList.add("chosen");
			cards[2].classList.remove("chosen");
			setPlayerStats(rogue);
		} else if (e.target == cards[2] || e.target.parentElement == cards[2]) {
			cards[0].classList.remove("chosen");
			cards[1].classList.remove("chosen");
			cards[2].classList.add("chosen");
			setPlayerStats(mage);
		}
		return;
	};

	const startGame = () => {
		setLog([
			...log,
			`${playerName} the ${playerStats.title} has bravely entered the dungeon! They immediately encounter a ${monsterStats.title}!`,
		]);
		setGameStatus(true);
	};

	const heroCards = heroes.map((hero) => {
		return (
			<article
				className={`hero-card ${hero.title.toLowerCase()} `}
				onClick={handleSelect}
				key={hero.title}
			>
				<img src={hero.image} alt={hero.altText} />
				<div className="hero-text">
					<p className="class-title"> {hero.title}</p>
					<p>Health: {hero.health}</p>
					<p>Armor: {hero.armor}</p>
					<p>Attack: {hero.attack}</p>
				</div>
			</article>
		);
	});

	return (
		<section className="select-hero-container">
			<h2>Select Your Class</h2>
			{heroCards}
            <NameInput />
			<button
				className="start-btn"
				onClick={startGame}
				disabled={
					playerStats.title != "Knight" &&
					playerStats.title != "Rogue" &&
					playerStats.title != "Mage" || !playerName
				}
			>
				Start Game!
			</button>
		</section>
	);
};

export default SelectHero;
