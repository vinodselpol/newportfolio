export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@karan_6864',
  site: 'karanpratapsingh.com',
  calendly: 'https://calendly.com/vinodselpol',
  links: {
    github: 'https://github.com/vinodselpol',
    linkedin: 'https://www.linkedin.com/in/vinod-krishna1/',
    twitter: 'https://twitter.com/VinodSelpol',
    youtube: 'https://www.youtube.com/c/KaranPratapSingh',
    email: 'mailto:vinodselpol@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/karanps',
  },
};
