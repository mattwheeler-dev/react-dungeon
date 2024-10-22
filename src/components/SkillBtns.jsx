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
		log,
		setLog,
	} = useContext(AppContext);

	const handleSkill = (e) => {
		if (e.target.textContent == "Attack") {
			setMonsterStats({
				...monsterStats,
				health: monsterStats.health - (playerStats.attack - monsterStats.armor),
			});
			setLog([
				...log,
				`${playerStats.title} attacks ${monsterStats.title} for ${
					playerStats.attack - monsterStats.armor
				} damage.`,
			]);
			setStunned(false);
			if (cooldown > 0) {
				cooldown -= 1;
			}
		} else {
			setMonsterStats({
				...monsterStats,
				health: monsterStats.health - (3 - monsterStats.armor),
			});
			setLog([
				...log,
				`${playerStats.title} used ${playerStats.skills[1]}, dealing ${
					3 - monsterStats.armor
				} damage and stunning ${monsterStats.title} for 1 turn.`,
			]);
			setStunned(true);
			cooldown = 2;
		}
		setPlayerTurn(!playerTurn);
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
				className={`skill-btn ${playerStats.title.toLowerCase()}`}
				disabled={cooldown > 0 || !playerTurn}
				onClick={handleSkill}
			>
				{playerStats.skills[1]}
			</button>
		</div>
	);
};

export default SkillBtns;
