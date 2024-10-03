import { useContext } from "react";
import { AppContext } from "../App";
import HeroFactory from "./HeroFactory";
import "./SelectHero.css";

const SelectHero = () => {
	const { playerStats, setPlayerStats, setGameStatus } = useContext(AppContext);
	const knight = HeroFactory("Knight");
	const rogue = HeroFactory("Rogue");
	const mage = HeroFactory("Mage");

	const handleSelect = (e) => {
		const cards = document.querySelectorAll(".hero-card");
		if (e.target == cards[0] || e.target.parentElement == cards[0]) {
			setPlayerStats(knight);
		} else if (e.target == cards[1] || e.target.parentElement == cards[1]) {
			setPlayerStats(rogue);
		} else if (e.target == cards[2] || e.target.parentElement == cards[2]) {
			setPlayerStats(mage);
		}
		return;
	};

	const startGame = () => {
		setGameStatus(true);
	};

	return (
		<section className="select-hero-container">
			<h2>Select Your Hero</h2>
			<article className="hero-card" onClick={handleSelect}>
				<h3>Class: {knight.title}</h3>
				<h4>Health: {knight.health}</h4>
				<h4>Armor: {knight.armor}</h4>
				<h4>Attack: {knight.attack}</h4>
			</article>

			<article className="hero-card" onClick={handleSelect}>
				<h3>Class: {rogue.title}</h3>
				<h4>Health: {rogue.health}</h4>
				<h4>Armor: {rogue.armor}</h4>
				<h4>Attack: {rogue.attack}</h4>
			</article>

			<article className="hero-card" onClick={handleSelect}>
				<h3>Class: {mage.title}</h3>
				<h4>Health: {mage.health}</h4>
				<h4>Armor: {mage.armor}</h4>
				<h4>Attack: {mage.attack}</h4>
			</article>

			<button
				className="start-btn"
				onClick={startGame}
				disabled={
					playerStats.title != "Knight" &&
					playerStats.title != "Rogue" &&
					playerStats.title != "Mage"
				}
			>
				Start Game!
			</button>
		</section>
	);
};

export default SelectHero;
