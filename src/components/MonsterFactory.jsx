import slimeImg from "../assets/images/slime.png";
import skeleImg from "../assets/images/skeleton.png";
import shroomImg from "../assets/images/shroomer.png";

const MonsterFactory = (monster) => {
	switch (monster) {
		case "Slime":
			return {
				title: monster,
				health: 15,
				armor: 1,
				attack: 3,
				image: slimeImg,
				altText: "Blue and orange slime monster",
			};
		case "Skeleton":
			return {
				title: monster,
				health: 12,
				armor: 0,
				attack: 5,
				image: skeleImg,
				altText: "Skeleton holding a  sword",
			};
		case "Shroomer":
			return {
				title: monster,
				health: 10,
				armor: 0,
				attack: 7,
				image: shroomImg,
				altText: "Orange mushroom monster",
			};
	}
};

export default MonsterFactory;
