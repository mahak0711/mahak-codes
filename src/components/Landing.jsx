import { Hero } from "./Hero";
import { Skills } from "./Skills";
import SkillsHead from "./SkillsHead";

export function Landing(){
    return(
        <>
        <Hero/>
        
        <SkillsHead/>
        <Skills  iconSlugs={['javascript', 'react', 'nodejs', 'python', 'java','git','github','adobepremierepro','adobephotoshop','bootstrap','bun','c','cplusplus',' canva','javascript','mysql','html5','css','nodedotjs'
            ,'mongodb','react','replit','vite','vercel','express','figma','canva','tailwindcss','typescript','firebase','linux','shadcnui',
        ]} />
        
        </>
        //drawer
        //hover card
    )
}