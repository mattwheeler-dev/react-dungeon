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
				image: slimeImg,
			};
		case "Skeleton":
			return {
				title: monster,
				health: 12,
				armor: 0,
				attack: 5,
				image: skeleImg,
			};
		case "Shroomer":
			return {
				title: monster,
				health: 10,
				armor: 0,
				attack: 7,
				image: shroomImg,
			};
	}
};

export default MonsterFactory;
