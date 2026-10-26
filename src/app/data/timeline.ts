export interface TimelineEntry {
  period?: string;
  title: string;
  description: string;
  url?: string;
  tags?: string[];
  featured?: boolean;
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    period: "2023 to Present",
    title: "NightDev IO",
    description:
      "Founder-led engineering studio. Design, build, and scale software products for founders.",
    url: "https://nightdev.io",
    tags: ["Studio", "Founder"],
    featured: true,
  },
  {
    title: "1v9.gg",
    description:
      "Online marketplace for gamers to buy and sell in-game items, accounts, and services with secure transactions.",
    url: "https://1v9.gg",
    tags: ["Gaming", "Marketplace"],
  },
  {
    title: "Racoon",
    description:
      "Lead developer on a modern gaming marketplace MVP with secure buyer/seller flows and seller dashboards.",
    url: "https://racoon.gg",
    tags: ["Lead Developer", "Gaming", "Marketplace"],
  },
  {
    title: "CoachIQ",
    description:
      "High-converting coaching platform focused on program discovery, trust building, and qualified lead generation.",
    url: "https://coachiq.gg",
    tags: ["Coaching", "Platform"],
  },
  {
    title: "MediaSurge",
    description:
      "Marketplace connecting content creators with skilled video editors. Secure payments and portfolio showcasing.",
    url: "https://mediasurge.gg",
    tags: ["SaaS", "Marketplace"],
  },
  {
    title: "FastSmurfs",
    description:
      "Gaming account marketplace built for speed, reliability, and tight feature delivery.",
    url: "https://fastsmurfs.com",
    tags: ["Gaming", "Marketplace"],
  },
  {
    title: "RiotSecure",
    description:
      "Security and verification platform for gaming communities and competitive ecosystems.",
    url: "https://riotsecure.se",
    tags: ["Security", "Gaming"],
  },
  {
    title: "Autopost",
    description:
      "Complete media scheduler for planning, automating, and publishing content across channels from one dashboard.",
    url: "https://autopost.gg",
    tags: ["SaaS", "Automation"],
  },
  {
    title: "GetSmurf",
    description:
      "Gaming account marketplace for smurf and ranked accounts with streamlined checkout.",
    url: "https://getsmurf.com",
    tags: ["Gaming", "Marketplace"],
  },
  {
    title: "Gapped",
    description:
      "Coaching platform for program delivery, scheduling, and student progress tracking.",
    url: "https://gapped.gg",
    tags: ["Coaching", "Platform"],
  },
  {
    title: "MyPersonalEditor",
    description:
      "Platform connecting creators with personal video editors for ongoing content production.",
    url: "https://mypersonaleditor.com",
    tags: ["SaaS", "Marketplace"],
  },
  {
    title: "Doorsome",
    description:
      "Digital platform for door and interior solutions with a polished product experience.",
    url: "https://doorsome.ch",
    tags: ["Platform", "B2B"],
  },
  {
    title: "CSGuess",
    description:
      "Interactive CS2 skin identification game with real-time leaderboards and competitive gameplay.",
    url: "https://csguess.com",
    tags: ["Game", "Social"],
  },
  {
    title: "AirGroundFlow",
    description:
      "Logistics workflow platform with a premium UI for complex air and ground operations.",
    url: "http://k808wgs48c4gokos4gk4cgok.176.9.29.149.sslip.io/",
    tags: ["Logistics", "Platform"],
  },
  {
    title: "OnlySkill",
    description:
      "Gaming skill and coaching marketplace connecting players with verified coaches.",
    url: "http://hs80wwoc8kgs00sw884w0cw4.176.9.29.149.sslip.io/",
    tags: ["Gaming", "Coaching"],
  },
];
