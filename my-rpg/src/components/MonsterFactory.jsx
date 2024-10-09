import slimeImg from "../assets/slime.png";
import skeleImg from "../assets/skeleton.png";
import shroomImg from "../assets/shroomer.png";

const MonsterFactory = (monster) => {
	switch (monster) {
		case "Slime":
			return {
				title: monster,
				health: 15,
				armor: 1,
				attack: 3,
				stunned: false,
				image: slimeImg,
				altText: "Blue and orange slime monster",
			};
		case "Skeleton":
			return {
				title: monster,
				health: 12,
				armor: 0,
				attack: 5,
				stunned: false,
				image: skeleImg,
				altText: "Skeleton holding a  sword",
			};
		case "Shroomer":
			return {
				title: monster,
				health: 10,
				armor: 0,
				attack: 7,
				stunned: false,
				image: shroomImg,
				altText: "Orange mushroom monster",
			};
	}
};

export default MonsterFactory;
