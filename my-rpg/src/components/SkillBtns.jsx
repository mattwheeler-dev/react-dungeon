import { useContext } from "react";
import { AppContext } from "../App";

const SkillBtns = () => {
	const {
		playerStats,
		monsterStats,
		setMonsterStats,
		playerTurn,
		setPlayerTurn,
	} = useContext(AppContext);

	const handleSkill = (e) => {
		console.log(e.target.textContent);
		if (e.target.textContent == "Attack") {
			setMonsterStats(...monsterStats, (health -= playerStats.attack));
		}
		// setPlayerTurn(!playerTurn);
	};

	return (
		<div className="skill-btns">
			<button disabled={!playerTurn} onClick={handleSkill}>
				{playerStats.skills[0]}
			</button>
			<button disabled={!playerTurn} onClick={handleSkill}>
				{playerStats.skills[1]}
			</button>
		</div>
	);
};

export default SkillBtns;
