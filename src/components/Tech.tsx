import { useState } from "react";
import {
  SiBun,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVisualstudiocode,
  SiDrizzle,
  SiHono,
  SiShadcnui,
  SiTurso,
  SiZedindustries,
  SiAstro,
} from "react-icons/si";
import CoolifyIcon from "./CoolifyIcon";

const size = 30;

interface Tech {
  name: string;
  icon: JSX.Element;
}

const techs: Tech[] = [
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" size={size} />,
  },
  {
    name: "Bun.js",
    icon: <SiBun className="text-orange-200" size={size} />,
  },
  {
    name: "React",
    icon: <SiReact className="text-blue-500" size={size} />,
  },
  {
    name: "Hono",
    icon: <SiHono className="text-white hover:text-orange-400" size={size} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-white" size={size} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" size={size} />,
  },
  {
    name: "Astro",
    icon: <SiAstro className="text-orange-500" size={size} />,
  },
  {
    name: "Shadcn UI",
    icon: <SiShadcnui className="text-white" size={size} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500" size={size} />,
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-blue-500" size={size} />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-orange-500" size={size} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" size={size} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" size={size} />,
  },
  {
    name: "Go",
    icon: <SiGo className="text-sky-400" size={size} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" size={size} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" size={size} />,
  },
  {
    name: "Turso",
    icon: <SiTurso className="text-emerald-500" size={size} />,
  },
  {
    name: "Drizzle ORM",
    icon: <SiDrizzle className="text-white hover:text-lime-400" size={size} />,
  },
  {
    name: "Prisma ORM",
    icon: <SiPrisma className="text-white" size={size} />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-indigo-400" size={size} />,
  },
  {
    name: "Github",
    icon: <SiGithub className="text-white" size={size} />,
  },
  {
    name: "Zed",
    icon: <SiZedindustries className="text-white" size={size} />,
  },
  {
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode className="text-blue-500" size={size} />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-white" size={size} />,
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="text-teal-600" size={size} />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" size={size} />,
  },
  {
    name: "Coolify",
    icon: <CoolifyIcon />,
  },
  {
    name: "Railway",
    icon: <SiRailway className="text-white " size={size} />,
  },
  {
    name: "Ubuntu",
    icon: <SiUbuntu className="text-orange-500" size={size} />,
  },
];

export default function Tech() {
  const [techsList] = useState(techs);

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-5">
        {techsList.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 grayscale hover:filter-none transition duration-300 cursor-pointer"
          >
            <span className="hover:animate-spin duration-[1s]">
              {skill.icon}
            </span>
            <p className={`text-white mt-2 italic font-semibold`}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
