"use client";

import React, { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "introduction-heading", label: "Introduction" },
  { id: "reliability-heading", label: "Why reliability matters" },
  { id: "reliable-heading", label: "What makes a workflow reliable?" },
  { id: "designing-heading", label: "Designing a reliable workflow" },
  { id: "problems-heading", label: "Common problems to avoid" },
  { id: "best-practices-heading", label: "Best practices" },
];

/**
 * Sticky sidebar navigation that highlights the section currently in view.
 * This is the single most recognizable "real content site" pattern —
 * without it, a long article just reads as an undifferentiated wall of text.
 */
const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0].id);

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

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block sticky top-24 self-start w-56 shrink-0"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-4">
        On this page
      </p>
      <ul className="flex flex-col gap-1 border-l border-border">
        {TOC_ITEMS.map((item) => {
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