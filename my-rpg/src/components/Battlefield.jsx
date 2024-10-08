import Player from "./Player";
import Monster from "./Monster";
import SkillBtns from "./SkillBtns";
import CombatLog from "./CombatLog";
import "./Battlefield.css";

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
