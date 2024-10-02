import HeroFactory from "./HeroFactory";
import "./SelectHero.css";

const SelectHero = () => {
	const knight = HeroFactory("Knight");
	const rogue = HeroFactory("Rogue");
	const mage = HeroFactory("Mage");

	return (
		<section className="select-hero-container">
			<h2>Select Your Hero</h2>
			<article className="hero-card">
				<h3>Class: {knight.title}</h3>
				<h4>Health: {knight.health}</h4>
				<h4>Armor: {knight.armor}</h4>
				<h4>Attack: {knight.attack}</h4>
			</article>

			<article className="hero-card">
				<h3>Class: {rogue.title}</h3>
				<h4>Health: {rogue.health}</h4>
				<h4>Armor: {rogue.armor}</h4>
				<h4>Attack: {rogue.attack}</h4>
			</article>

			<article className="hero-card">
				<h3>Class: {mage.title}</h3>
				<h4>Health: {mage.health}</h4>
				<h4>Armor: {mage.armor}</h4>
				<h4>Attack: {mage.attack}</h4>
			</article>
		</section>
	);
};

export default SelectHero;
