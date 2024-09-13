import { ImageCarousel } from "@shared/carousel/imageCarousel";

export interface Office {
    name: string,
    short_name: string;
    summary: string,
    technologies: string[],
    documentUrl: string,
    images: ImageCarousel[],
    thumbnail: string
}