"use client";

import React, { useEffect, useState } from "react";
import type { ResourceSection } from "@/app/resources/resourceContent";

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: ResourceSection[];
}

/**
 * Sticky sidebar navigation that highlights the section currently in view.
 * This is the single most recognizable "real content site" pattern —
 * without it, a long article just reads as an undifferentiated wall of text.
 *
 * Built dynamically from whatever `sections` a given resource defines, so
 * every resource page gets a correct, matching table of contents instead
 * of one hardcoded list shared (incorrectly) across all pages.
 */
const TableOfContents = ({ sections }: TableOfContentsProps) => {
  // "visual" sections (diagrams) don't have a title, so they're skipped —
  // there's nothing meaningful to link to in the sidebar for them.
  const tocItems: TocItem[] = sections
    .filter(
      (section): section is Exclude<ResourceSection, { type: "visual" }> =>
        section.type !== "visual"
    )
    .map((section) => ({
      id: `${section.id}-heading`,
      label: section.title,
    }));

  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // Re-run whenever the set of sections (and therefore ids) changes,
    // e.g. when navigating between two different resource pages.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  if (tocItems.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block sticky top-24 self-start w-56 shrink-0"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-4">
        On this page
      </p>
      <ul className="flex flex-col gap-1 border-l border-border">
        {tocItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block border-l-2 -ml-px pl-4 py-1.5 text-sm transition-colors duration-150 ${
                  isActive
                    ? "border-primary text-primary font-medium"
                    : "border-transparent text-foreground-muted hover:text-foreground hover:border-border"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;