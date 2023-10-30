import "./Form.css";
import { useState } from "react";

function Form({ addTrick }) {

  const [stance, setStance] = useState("")
  const [trickName, setTrickName] = useState("")
  const [obstacle, setObstacle] = useState("")
  const [tutorial, setTutorial] = useState("")

  function submitTrick(event) {
    event.preventDefault();

    const newTrick = {
    stance: stance, 
    name:  trickName,
    obstacle: obstacle,
    tutorial:  tutorial, 
    }

    if(!stance.length || !trickName.length || !obstacle.length || !tutorial.length) {
      alert("Form is missing information. Please fill out all fields.")
    }

    addTrick(newTrick)
    clearInputs()

    function clearInputs() {
      setStance("")
      setTrickName("")
      setObstacle("")
      setTutorial("")
    }
  }


  return (
    <form>

      <label for="choose-stance">Choose Stance:</label>
      <select name='stance' onChange={(event) => setStance(event.target.value)}>
        <option value={stance}>Regular</option>
        <option value={stance}>Switch</option>
      </select>
      
      <input
      type="text"
      name="trick-name"
      placeholder="trick name"
      value={trickName}
      onChange={(event) => setTrickName(event.target.value)}
      />

    <label for="choose-obstacle">Choose Obstacle:</label>
      <select name='obstacle' onChange={(event) => setObstacle(event.target.value)}>
        <option value={obstacle}>Flat ground</option>
        <option value={obstacle}>Ledge</option>
        <option value={obstacle}>Rail</option>
        <option value={obstacle}>Stairs</option>
        <option value={obstacle}>Pool</option>
      </select>

      
      <input
      type="text"
      name="tutorial"
      placeholder="link to tutorial"
      value={tutorial}
      onChange={(event) => setTutorial(event.target.value)}
      />

    <button className="send-it-btn" onClick={(event) => submitTrick(event)}>SEND IT!</button>
    </form>
  );
}

export default Form;
