export interface Project {
    id?: number;
    name: string;
    keywords: string[];
    resume: string;
    documentUrl: string;
    skills?: string[];
    sourceCodeUrl?: string;
    viewUrl?: string;
    imageUrl: string;
    contributors?: string[];
}
