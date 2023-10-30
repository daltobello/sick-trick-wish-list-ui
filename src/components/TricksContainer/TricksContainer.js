import "./TricksContainer.css"
import TrickCard from "../TrickCard/TrickCard"

function TricksContainer( {tricks} ) {
  const trickCards = tricks.map((trick) => {
    return <TrickCard 
    id={trick.id} 
    key={trick.id}
    name={trick.name} 
    obstacle={trick.obstacle}  
    stance={trick.stance}
    tutorial={trick.tutorial}
    />
  })

  return (
    <div className="trick-card-container">
      {trickCards}
    </div>
  )
}

export default TricksContainer