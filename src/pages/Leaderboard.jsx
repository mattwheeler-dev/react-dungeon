import { useState, useContext } from "react";
import { AppContext } from "../App";
import "../assets/styles/Modals.css"


const Leaderboard = () => {
    const {
        leaderboard
    } = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);

	const toggleHoh = () => {
		setIsOpen(!isOpen);
	};

    const heroes = leaderboard.map((hero, idx) => {
        return (
        <tr key={`${hero["Hero Name"]} ${idx}`}>
            <td>{idx + 1}</td>
            <td>{hero["Hero Name"]}</td>
            <td>{hero["Class"]}</td>
            <td>{hero["Score"]}</td>
        </tr>
        )
    })

	return (
		<>
			<button className="hoh-btn" onClick={toggleHoh}>
				Hall of Heroes
			</button>
			<div className={`hoh ${isOpen && "open"}`}>
                <button className="hoh-close" onClick={toggleHoh}>X</button>
				<h3>Hall of Heroes</h3>
                <p>Our 10 mightiest heroes</p>
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Hero</th>
                        <th>Class</th>
                        <th>Score</th>
                    </tr>
                    <tbody>
                    {heroes}
                    </tbody>
                </table>
			</div>
		</>
	);
};

export default Leaderboard;
