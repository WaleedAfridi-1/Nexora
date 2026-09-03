import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Resource {
  category: string;
  title: string;
  readTime: string;
  href: string;
}

export const relatedResources: Resource[] = [
  {
    category: "Automation",
    title: "A practical guide to automating repetitive tasks",
    readTime: "6 min read",
    href: "/resources/automating-repetitive-tasks",
  },
  {
    category: "Best Practices",
    title: "7 principles for better workflow automation",
    readTime: "7 min read",
    href: "/resources/workflow-automation-best-practices",
  },
  {
    category: "Productivity",
    title: "How to find the right tasks to automate",
    readTime: "5 min read",
    href: "/resources/identify-automation-opportunities",
  },
];

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <Link
      href={resource.href}
      className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div className="flex h-full flex-col">
        <p className="text-[11px] font-medium uppercase tracking-wide text-primary">
          {resource.category}
        </p>

        <h3 className="mt-3 text-sm font-semibold leading-6 text-foreground">
          {resource.title}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-xs text-foreground-muted">
            {resource.readTime}
          </span>

          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 text-foreground-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;