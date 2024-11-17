import { useState } from "react";
import "../assets/styles/Modals.css"

const Guide = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleGuide = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<button className="guide-btn" onClick={toggleGuide}>
				Guide
			</button>
			<div className={`guide ${isOpen && "open"}`}>
            <button className="guide-close" onClick={toggleGuide}>
				X
			</button>
				<h3>Guide</h3>
				<p>
					Greetings Adventurer! Your quest is to defeat as many monsters as you can before
					your hero perishes!
				</p>
				<h4>How it works:</h4>
				<ul>
					<li>Choose your class and name your hero, then start the game</li>
					<li>
						Each hero has a basic attack skill which will deal damage based on
						their attack, and a unique secondary skill that will deal half of their attack damage
						and stun the current monster for 1 turn
					</li>
					<li>
						After each turn, the monster will attack (unless stunned of course)
					</li>
					<li>
						When a monster{`'`}s health reaches 0 it will be defeated and a new
						monster will appear
					</li>
					<li>
						When the hero{`'`}s health reaches 0... well, that{`'`}s game over
					</li>
					<li>Your score is the amount of monsters you were able to defeat</li>
				</ul>
				<h4>Tips:</h4>
				<ul>
					<li>
						Armor reduces all damage taken (3 Attack - 1 Armor = 2 damage)
					</li>
					<li>Skill cooldowns do not reset on monster defeat</li>
					<li>The combat log can help keep track of what happens</li>
					<li>
						The monster is always selected at random, so every adventure will be
						different
					</li>
				</ul>
			</div>
		</>
	);
};

export default Guide;
