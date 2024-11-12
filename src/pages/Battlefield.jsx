import Player from "../components/Player";
import Monster from "../components/Monster";
import SkillBtns from "../components/SkillBtns";
import CombatLog from "../components/CombatLog";
import "../assets/styles/Battlefield.css";

const Battlefield = () => {
	return (
		<section className="battlefield">
			<Player />
			<Monster />
			<SkillBtns />
			<CombatLog />
		</section>
	);
};

export default Battlefield;
