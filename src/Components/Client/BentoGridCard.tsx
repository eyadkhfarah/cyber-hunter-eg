"use client";
import { RiFingerprintLine } from "react-icons/ri";
import { TbFishHook } from "react-icons/tb";
import { GlowingEffect } from "@/Components/ui/glowing-effect";
import { GrShieldSecurity } from "react-icons/gr";
import { HatGlasses } from 'lucide-react';

export function BentoGridCards() {
  return (
    <ul className="w-full grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-136 xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<RiFingerprintLine className="h-7 w-7" />}
        title="DF & IR"
        description="Rapid incident response and digital forensics to contain breaches, preserve evidence, identify root cause, and deliver practical remediation playbooks."
      />

      <GridItem
        icon={<HatGlasses className="h-7 w-7" />}
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        title="Threat Hunting"
        description="Proactive threat hunting to discover hidden adversaries, investigate indicators of compromise, and tune detections to your environment."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<GrShieldSecurity className="h-7 w-7" />}
        title="SOC as a Service"
        description="24/7 managed security operations with expert triage, tailored detections, and automated response to reduce dwell time and operational risk."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/3/13]"
        icon={<TbFishHook className="h-7 w-7" />}
        title="Phishing Campaign Simulation"
        description="Realistic phishing simulations and targeted awareness training that measure employee risk and provide actionable remediation to strengthen human defenses."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-56 list-none ${area}`}>
      <div className="relative h-full rounded-2xl border-blue-900 border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg bg-blue-600 text-white p-2">
              <span className="text-3xl">{icon}</span>
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 text-xl/[1.375rem] font-bold text-balance md:text-2xl/[1.875rem] text-white">
                {title}
              </h3>
              <p className="text-sm/[1.125rem] md:text-base/[1.375rem] text-white [&_b]:md:font-bold [&_strong]:md:font-bold">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
