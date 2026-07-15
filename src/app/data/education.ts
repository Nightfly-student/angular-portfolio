export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  note?: string;
  skills?: string[];
}

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    school: "Yonsei University",
    degree: "Computer Science",
    period: "Sep 2023 - Dec 2023",
    note: "Grade: Senior. Following course package.",
  },
  {
    school: "Hogeschool Inholland",
    degree: "HBO, Informatics",
    period: "Jan 2020 - Nov 2024",
    skills: ["MongoDB", "HTML", "CSS", "JavaScript", "Angular", "Vue", "React"],
  },
  {
    school: "Nova College",
    degree: "MBO, Computer Programming",
    period: "2017 - 2020",
    note: "IT Study",
    skills: ["HTML", "PHP", "CSS", "JavaScript", "SQL", "Java"],
  },
];
