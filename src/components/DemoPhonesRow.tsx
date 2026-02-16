"use client";

import type { ReactNode } from "react";
import { DemoPhone } from "./DemoPhone";
import type { DemoPhoneNavTab } from "./DemoPhoneNav";
import {
  DashboardScreen,
  TeamsScreen,
  ProfileScreen,
} from "./demo-phone-screens";

export interface DemoPhonesRowProps {
  /** Optional fixed viewport height per phone (when not using aspect-ratio layout). */
  viewportHeight?: number;
}

/**
 * Renders three demo phones in a responsive grid for the Product Preview section.
 * Each phone uses responsive width and aspect-[9/19.5]; dark bezel, red ambient glow behind row.
 */
export function DemoPhonesRow({ viewportHeight }: DemoPhonesRowProps) {
  const phones: { id: string; content: ReactNode; caption: string; activeNav: DemoPhoneNavTab }[] = [
    { id: "dashboard", content: <DashboardScreen />, caption: "Dashboard", activeNav: "home" },
    { id: "teams", content: <TeamsScreen />, caption: "Teams", activeNav: "teams" },
    { id: "profile", content: <ProfileScreen />, caption: "Profile", activeNav: "profile" },
  ];

  return (
    <div className="relative w-full max-w-6xl">
      {/* Subtle red ambient glow behind the phone row */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[80px]"
        aria-hidden
      />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-[75px]">
        {phones.map(({ id, content, caption, activeNav }) => (
          <div key={id} className="flex flex-col items-center gap-4">
            <div
              className="aspect-[9/19.5] w-[260px] sm:w-[280px] md:w-[320px] lg:w-[360px] min-h-0"
            >
              <DemoPhone activeNav={activeNav} viewportHeight={viewportHeight}>
                {content}
              </DemoPhone>
            </div>
            <p className="text-center text-sm text-muted">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
