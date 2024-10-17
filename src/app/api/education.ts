import { Education } from "./interfaces";

export const education: Education[] = [
    {
        institute: "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha (IFFar)",
        course: "Undergraduate Degree - Analysis and Systems Development",
        subarea: "Computer Science",
        skills: ["Java", "Data Structure", "Database Magenamant", "Software Engineering", "Angular"],
        description: "",
        startDate: new Date("2021-02-18"),
        endDate: new Date("2023-12-20")
    }
] as const;
