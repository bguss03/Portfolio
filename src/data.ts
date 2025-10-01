import Skill1 from "./assets/images/figma.png";
import Skill2 from "./assets/images/github.png";
import Skill3 from "./assets/images/html.png";
import Skill4 from "./assets/images/css.png";
import Skill5 from "./assets/images/js.png";
import Skill6 from "./assets/images/tailwind.png";
import Skill7 from "./assets/images/bootstrap.png";
import Skill8 from "./assets/images/reactjs.png";
import Skill9 from "./assets/images/php.png";
import Skill11 from "./assets/images/MySQL.png";
import Skill12 from "./assets/images/MongoDB.png";
import Skill13 from "./assets/images/ts-logo-512.png";
import Tools1 from "./assets/images/vscode.png"
import Tools2 from "./assets/images/docker.png";
import WebWisata from "./assets/images/WebWisata.jpeg"
import BookShelf from "./assets/images/BookShelfApp.png"
import Portfolio from "./assets/images/portfolio.png"
// import Sertifikat from "./assets/file/Sertifikat_Dicoding.pdf"
import SertifikatFoto from "./assets/images/Dicoding.png";
import Figma from "./assets/images/Ui Ux.jpeg"
import Nexa from "./assets/images/Sertifikat Magang.jpeg"
import BNSP from "./assets/images/Sertifikat BNSP.jpeg"
import Lia from "./assets/images/Sertifikat Lia.png"

export const Tools = [
    {
        id : 1,
        name : "VSCODE",
        image : Tools1,
        ket : "Code Editor",
    },
    {
        id : 10,
        name : "Docker",
        image : Tools2,
        ket : "Container"
    },
];

export const listSkill = [
    {
        id : 1,
        name : "Figma",
        image : Skill1,
        ket : "Desain App",
    },
    {
        id : 2,
        name : "Github",
        image : Skill2,
        ket : "Repository",
    },
    {
        id : 3,
        name : "Html",
        image : Skill3,
        ket : "Struktur Web",
    },
    {
        id : 4,
        name : "Css",
        image : Skill4,
        ket : "Desain Web",
    },
    {
        id : 5,
        name : "JavaScript",
        image : Skill5,
        ket : "Language",
    },
    {
        id : 13,
        name : "TypeScript",
        image : Skill13,
        ket : "Language",
    },
    {
        id : 6,
        name : "Tailwind",
        image : Skill6,
        ket : "Framework",
    },
    {
        id : 7,
        name : "Bootstrap",
        image : Skill7,
        ket : "Framework",
    },
    {
        id : 8,
        name : "ReactJS",
        image : Skill8,
        ket : "Library",
    },
    {
        id : 9,
        name : "PHP",
        image : Skill9,
        ket : "Language"
    },
    {
        id : 11,
        name : "MySQL",
        image : Skill11,
        ket : "Database"
    },
    {
        id : 12,
        name : "MongoDB",
        image : Skill12,
        ket : "Database"
    },
];

export const Project = [
    {
        id : 1,
        name : "Semarang tourism website",
        ket : "This is my final project for my graduation grade.",
        image : WebWisata,
        tools : ["Html", "Css", "Bootstrap 5", "Javascript", "PHP"]
    },    
    {
        id : 2,
        name : "Book Shelf App",
        ket : "This is a project from Dicoding.",
        image : BookShelf,
        tools : ["Html", "Css", "JavaScript"]
    },    
    {
        id : 3,
        name : "Personal Portfolio",
        ket : "This is my personal portfolio website.",
        image : Portfolio,
        tools : ["Typescript", "ReactJs", "Tailwindcss"]
    },    
    {
        id : 4,
        name : "Aplication Mobile Kedai Sesawi",
        ket : "This is a UI UX project that I made for the 2nd semester UAS assessment.",
        image : Figma,
        tools : ["Figma"]
    },    
];

export const Certificate = [
     {
        id : 1,
        name : "Certificate Dicoding",
        ket : "Certificate: Web Front-End Development (Beginner Level) Dicoding Indonesia.",
        image : SertifikatFoto,
        gridClass : 'md:col-span-1 md:row-span-1',
    },
     {
       id : 2,
       name : "Certificate Lia",
       ket : "Lia Language Institute Certificate.",
       image : Lia,
        gridClass : 'md:col-span-1 md:row-span-1',
   },
    // {
    //     id : 3,
    //     name : "Internship Certificate",
    //     ket : "vocational school internship certificate.",
    //     image : Nexa,
    //     gridClass : 'md:col-span-2 md:row-span-2',

    // },
    // {
    //     id : 4,
    //     name : "Certificate Of Competence",
    //     ket : "Junior Office Operator.",
    //     image : BNSP,
    //     gridClass : 'md:col-span-2 md:row-span-2',
    // },
   
]
