import { Project } from "./interfaces";

export const projects: Project[] = [
    {
        id: 1,
        name: "IFMaker Laboratory System",
        short_name: "ifmaker-system",
        keywords: ["Angular", "Typescript", "RxJs", "LESS"],
        summary: "A system of material management and access control for Federal Institute Farroupilha maker laboratories",
        documentUrl: "ifmaker-system.md",
        skills: [
            "Angular Routing",
            "Input, Output Events",
            "Reactive Forms Module",
            "HTTPClient",
            "RxJs",
            "Lazy Loading"
        ],
        sourceCodeUrl: "https://github.com/sougabriel/ifmaker-system",
        viewUrl: "",
        imageUrl: "ifmaker-system.webp",
        contributors: []
    },
    {
        id: 2,
        name: "IFMaker Laboratory API",
        short_name: "ifmaker-api",
        keywords: ["MySQL", "Javascript", "ExpressJS", "Sequelize"],
        summary: "A RESTful Application Programming Interface (API) for Federal Institute Farroupilha maker laboratories system",
        documentUrl: "ifmaker-api.md",
        skills: ["Clean Architecture", "NodeJs Server", "RESTful API"],
        sourceCodeUrl: "https://github.com/sougabriel/ifmaker-api",
        viewUrl: "",
        imageUrl: "ifmaker-api.webp",
        contributors: []
    },

    {
        id: 3,
        name: "Theme Picker Library",
        short_name: "theme-picker",
        keywords: ["Angular", "Material Design", "RxJs", "Typescript"],
        summary: "An Angular library for manage styles dynamically and display a template menu with material design.",
        documentUrl: "theme-picker.md",
        skills: [
            "Angular Signals",
            "Angular Library Development",
            "Page Style Manager",
            "Open Source"
        ],
        sourceCodeUrl: "https://github.com/sougabriel/ngx-sougabriel-libs/tree/master/projects/ngx-theme-picker",
        viewUrl: "https://www.npmjs.com/package/ngx-theme-picker",
        imageUrl: "theme-picker.webp",
        contributors: []
    },
    {
        id: 4,
        name: "Cookie Popup Library",
        short_name: "cookie-popup",
        keywords: ["Angular", "Material Design", "RxJs", "Typescript"],
        summary: "An Angular library for easy display a cookie popup message or build a popup with a component.",
        documentUrl: "cookie-popup.md",
        skills: [
            "Angular Library Development",
            "Open Source",
            "LocalStorage"
        ],
        sourceCodeUrl: "https://github.com/sougabriel/ngx-sougabriel-libs/tree/master/projects/ngx-cookie-popup",
        viewUrl: "https://www.npmjs.com/package/ngx-cookie-popup",
        imageUrl: "cookie-popup.webp",
        contributors: []
    },
    {
        id: 5,
        name: "Tour Virtual IFFar-SVS",
        short_name: "tour-virtual-iffar",
        keywords: ["A-Frame", "CSS", "Javascript", "Virtual Reality"],
        summary: "A web application made for people who want to know more about the Instituto Federal Farroupilha - São Vicente do Sul",
        documentUrl: "tour-virtual-iffar.md",
        skills: ["A-Frame", "CSS", "Javascript", "Team Colaboration", "Team Work"],
        sourceCodeUrl: "https://github.com/dhDSouza/tour-virtual-iffar",
        viewUrl: "",
        imageUrl: "tour-virtual-iffar.webp",
        contributors: [
            {
                "name": "Gabriel de Souza",
                "url": "tres"
            }
        ]
    },
    {
        id: 6,
        name: "Bookstore API",
        short_name: "bookstore-api",
        keywords: ["NestJs", "Prisma ORM", "PostgreSQL", "Typescript"],
        summary: "A RESTful API of a simple bookstore made with NestJs and Prisma.IO, using postgresql as database.",
        documentUrl: "bookstore-api.md",
        skills: ["Asynchronous Programming", "CRUD", "HTTP Requests"],
        sourceCodeUrl: "",
        viewUrl: "",
        imageUrl: "bookstore-api.webp",
        contributors: []
    },
    {
        id: 7,
        name: "SpaceDagger",
        short_name: "space-dagger",
        keywords: ["Javascript", "JQuery", "CSS", "Web Game"],
        summary: "A simple pixelart rhythm game of spaceships made with Javascript and JQuery.",
        documentUrl: "spacedaggerjs.md",
        skills: ["Keyboard Events", "Interval Function", "Countdown"],
        sourceCodeUrl: "https://github.com/sougabriel/spaceDagger-js",
        viewUrl: "https://sougabriel.github.io/projects/spacedagger/index.html",
        imageUrl: "space-dagger.webp",
        contributors: []
    },
    {
        id: 8,
        name: "Simple Calculator Js",
        short_name: "simple-calculator",
        keywords: ["Javascript", "HTML", "CSS"],
        summary: "A simple calculator made with pure Javascript and without eval function.",
        documentUrl: "simple-calculatorjs.md",
        skills: ["Arrays Methods", "Javascript", "Responsive Design"],
        sourceCodeUrl: "https://github.com/sougabriel/simple-calculator-js",
        viewUrl: "https://sougabriel.github.io/projects/simplecalc/index.html",
        imageUrl: "simple-calculator-js.webp",
        contributors: []
    },
    {
        id: 9,
        name: "BMI Calculator",
        short_name: "bmi-calculator",
        keywords: ["Javascript", "AngularJS", "Bootstrap"],
        summary: "A simple page for calculate BMI using AngularJS and Bootstrap.",
        documentUrl: "bmi-calculator.md",
        skills: [""],
        sourceCodeUrl: "https://github.com/sougabriel/BMI-CalculatorJs",
        viewUrl: "https://sougabriel.github.io/projects/bmicalc/index.html",
        imageUrl: "bmi-calculator.webp",
        contributors: []
    },
    {
        id: 10,
        name: "Directory View PHP",
        short_name: "directory-view",
        keywords: ["PHP", "CSS", "List Directories"],
        summary: "This is a php index file to customize your user or php web server. This code will list all folders in your base server directory.",
        documentUrl: "directory-view-php.md",
        skills: ["PHP", "CSS"],
        sourceCodeUrl: "https://github.com/sougabriel/index-phpserver",
        viewUrl: "",
        imageUrl: "directory-php.webp",
        contributors: []
    }
] as const;