import { GitHubContributionCalendar } from "./github-contribution-calendar";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import SkillsHead from "./SkillsHead";

export function Landing(){
    return(
        <>
        <Hero/>
        
        
        <GitHubContributionCalendar username="mahak0711" />
        </>
        //drawer
        //hover card
    )
}