"use client";

import type { ReactNode } from "react";
import { DemoPhoneNav, type DemoPhoneNavTab } from "./DemoPhoneNav";

export interface DemoPhoneProps {
  children: ReactNode;
  /** Which bottom nav tab is active (red highlight + dot). */
  activeNav?: DemoPhoneNavTab;
  /** Inner scrollable viewport height (optional). When unset, viewport fills space (use with aspect-ratio parent). */
  viewportHeight?: number;
  className?: string;
  showNotch?: boolean;
  showNav?: boolean;
}

/**
 * Phone device frame: dark bezel, subtle notch, scrollable viewport, bottom nav.
 * Use inside a container with aspect-[9/19.5] and responsive width so the frame fills it (viewport uses flex-1).
 * Optional viewportHeight fixes scroll area height when not using aspect-ratio parent.
 */
export function DemoPhone({
  children,
  activeNav = "home",
  viewportHeight,
  className = "",
  showNotch = true,
  showNav = true,
}: DemoPhoneProps) {
  const useFlexViewport = viewportHeight == null;

  return (
    <div
      className={
        "h-full w-full min-h-0 " +
        "rounded-[40px] border-[10px] border-zinc-800 bg-zinc-900 p-1.5 shadow-2xl " +
        "md:rounded-[52px] md:border-[14px] md:p-2 " +
        "ring-1 ring-black/50 " +
        className
      }
      style={{
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[32px] bg-zinc-950 ring-1 ring-black/80 md:rounded-[40px]">
        {showNotch && (
          <div className="flex h-9 shrink-0 items-center justify-center border-b border-white/5 bg-zinc-950 px-2 md:h-10 md:px-4">
            <div className="h-1 w-14 rounded-full bg-zinc-700 md:h-1.5 md:w-20" aria-hidden />
          </div>
        )}

        <div
          className={
            "min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain scroll-smooth bg-bg " +
            "[scrollbar-color:rgba(255,255,255,0.35)_rgba(255,255,255,0.08)] [scrollbar-width:auto] " +
            "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/40 " +
            "[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10 " +
            (useFlexViewport ? "flex-1" : "")
          }
          style={useFlexViewport ? undefined : { height: viewportHeight }}
          data-demo-phone-viewport
        >
          <div
            className="min-h-full bg-bg"
            style={useFlexViewport ? undefined : { minHeight: viewportHeight }}
          >
            {children}
          </div>
        </div>

        {showNav && <DemoPhoneNav activeTab={activeNav} />}
      </div>
    </div>
  );
}
