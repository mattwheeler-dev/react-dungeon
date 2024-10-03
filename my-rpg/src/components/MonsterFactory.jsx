const MonsterFactory = (monster) => {
	switch (monster) {
		case "Slime":
			return {
				title: monster,
				health: 15,
				armor: 1,
				attack: 5,
			};
		case "Skeleton":
			return {
				title: monster,
				health: 12,
				armor: 0,
				attack: 3,
			};
		case "Witch":
			return {
				title: monster,
				health: 10,
				armor: 0,
				attack: 7,
			};
	}
};

export default MonsterFactory;
