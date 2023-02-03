import { Colors } from './colors';

export enum Stack {
  // Languages
  // go,
  typescript,
  javascript,
  python,

  // Frontend
  reactjs,
  nextjs,

  // reactnative,

  // Backend
  // graphql,
  node,
  express,
  // django,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  // kafka,

  // Databases
  // arangodb,
  // redis,
  postgres,
  mongo,
  mysql,

  // Tools
  // docker,
  // kubernetes,
  // terraform,
}

export const WorkStack = [
  // Stack.go,
  Stack.typescript,
  Stack.javascript,
  Stack.python,
  Stack.reactjs,
  Stack.nextjs,
  Stack.aws,
  Stack.gcp,
  Stack.mongo,
  Stack.express,
  Stack.mysql,
  Stack.node,
  // Stack.kubernetes,
  // Stack.docker,
  // Stack.terraform,
  Stack.nats,
  // Stack.kafka,
  // Stack.graphql,
  Stack.postgres,
  // Stack.redis,
  // Stack.arangodb,
  // Stack.reactnative,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  // [Stack.go]: {
  //   value: 'Go',
  //   color: Colors.go,
  // },
  [Stack.reactjs]: {
    value: 'Reactjs',
    color: Colors.react,
  },

  [Stack.nextjs]: {
    value: 'Nextjs',
    color: Colors.nextjs,
  },
  // [Stack.reactnative]: {
  //   value: 'React Native',
  //   color: Colors.reactnative,
  // },
  // [Stack.graphql]: {
  //   value: 'GraphQL',
  //   color: Colors.graphql,
  // },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Nodejs',
    color: Colors.kafka,
  },
  [Stack.express]: {
    value: 'Express',
    color: Colors.node,
  },
  // [Stack.django]: {
  //   value: 'Django',
  //   color: Colors.django,
  // },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  // [Stack.kafka]: {
  //   value: 'Kafka',
  //   color: Colors.kafka,
  // },
  // [Stack.arangodb]: {
  //   value: 'ArangoDB',
  //   color: Colors.arangodb,
  // },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.mysql]: {
    value: 'Mysql',
    color: Colors.terraform,
  },
  // [Stack.redis]: {
  //   value: 'Redis',
  //   color: Colors.redis,
  // },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  // [Stack.docker]: {
  //   value: 'Docker',
  //   color: Colors.docker,
  // },
  // [Stack.kubernetes]: {
  //   value: 'Kubernetes',
  //   color: Colors.kubernetes,
  // },
  // [Stack.terraform]: {
  //   value: 'Terraform',
  //   color: Colors.terraform,
  // },
};
