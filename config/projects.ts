import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
  Github?: string;
  URL?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Netflix Clone',
    slug: 'netflixclone',
    banner: '/static/projects/netflix/banner.png',
    website: 'https://netflix-clone-3c593.web.app/',
    description:
      'Netflix clone built using Reactjs and typescript. The webapp has many functionalities including payment gateway integrated using Stripe API. It fetches dynammic data about movies from IMDB api endpoint . I had a lot of fun building this. I got to play with lots of different technologies while growing my reactjs knowledge.',
    shortDescription: 'Netflix clone',
    repository: 'https://github.com/vinodselpol/Netflix--clone',
    stack: [Stack.typescript, Stack.javascript, Stack.reactjs, Stack.gcp],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/netflix/screenshots/screen1.png',
      '/static/projects/netflix/screenshots/screen2.png',
      '/static/projects/netflix/screenshots/screen3.png',
      '/static/projects/netflix/screenshots/screen4.png',
      '/static/projects/netflix/screenshots/screen5.png',
    ],
    deployment: {
      Github: 'https://github.com/vinodselpol/Netflix--clone',
      URL: 'https://netflix-clone-3c593.web.app/',
    },
    subProjects: [],
  },
  {
    title: 'University Ecommerce-store',
    slug: 'ecommercestore',
    banner: '/static/projects/ecommerce/banner.png',
    website: '',
    description:
      'Built a  university store where students can sell/buy the items on the website. The webapp is built using PERN stack (Postgres, Express, React, Node) and it has many functionalities including authenthication using  JWT and payment integration Stipe API. ',
    shortDescription: 'Ecommerce store',
    repository: 'https://github.com/vinodselpol/Ecommerce-store',
    stack: [
      Stack.javascript,
      Stack.reactjs,
      Stack.node,
      Stack.express,
      Stack.postgres,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/ecommerce/screenshots/screen1.png',
      '/static/projects/ecommerce/screenshots/screen2.png',
      '/static/projects/ecommerce/screenshots/screen3.png',
      '/static/projects/ecommerce/screenshots/screen4.png',
      '/static/projects/ecommerce/screenshots/screen5.png',
      '/static/projects/ecommerce/screenshots/screen6.png',
      '/static/projects/ecommerce/screenshots/screen7.png',
      '/static/projects/ecommerce/screenshots/screen8.png',
      '/static/projects/ecommerce/screenshots/screen9.png',
    ],
    deployment: {
      Github: 'https://github.com/vinodselpol/Ecommerce-store',
    },
    subProjects: [],
  },

  {
    title: 'Stock Screener',
    slug: 'stockscreener',
    banner: '/static/projects/stock/banner.png',
    website: 'https://stock-marke-d8bf0.web.app/',
    description:
      'Stock-Screener app built using ReactJS displaying the real time stock data and also market news.',
    shortDescription: 'Stock screener',
    repository: 'https://github.com/vinodselpol/Stock-market-app',
    stack: [Stack.javascript, Stack.reactjs, Stack.express, Stack.node],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/stock/screenshots/screen1.png',
      '/static/projects/stock/screenshots/screen2.png',
    ],
    deployment: {
      Github: 'https://github.com/vinodselpol/Stock-market-app',
      URL: 'https://stock-marke-d8bf0.web.app/',
    },
    subProjects: [],
  },
  {
    title: 'Airbnb Clone',
    slug: 'airbnb',
    banner: '/static/projects/airbnb/banner.png',
    website: 'https://airbnb-build-pi3h.vercel.app/',
    description:
      'Airbnb frontend clone built using NextJS and typescript. it contains various functionalties. Implemented static generation and server side rendering.',
    shortDescription: 'airbnb frontend',
    repository: 'https://github.com/vinodselpol/Airbnb-build',
    stack: [Stack.javascript, Stack.reactjs, Stack.typescript, Stack.nextjs],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/airbnb/screenshots/screen1.png',
      '/static/projects/airbnb/screenshots/screen2.png',
      '/static/projects/airbnb/screenshots/screen3.png',
      '/static/projects/airbnb/screenshots/screen4.png',
    ],
    deployment: {
      Github: 'https://github.com/vinodselpol/Airbnb-build',
      URL: 'https://airbnb-build-pi3h.vercel.app/',
    },
    subProjects: [],
  },
  {
    title: 'Covid Tracker',
    slug: 'covidtracker',
    banner: '/static/projects/covid/banner.png',
    website: 'https://covid-19-tracker-e6390.firebaseapp.com/',
    description:
      'Covid tracker displaying real time covid data build using React JS for better understanding of Context API, hooks and functional components. Used chartJS and leaflet for interactive data visualization.',
    shortDescription: 'covid tracker',
    repository: 'https://github.com/vinodselpol/Covid-19-Tracker',
    stack: [Stack.javascript, Stack.reactjs],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/covid/screenshots/screen1.png',
      '/static/projects/covid/screenshots/screen2.png',
      '/static/projects/covid/screenshots/screen3.png',
    ],
    deployment: {
      Github: 'https://github.com/vinodselpol/Covid-19-Tracker',
      URL: 'https://covid-19-tracker-e6390.firebaseapp.com/',
    },
    subProjects: [],
  },
  {
    title: 'Hulu Clone',
    slug: 'huluclone',
    banner: '/static/projects/hulu/banner.png',
    website: 'https://hulu-clone-d08a5.firebaseapp.com/',
    description:
      'Hulu web-app which has functionality to filter movies based on preferences and fetches latest data from external APIs.',
    shortDescription: 'hulu frontend',
    repository: 'https://github.com/vinodselpol/Hulu-clone',
    stack: [Stack.javascript, Stack.reactjs, Stack.typescript, Stack.nextjs],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/hulu/screenshots/screen1.png',
      '/static/projects/hulu/screenshots/screen2.png',
    ],
    deployment: {
      Github: 'https://github.com/vinodselpol/Hulu-clone',
      URL: 'https://hulu-clone-d08a5.firebaseapp.com/',
    },
    subProjects: [],
  },
  {
    title: 'Amazon E-commerce store',
    slug: 'amazonclone',
    banner: '/static/projects/amazon/banner.png',
    website: 'https://clone-65613.web.app/',
    description:
      'Amazon app with ReactJS (using hooks and React Context API), NodeJS, ExpressJS, and Firebase authentication, and payment functionality using Stripe',
    shortDescription: 'Amazon clone',
    repository: 'https://github.com/vinodselpol/Amazon-clone',
    stack: [
      Stack.javascript,
      Stack.reactjs,
      Stack.gcp,
      Stack.aws,
      Stack.express,
      Stack.node,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/amazon/screenshots/screen1.png',
      '/static/projects/amazon/screenshots/screen2.png',
      '/static/projects/amazon/screenshots/screen3.png',
      '/static/projects/amazon/screenshots/screen4.png',
    ],
    deployment: {
      Github: 'https://github.com/vinodselpol/Amazon-clone',
      URL: 'https://clone-65613.web.app/',
    },
    subProjects: [],
  },
];
