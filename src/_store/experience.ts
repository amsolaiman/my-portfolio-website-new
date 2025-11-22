// ----------------------------------------------------------------------

export interface IExperience {
  title: string;
  startDate: Date;
  endDate: Date | null;
  isCurrent: boolean;
  employer: string;
  employerLink: string | null;
}

// ----------------------------------------------------------------------

const experience: IExperience[] = [
  {
    title: "Frontend Developer Intern",
    startDate: new Date(2022, 8, 5),
    endDate: new Date(2023, 10, 28),
    isCurrent: false,
    employer: "AP Global IT Solutions, Inc.",
    employerLink: "https://www.apgitsolutions.com/",
  },
  {
    title: "Software Developer",
    startDate: new Date(2022, 10, 29),
    endDate: new Date(2025, 0, 7),
    isCurrent: false,
    employer: "AP Global IT Solutions, Inc.",
    employerLink: "https://www.apgitsolutions.com/",
  },
  {
    title: "Front End Engineer",
    startDate: new Date(2025, 3, 2),
    endDate: null,
    isCurrent: true,
    employer: "Access Group Australia Pty. Ltd.",
    employerLink: "https://www.accessgroup.net.au/",
  },
];

export default experience;
