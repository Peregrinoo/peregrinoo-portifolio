import LandingPagePresentation from "@/modules/Landing-page/steps/landing-page.presentation";
import LandingPageAboutMe from "@/modules/Landing-page/steps/landing-page.about-me";
import LandingPageProjects from "@/modules/Landing-page/steps/landing-page.projects";
import LandingPageRecommendations from "@/modules/Landing-page/steps/landing-page.recommendations";
import LandingPageContact from "@/modules/Landing-page/steps/landing-page.contact";

export default function Home() {
    return(
        <>
            <LandingPagePresentation />
            <LandingPageAboutMe />
            <LandingPageProjects />
            <LandingPageRecommendations/>
            <LandingPageContact/>\
        </>
    )
}