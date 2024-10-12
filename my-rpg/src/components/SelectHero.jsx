import { useContext } from "react";
import { AppContext } from "../App";
import HeroFactory from "./HeroFactory";
import "./SelectHero.css";

const SelectHero = () => {
	const {
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
			`${playerStats.title} has encountered a ${monsterStats.title}!`,
		]);
		setGameStatus(true);
	};

	return (
		<section className="select-hero-container">
			<h2>Select Your Hero</h2>
			<article className="hero-card" onClick={handleSelect}>
				<img src={knight.image} alt={knight.altText} />
				<div className="hero-text">
					<p className="class-title"> {knight.title}</p>
					<p>Health: {knight.health}</p>
					<p>Armor: {knight.armor}</p>
					<p>Attack: {knight.attack}</p>
					<p>Skills: {`${knight.skills[0]}, ${knight.skills[1]}`}</p>
				</div>
			</article>

			<article className="hero-card" onClick={handleSelect}>
				<img src={rogue.image} alt={rogue.altText} />
				<div className="hero-text">
					<p className="class-title"> {rogue.title}</p>
					<p>Health: {rogue.health}</p>
					<p>Armor: {rogue.armor}</p>
					<p>Attack: {rogue.attack}</p>{" "}
					<p>Skills: {`${rogue.skills[0]}, ${rogue.skills[1]}`}</p>
				</div>
			</article>

			<article className="hero-card" onClick={handleSelect}>
				<img src={mage.image} alt={mage.altText} />
				<div className="hero-text">
					<p className="class-title"> {mage.title}</p>
					<p>Health: {mage.health}</p>
					<p>Armor: {mage.armor}</p>
					<p>Attack: {mage.attack}</p>{" "}
					<p>Skills: {`${mage.skills[0]}, ${mage.skills[1]}`}</p>
				</div>
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
