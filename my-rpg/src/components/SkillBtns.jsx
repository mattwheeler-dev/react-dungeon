import { useContext } from "react";
import { AppContext } from "../App";

let cooldown = 0;

const SkillBtns = () => {
	const {
		playerStats,
		setPlayerStats,
		monsterStats,
		setMonsterStats,
		playerTurn,
		setPlayerTurn,
	} = useContext(AppContext);

	const monsterTurn = () => {
		if (monsterStats.stunned) {
			setPlayerTurn(true);
		} else {
			setPlayerStats({
				...playerStats,
				health: playerStats.health - (monsterStats.attack - playerStats.armor),
			});
			setPlayerTurn(true);
		}
	};

	const handleSkill = (e) => {
		switch (e.target.textContent) {
			case "Attack":
				setMonsterStats({
					...monsterStats,
					health:
						monsterStats.health - (playerStats.attack - monsterStats.armor),
				});
				break;
			case "Shield Bash":
				setMonsterStats({
					...monsterStats,
					health: monsterStats.health - (3 - monsterStats.armor),
					stunned: true,
				});
				break;
			case "Smoke Bomb":
				setMonsterStats({
					...monsterStats,
					health: monsterStats.health - (3 - monsterStats.armor),
					stunned: true,
				});
				break;
			case "Ice Shard":
				setMonsterStats({
					...monsterStats,
					health: monsterStats.health - (3 - monsterStats.armor),
					stunned: true,
				});
				break;
		}
		setPlayerTurn(!playerTurn);
		monsterTurn();
	};

	return (
		<div className="skill-btns">
			<button
				className="attack-btn"
				disabled={!playerTurn}
				onClick={handleSkill}
			>
				{playerStats.skills[0]}
			</button>
			<button
				className="skill-btn"
				disabled={cooldown > 0}
				onClick={handleSkill}
			>
				{playerStats.skills[1]}
			</button>
		</div>
	);
};

export default SkillBtns;
