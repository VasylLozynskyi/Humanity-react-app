import { GoalMissionSection } from "./GoalMissionSection"
import { OrganizationsSection } from "./OrganizationsSection"
import { SolutionsSection } from "./SolutionsSection"

export const AboutUsContentSection = ({ data }) => {
  return (
    <>
      <SolutionsSection data={data.solutionsection} />
      <OrganizationsSection data={data.organizationssection} />
      <GoalMissionSection data={data.goal_mission_section} />
    </>
  )
}