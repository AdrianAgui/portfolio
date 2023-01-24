import { Project } from './project.interface';

export const projects: Project[] = [
  {
    id: 4,
    nameLabel: 'projects.gamerburst.title',
    descriptionLabel: 'projects.gamerburst.info',
    url: 'https://gamer-burst.vercel.app/',
    image: 'assets/img/gamerburst.png',
    techs: [
      { title: 'React', img: 'assets/icons/react.png', alt: 'React' },
      { title: 'Typescript', img: 'assets/icons/typescript.png', alt: 'Typescript' },
      { title: 'Vite', img: 'assets/icons/vite.png', alt: 'Vite' },
      { title: 'Material UI', img: 'assets/icons/mui.png', alt: 'MUI' },
      { title: 'TailwindCSS', img: 'assets/icons/tailwind.png', alt: 'TailwindCSS' }
    ],
    repositories: {
      frontend: 'https://github.com/AdrianAgui/gamer-burst'
    },
    reverse: true
  },
  {
    id: 3,
    nameLabel: 'projects.pokegen.title',
    descriptionLabel: 'projects.pokegen.info',
    url: 'https://pokegen.vercel.app',
    image: 'assets/img/pokegen.png',
    techs: [
      { title: 'React', img: 'assets/icons/react.png', alt: 'React' },
      { title: 'NextJS', img: 'assets/icons/nextjs.png', alt: 'NextJS' },
      { title: 'TailwindCSS', img: 'assets/icons/tailwind.png', alt: 'TailwindCSS' }
    ],
    repositories: {
      frontend: 'https://github.com/AdrianAgui/pokedex-gen'
    },
    reverse: false
  },
  {
    id: 2,
    nameLabel: 'projects.wallapop.title',
    descriptionLabel: 'projects.wallapop.info',
    url: 'https://wallapop-frontend-test.vercel.app',
    image: 'assets/img/wallapop.png',
    techs: [
      { title: 'Angular', img: 'assets/icons/angular.png', alt: 'A' },
      { title: 'Typescript', img: 'assets/icons/typescript.png', alt: 'TS' },
      { title: 'Sass', img: 'assets/icons/sass.png', alt: 'SASS' },
      { title: 'HTML5', img: 'assets/icons/html.png', alt: 'HTML' }
    ],
    repositories: {
      frontend: 'https://github.com/AdrianAgui/wallapop-frontend-test'
    },
    reverse: true
  },
  {
    id: 1,
    nameLabel: 'projects.dummycoin.title',
    descriptionLabel: 'projects.dummycoin.info',
    url: 'https://dummycoin.vercel.app',
    image: 'assets/img/dummycoin.png',
    techs: [
      { title: 'Angular', img: 'assets/icons/angular.png', alt: 'A' },
      { title: 'Typescript', img: 'assets/icons/typescript.png', alt: 'TS' },
      { title: 'Blockchain', img: 'assets/icons/blockchain.png', alt: 'BTC' },
      { title: 'NodeJS', img: 'assets/icons/node.png', alt: 'node' }
    ],
    repositories: {
      frontend: 'https://github.com/AdrianAgui/dummycoin-frontend',
      backend: 'https://github.com/AdrianAgui/dummycoin-backend'
    },
    reverse: false
  }
];
