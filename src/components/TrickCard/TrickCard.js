import "./TrickCard.css"

function TrickCard( {id, name, obstacle, stance, tutorial} ) {
  
  return (
      <ul className="trick-card">
        <li className="name">{name}</li>
        <li className="obstacle">{obstacle}</li>
        <li className="stance">{stance}</li>
        <li className="tutorial">{tutorial}</li>
      </ul>
  )
}

export default TrickCard