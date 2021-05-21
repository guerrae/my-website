//Image Import for Projects
import robotImg from "../../logos/projects/robot7.jpg"
import passManagerImg from "../../logos/temp_img.jpg"
import mirrorImg from "../../logos/projects/smartMirror1.jpg"
import employeeImg from "../../logos/projects/employee0.png"
import cnpImg from "../../logos/projects/cnp1.jpg"
//Image Import for Games
import ticTacImg from "../../logos/games/TicTacToeLogo.PNG"
import snakeImg from "../../logos/games/snakeLogo.png"
import pingPongImg from "../../logos/temp_img.jpg"
import spaceImg from "../../logos/temp_img.jpg"

//Card Componet data for Projects
export const projectComponenet = [
    {
        imgName: cnpImg, 
        title: "CenterPoint Fall 19", 
        content: "Front-end and Back-end Ticket Tracker", 
        urlName1: "",
        url1: "", 
        urlName2: "",
        url2: "",
        url3: "/projects/centerPointEnergy-fall19"
    },
    {
        imgName: employeeImg, 
        title: "Employee Portal", 
        content: "Employee Web App with Authentication", 
        urlName1: "GITHUB",
        url1: "https://github.com/guerrae/SoftwareEngineering-Employee_Portal/tree/master", 
        urlName2: "LIVE DEMO",
        url2: "https://guerrae.github.io/SoftwareEngineering-Employee_Portal/", 
        url3: "/projects/employee-portal"
    },
    {
        imgName: robotImg, 
        title: "Autonomous Robot", 
        content: "Maze Solving Robot with PID Controller", 
        urlName1: "GITHUB",
        url1: "https://github.com/guerrae/Autonomous-Robot", 
        urlName2: "YOUTUBE",
        url2: "https://www.youtube.com/channel/UCKEIn0wp3FEjn6iIAoU80Fg", 
        url3: "/projects/maze-solving-robot"
    },
    {
        imgName: cnpImg, 
        title: "CenterPoint Summer 20", 
        content: "Developed Web Automated Programs", 
        urlName1: "",
        url1: "", 
        urlName2: "",
        url2: "", 
        url3: "/projects/centerpoint-summer20"
    },
    {
        imgName: mirrorImg, 
        title: "Smart Mirror", 
        content: "Raspberry Pi Controlled Smart Mirror", 
        urlName1: "",
        url1: "", 
        urlName2: "",
        url2: "",
        url3: "/projects/smart-mirror"
    },
    {
        imgName: passManagerImg, 
        title: "Password Manager", 
        content: "Keep your Passwords Safe and Local", 
        urlName1: "",
        url1: "", 
        urlName2: "",
        url2: "",
        url3: "/projects/password-manager"
    },
]

//Card Componet data for Games
export const gameComponenet = [
    {
        imgName: ticTacImg, 
        title: "Tic-Tac-Toe", 
        content: "Single Player Tic-Tac-Toe", 
        urlName: "GITHUB", 
        url: "https://github.com/",
        url2: "/games/tictactoe-game"
    },
    {
        imgName: snakeImg, 
        title: "Snake", 
        content: "Single Player Snake Game", 
        urlName: "GITHUB", 
        url: "https://github.com/", 
        url2: "/games/snake-game"
    },
    {
        imgName: pingPongImg, 
        title: "Ping-Pong", 
        content: "Single Player Ping-Pong", 
        urlName: "", 
        url: "", 
        url2: "/games/collection"
    },
    {
        imgName: spaceImg, 
        title: "Space Invaders", 
        content: "Single Player Space invaders", 
        urlName: "", 
        url: "", 
        url2: "/games/collection"
    },
]