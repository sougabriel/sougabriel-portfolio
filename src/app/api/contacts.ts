import { Contact } from "./interfaces";

export const contacts: Contact[] = [
    {
        type: "E-Mail",
        url: "mailto:gabriel.dsouzapro@gmail.com",
        iconUrl: "icons/social/mailbox.svg",
        iconAlt: "mailbox icon"
    },
    {
        type: "LinkedIn",
        url: "https://www.linkedin.com/in/sougabriels/",
        iconUrl: "icons/social/linkedin.svg",
        iconAlt: "LinkedIn Logo"
    },
    {
        type: "Github",
        url: "https://github.com/sougabriel/",
        iconUrl: "icons/social/github.svg",
        iconAlt: "GitHub Logo"
    }
] as const;
