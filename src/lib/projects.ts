interface Project {
  name: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: 'HRT Stack',
    description:
      'A full-stack web application stack for building high-quality and scalable web applications. Uses technologies like ono x TRPC for backend. React, Tailwind & Shadcn UI for frontend (with file based routing).',
    link: 'https://github.com/lassejlv/hono-trpc',
  },
  {
    name: 'NPM Package Search',
    description: 'Nice and clean npm package searcher and viewer. Build using React, Tailwind CSS, Shadcn UI and the NPM API.',
    link: 'https://github.com/lassejlv/npm-package-search',
  },
  {
    name: 'Next Blog',
    description:
      'A blog with an admin panel for creating, updating and deleting posts. Uses Next.js, Drizzle ORM, Turso, React, Tailwind CSS and Shadcn UI.',
    link: 'https://github.com/lassejlv/next-blog',
  },
  {
    name: 'Actionfile',
    description: 'Simplfied way to run tasks. Use an .toml file to define tasks and run them with the actionfile CLI.',
    link: 'https://github.com/lassejlv/actionfile',
  },
  {
    name: 'lassejlv.dk',
    description: 'My personal website. Built with Astro, Tailwind CSS and Framer Motion.',
    link: 'https://github.com/lassejlv/portfolio',
  },
];
