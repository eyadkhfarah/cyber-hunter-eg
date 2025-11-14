import {
  ClipboardCheck,
  ShieldHalf,
  Swords,
  Rocket,
} from "lucide-react";

export const howItWorksData = [
  {
    step: 1,
    title: "Initial Consultation & Scoping",
    description:
      "We start with a free call to understand your environment, critical assets, compliance needs, and security objectives.",
    icon: ClipboardCheck,
  },
  {
    step: 2,
    title: "Threat Modeling & Assessment",
    description:
      "Our experts design a custom penetration test plan, replicating real-world attack scenarios relevant to your business profile.",
    icon: ShieldHalf,
  },
  {
    step: 3,
    title: "Execution & Manual Testing",
    description:
      "Our certified ethical hackers perform the assessment, focusing on discovering complex vulnerabilities that automated tools miss.",
    icon: Swords,
  },
  {
    step: 4,
    title: "Reporting & Remediation Guidance",
    description:
      "You receive a detailed report with prioritized findings, clear severity ratings, and actionable, step-by-step remediation advice.",
    icon: Rocket,
  },
];