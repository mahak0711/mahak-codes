import { GitHubContributionCalendar } from "./github-contribution-calendar";
import { Hero } from "./Hero";
import SkillsHead from "./SkillsHead";
import IconCloud from "./ui/icon-cloud";
import { ScrollDownButton } from "./ui/ScrollDownButton";

export function Landing(){
    return(
        <>
     <Hero/>
     <ScrollDownButton/>
    <SkillsHead />
     <IconCloud iconSlugs={["javascript", "typescript", "react", "nodejs", "html5", "css3", "git",
    "github", "figma", "bootstrap", "tailwindcss", "mongodb", "firebase",
    "express", "vite", "vercel", "linux", "java", "python","nextdotjs","postgresql","prisma"]}/> 
        
        {/* <GitHubContributionCalendar username="mahak0711" /> */}
        </>
        //drawer
        //hover card
    )
}