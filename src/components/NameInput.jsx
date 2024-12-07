import { useContext } from "react"
import { AppContext } from "../App"

const NameInput = () => {
    const { setPlayerName } = useContext(AppContext)

    const handleInput = (e) => {
        setPlayerName(e.target.value)
    }

return <div className="name-input">
    <label htmlFor="name">Name Your Hero</label>
    <input type="text" id="name" placeholder="Newbie" autoComplete="off" onChange={handleInput}/> </div>
}

export default NameInput