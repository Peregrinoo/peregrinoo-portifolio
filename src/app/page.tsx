import LandingPagePresentation from "@/modules/Landing-page/steps/landing-page.presentation";
import LandingPageAboutMe from "@/modules/Landing-page/steps/landing-page.about-me";
import LandingPageProjects from "@/modules/Landing-page/steps/landing-page.projects";
import LandingPageContact from "@/modules/Landing-page/steps/landing-page.contact";

export default function Home() {
    return(
        <>
            <LandingPagePresentation />
            <LandingPageAboutMe />
            <LandingPageProjects />
            <LandingPageContact/>
        </>
    )
}
