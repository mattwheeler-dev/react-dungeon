import Player from "./Player";
import Monster from "./Monster";
import "./Battlefield.css";

const Battlefield = () => {
	return (
		<section className="battlefield">
			<Player />
			<Monster />
		</section>
	);
};

export default Battlefield;
