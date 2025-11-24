// ----------------------------------------------------------------------

export interface IProject {
  name: string;
  link?: string;
  type: "mobile app" | "desktop app" | "web app" | "website" | "ui/ux";
  techs: string[];
}

// ----------------------------------------------------------------------

const projects: IProject[] = [
  {
    name: "mBALING App",
    link: "https://github.com/amsolaiman/mbaling-capstone-client-mobile.git",
    type: "mobile app",
    techs: ["React Native", "Expo", "Typescript", "Nativewind"],
  },
  {
    name: "mBALING Admin",
    link: "https://github.com/amsolaiman/mbaling-capstone-client-desktop.git",
    type: "web app",
    techs: ["Next.js", "Material-UI", "Typescript"],
  },
  {
    name: "GTP website",
    type: "website",
    techs: ["Next.js", "Tailwind-CSS", "Typescript", "Builder.io", "ShadCN-UI"],
  },
];

export default projects;
