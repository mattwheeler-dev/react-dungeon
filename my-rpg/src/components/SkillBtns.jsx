import { useContext } from "react";
import { AppContext } from "../App";

let cooldown = 0;

const SkillBtns = () => {
	const {
		playerStats,
		monsterStats,
		setMonsterStats,
		playerTurn,
		setPlayerTurn,
		setStunned,
	} = useContext(AppContext);

	const handleSkill = (e) => {
		switch (e.target.textContent) {
			case "Attack":
				setMonsterStats({
					...monsterStats,
					health:
						monsterStats.health - (playerStats.attack - monsterStats.armor),
				});
				setStunned(false);
				if (cooldown > 0) {
					cooldown -= 1;
				}
				break;
			case "Shield Bash":
				setMonsterStats({
					...monsterStats,
					health: monsterStats.health - (3 - monsterStats.armor),
				});
				setStunned(true);
				cooldown = 2;
				break;
			case "Smoke Bomb":
				setMonsterStats({
					...monsterStats,
					health: monsterStats.health - (3 - monsterStats.armor),
				});
				setStunned(true);
				cooldown = 2;
				break;
			case "Ice Shard":
				setMonsterStats({
					...monsterStats,
					health: monsterStats.health - (3 - monsterStats.armor),
				});
				setStunned(true);
				cooldown = 2;
				break;
		}
		setPlayerTurn(!playerTurn);
	};

	return (
		<div className="skill-btns">
			<button
				className="attack-btn"
				title={`Basic Attack, deals ${playerStats.attack} damage`}
				disabled={!playerTurn}
				onClick={handleSkill}
			>
				{playerStats.skills[0]}
			</button>
			<button
				className={`skill-btn ${playerStats.title.toLowerCase()}`}
				title={`Deals 3 damage and stuns the monster for 1 turn`}
				disabled={cooldown > 0}
				onClick={handleSkill}
			>
				{playerStats.skills[1]}
			</button>
		</div>
	);
};

export default SkillBtns;
