import { ElementTeamCard } from "./ElementTeamCard";
import "./scss/teamcontentsection.scss"

export const TeamContentSection = ({ data }) => {
  return (
    <div className="teamcontentsection">
        {data.map(el => <ElementTeamCard key={el.key} data={el} />)}
    </div>
  )
}