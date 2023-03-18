import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const birthyear = 1997;
const date = new Date();
const currentYear = date.getFullYear();
const age = (currentYear - birthyear);
console.log(age)

export default {
    name: "Micke Simolin",
    title: "Enthusiastic developer",
    birthday: "11th of April 1997",
    email: "micke.simolin@gmail.com",
    location: "Helsinki, Finland",
    about_me: "I'm an energetic, goal-oriented and a fun guy from Helsinki, Finland. In my free time I like to play golf, football and ice hockey. In addition to sports, I like to hang out with my friends, code, play chess and practice red teaming in simulated cybersecurity environments. I love making coding projects (like this resume) and I hope to be a developer someday.",
    workhistory: [
        {
            title: "Corporate Customer Supporter - Danske Bank A/S, Suomen sivuliike",
            date: "May 2021 - Present",
            description: "Technical support for business customers from May to September 2021. Promoted in September to second level support, with focus on training personnell, large business customers, resolving complicated technical issues together with IT, project work in r&d and assisting the Finnish police with investigations.",
        },
        {
            title: "Webshop Service Advisor - Bauhaus & Co Ky",
            date: "May 2018 - May 2021",
            description: "Customer service via e-mail, phone and chat. After September 2018 I focused mainly on handling customer claims with stakeholders such as credit providers, logistics providers and product suppliers.",
        },
        {
            title: "Worker in Prisma Hyvinkää - HOK-Elanto",
            date: "October - December 2017",
            description: "Maintaining bottle return machines, the drink section and making product orders. In addition, I did cashier work and customer service.",
        },
        {
            title: "Seller in Prisma Riihimäki - Osuuskauppa Hämeenmaa",
            date: "April - August 2016",
            description: "Cashier, customer service, shelving products and maintaining/cleaning the store."
        },
        {
            title: "Seller - Lidl Suomi Ky",
            date: "June - August 2015",
            description: "Cashier, shelving products and maintaining/cleaning the store."
        },
        {
            title: "Seasonal worker - Bauhaus & Co Ky",
            date: "June 2013 & June 2014",
            description: "Renovating model cabins, customer service and unloading product loads."
        },

    ],

    education: [
        {
            title: "University of Helsinki MOOC",
            date: "2022 - Present",
            description: "Studying Full Stack Open, Python, data-analysis with Python and cybersecurity.",
        },
        {
            title: "Finnish Defence Forces - Finnish Navy",
            date: "2017",
            description: "Military service in Finnish Navy coastal fleet. I was a steersman on the Finnish flagship MLC Hämeenmaa (02). Graduated with commendable grades.",
        },
        {
            title: "Riihimäen Lukio",
            date: "2016",
            description: "Graduated from Riihimäki high school.",
        },
    ],

    socials: {
        GitHub: {
            link: "https://github.com/ekc1m",
            text: "GitHub",
            icon: <GitHubIcon />,
        },
        Instagram: {
            link: "https://www.instagram.com/mickerasmus/",
            text: "Instagram",
            icon: <InstagramIcon />,
        },
        LinkedIn: {
            link: "https://www.linkedin.com/in/micke-simolin-684ab115a",
            text: "LinkedIn",
            icon: <LinkedInIcon />,
        },
    },

    skills: [
        {
            title: 'Languages',
            description: [
                'Finnish - Native',
                'English - Excellent',
                'Swedish - Good',
            ],
        },
        {
            title: "Coding",
            description: [
                'Python - Basics',
                'React.js - Basics',
                'Bash - Basics'
            ],
        },
        {
            title: "IT Skills",
            description: [
                'Git & GitHub',
                'Windows, macOS & Linux',
                'Microsoft 365'
            ],
        },
    ],
};
