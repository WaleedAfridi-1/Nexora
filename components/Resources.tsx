import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Clock,
  ListChecks,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";

type ResourceItem = {
  id: number;
  slug: string;
  category: string;
  icon: React.ElementType;
  title: string;
  description: string;
  readTime: string;
};

const resources: ResourceItem[] = [
  {
    id: 1,
    slug: "automate-repetitive-work",
    category: "Automation",
    icon: Workflow,
    title: "Automate repetitive work without adding complexity",
    description:
      "Learn how to identify repetitive tasks and turn them into simple, reliable workflows.",
    readTime: "6 min read",
  },
  {
    id: 2,
    slug: "ai-agents-everyday-workflows",
    category: "AI workflows",
    icon: Bot,
    title: "How AI agents can improve everyday workflows",
    description:
      "Explore practical ways to use AI agents to handle decisions, tasks, and routine processes.",
    readTime: "5 min read",
  },
  {
    id: 3,
    slug: "principles-for-better-automations",
    category: "Best practices",
    icon: ListChecks,
    title: "7 principles for building better automations",
    description:
      "A practical guide to creating workflows that stay simple, reliable, and easy to maintain.",
    readTime: "7 min read",
  },
  {
    id: 4,
    slug: "where-automation-saves-time",
    category: "Productivity",
    icon: Clock,
    title: "Where automation can save your team the most time",
    description:
      "Find the everyday processes that are worth automating first and where to start.",
    readTime: "4 min read",
  },
  {
    id: 5,
    slug: "ai-for-smarter-workflows",
    category: "AI",
    icon: Sparkles,
    title: "Using AI to make workflows more intelligent",
    description:
      "See how AI can understand context and make your automated workflows more flexible.",
    readTime: "8 min read",
  },
  {
    id: 6,
    slug: "manual-tasks-to-automated-workflows",
    category: "Guides",
    icon: ArrowUpRight,
    title: "From manual tasks to automated workflows",
    description:
      "A step-by-step approach to turning a manual process into a repeatable automation.",
    readTime: "6 min read",
  },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const Resources = () => {
  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="w-full flex flex-col gap-10 py-20 md:py-28 px-4"
    >
      {/* Header */}
      <div className="w-full flex flex-col items-center gap-5">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
          Resources
        </span>
        <h2
          id="resources-heading"
          className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center"
        >
          Learn. Build. <span className="text-foreground-secondary block"> Automate.</span>
        </h2>
        <p className="text-foreground-secondary text-sm md:text-lg text-center font-medium leading-relaxed max-w-xl">
          Practical guides and insights to help you get more from your
          workflows.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* Latest resources */}
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">
              Latest resources
            </h3>
            <Link
              href="/resources"
              className={`hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 rounded-sm ${FOCUS_RING}`}
            >
              View all
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {resources.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.id} className="p-0 border-none bg-transparent">
                  <Link
                    href={`/resources/${item.slug}`}
                    aria-label={`Read: ${item.title}`}
                    className={`group flex flex-col h-full gap-4 rounded border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40 ${FOCUS_RING}`}
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span className="text-xs font-semibold tracking-wide uppercase">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-base font-bold text-foreground leading-snug line-clamp-2">
                      {item.title}
                    </p>

                    <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2 flex-1">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-foreground-muted text-xs font-semibold">
                        {item.readTime}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                        Read
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>

          <Link
            href="/resources"
            className={`sm:hidden inline-flex items-center justify-center gap-1.5 mt-2 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:border-primary/40 ${FOCUS_RING}`}
          >
            View all resources
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resources;
