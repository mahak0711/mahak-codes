import ContactPage from "./Contacts";
import Footer from "./Footer";
import { Hero } from "./Hero";
import SkillsHead from "./SkillsHead";
import IconCloud from "./ui/icon-cloud";
import { ScrollDownButton } from "./ui/ScrollDownButton";

export function Landing(){
    return(
        <>
     <Hero/>
     <ScrollDownButton/>
     <ContactPage/>
        <Footer/>
        </>
        //drawer
        //hover card
    )
}