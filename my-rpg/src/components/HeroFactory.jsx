const HeroFactory = (title) => {
	switch (title) {
		case "Knight":
			return {
				title: title,
				health: 20,
				armor: 2,
				attack: 5,
			};
		case "Rogue":
			return {
				title: title,
				health: 17,
				armor: 1,
				attack: 7,
			};
		case "Mage":
			return {
				title: title,
				health: 15,
				armor: 0,
				attack: 9,
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
