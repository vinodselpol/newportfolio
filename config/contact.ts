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
  twitter: '@VinodSelpol',
  site: 'https://portfolio-vinodselpol.vercel.app/',
  calendly: 'https://calendly.com/vinodselpol',
  links: {
    github: 'https://github.com/vinodselpol',
    linkedin: 'https://www.linkedin.com/in/vinod-krishna1/',
    twitter: 'https://twitter.com/VinodSelpol',
    youtube: '',
    email: 'mailto:vinodselpol@gmail.com',
    buymeacoffee: '',
  },
};
