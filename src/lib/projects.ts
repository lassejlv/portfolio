interface Project {
  name: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    name: "Movie Swiper",
    description: "Discord bot that allows users to swipe between random movies and add them to a watch-later-list. Used by more than 3000+ people on discord!",
    link: "https://movieswiper.xyz"
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
