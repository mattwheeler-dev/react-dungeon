import knightImg from "../assets/knight.png";
import rogueImg from "../assets/rogue.png";
import mageImg from "../assets/mage.png";

const HeroFactory = (title) => {
	switch (title) {
		case "Knight":
			return {
				title: title,
				health: 20,
				armor: 2,
				attack: 5,
				skills: ["Attack", "Shield Bash"],
				image: { knightImg },
			};
		case "Rogue":
			return {
				title: title,
				health: 17,
				armor: 1,
				attack: 7,
				skills: ["Attack", "Smoke Bomb"],
				image: { rogueImg },
			};
		case "Mage":
			return {
				title: title,
				health: 15,
				armor: 0,
				attack: 9,
				skills: ["Attack", "Ice Shard"],
				image: { mageImg },
			};
		default:
			return {
				title: "Newbie",
				health: 5,
				armor: 0,
				attack: 1,
			};
	}
};

export default HeroFactory;
