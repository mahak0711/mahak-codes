import { GitHubContributionCalendar } from "./github-contribution-calendar";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import SkillsHead from "./SkillsHead";

export function Landing(){
    return(
        <>
        <Hero/>
        
        <SkillsHead/>
        <Skills  iconSlugs={['javascript', 'react', 'nodejs', 'python', 'java','git','github','adobepremierepro','adobephotoshop','bootstrap','bun','c','cplusplus','javascript','mysql','html5','nodedotjs'
            ,'mongodb','react','replit','vite','vercel','express','figma','canva','tailwindcss','typescript','firebase','linux','shadcnui',
        ]} />
        <GitHubContributionCalendar username="mahak0711" />
        </>
        //drawer
        //hover card
    )
}