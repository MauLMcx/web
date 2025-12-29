
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}
