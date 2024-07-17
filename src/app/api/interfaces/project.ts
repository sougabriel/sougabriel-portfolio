export interface Project {
    id?: number;
    name: string;
    keywords: string[];
    resume: string;
    description: string;
    skills?: string[];
    sourceCodeUrl?: string;
    viewUrl?: string;
    imageUrl: string;
    contributors?: string[];
}
