import projectsImg from "../logos/projects/robot5.jpg"
import gameImg from "../logos/gamingTemp.png"
import aboutImg from "../logos/aboutTemp.jpg"
import contactImg from "../logos/contactTemp.png"

export const HomeImage = [
    {title: "ProjectsImg", url: "/projects/collection", imgName: projectsImg, cName: "home-image-project", arrow: "See All Projects"},
    {title: "GamesImg", url: "/games/collection", imgName: gameImg, cName: "home-image-game", arrow: "See All Games"},
    {title: "AboutImg", url: "/about", imgName: aboutImg, cName: "home-image-about", arrow: "About Me"},
    {title: "ContactImg", url: "/contact", imgName: contactImg, cName: "home-image-contact", arrow: "Contact Me"}
]

export const HomeContent = [
    {title: "Projects", url: "/projects/collection", pContent: "Paragraph Content 1", titleName: "home-title-project", paragraphName: "home-content-project"},
    {title: "Games", url: "/games/collection", pContent: "Paragraph Content 2", titleName: "home-title-game", paragraphName: "home-content-game"},
    {title: "About", url: "/about", pContent: "Paragraph Content 3", titleName: "home-title-about", paragraphName: "home-content-about"},
    {title: "Contact", url: "/contact", pContent: "Paragraph Content 4", titleName: "home-title-contact", paragraphName: "home-content-contact"}
]