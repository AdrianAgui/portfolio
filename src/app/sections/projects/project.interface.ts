export interface Project {
  id: number;
  nameLabel: string;
  descriptionLabel: string;
  url: string;
  image: string;
  techs: Tech[];
  repositories?: Repository;
  reverse: boolean;
}

interface Tech {
  title: string;
  img: string;
  alt: string;
}

interface Repository {
  frontend?: string;
  backend?: string;
}
