import { Certificate } from "./interfaces";

export const certifications: Certificate[] = [
    {
        name: "Javascript Essentials 1 & 2",
        institute: "Cisco Network Academy",
        description: "",
        credentialUrl: "https://www.credly.com/badges/726c1c66-ea8f-4a30-9d01-8911d931f6eb",
        issued: new Date("2024-04-15"),
        skills: [
            "Array Techniques",
            "Notation Nuances",
            "Object Manipulation",
            "Set and Map",
            "Testing Techniques"
        ]
    },
    {
        name: "Python Essentials 1 & 2",
        institute: "Cisco Network Academy",
        description: "",
        credentialUrl: "https://www.credly.com/badges/01c94dd7-ce43-433a-b340-be580453006c",
        issued: new Date("2024-04-03"),
        skills: [
            "Classes",
            "Iterators",
            "Object Oriented Programming",
            "Packages",
            "Polymorphism"
        ]
    },
    {
        name: "Introduction to Cybersecurity",
        institute: "Cisco Network Academy",
        description: "",
        credentialUrl: "https://www.credly.com/badges/f5ab160e-e812-45fb-b272-9becf432b202",
        issued: new Date("2023-04-03"),
        skills: [
            "Cyber Best Practices",
            "Cybersecurity",
            "Network Vulnerabilities",
            "Privacy And Data Confidentiality",
            "Threat Detection"
        ]
    },
    {
        name: "CCNA: Introduction to Networks",
        institute: "Cisco Network Academy",
        description: "",
        credentialUrl: "https://www.credly.com/badges/07c4a858-d15a-494b-a485-7fecf9d19195",
        issued: new Date("2022-12-08"),
        skills: [
            "IP connectivity",
            "IP services",
            "IP Subnetting",
            "Network Fundamentals",
            "Security Fundamentals"
        ]
    }
] as const;
