import { HatGlasses } from "lucide-react";
import { GrShieldSecurity } from "react-icons/gr";
import { RiFingerprintLine } from "react-icons/ri";
import { TbFishHook } from "react-icons/tb";

export const cyberSecurityServices = [
  {
    name: "DF & IR",
    description:
      "Rapid incident response and digital forensics to contain breaches, preserve evidence, identify root cause, and deliver practical remediation playbooks.",
    icon: RiFingerprintLine,
  },
  {
    name: "Threat Hunting",
    description:
      "Proactive threat hunting to discover hidden adversaries, investigate indicators of compromise, and tune detections to your environment.",
    icon: HatGlasses,
  },
  {
    name: "SOC as a Service",
    description:
      "24/7 managed security operations with expert triage, tailored detections, and automated response to reduce dwell time and operational risk.",
    icon: GrShieldSecurity,
  },
  {
    name: "Phishing Campaign Simulation",
    description:
      "Realistic phishing simulations and targeted awareness training that measure employee risk and provide actionable remediation to strengthen human defenses.",
    icon: TbFishHook,
  },
];
