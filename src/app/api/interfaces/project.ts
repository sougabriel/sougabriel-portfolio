import { Contributor } from "./contributor";

export interface Project {
    id?: number;
    name: string;
    short_name: string;
    keywords: string[];
    summary: string;
    documentUrl: string;
    skills?: string[];
    sourceCodeUrl?: string;
    viewUrl?: string;
    imageUrl: string;
    contributors?: Contributor[];
}
