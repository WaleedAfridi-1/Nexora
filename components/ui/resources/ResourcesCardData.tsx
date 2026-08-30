import {
  Workflow,
  Bot,
  ListChecks,
  Clock,
  Sparkles,
  ArrowUpRight,
  Activity,
  Plug,
  BarChart3,
} from "lucide-react";



type ResourceItem = {
  id: number;
  slug: string;
  category: string;
  icon: React.ElementType;
  title: string;
  description: string;
  readTime: string;
};


export const resources: ResourceItem[] = [
  {
    id: 1,
    slug: "building-reliable-ai-workflows",
    category: "AI Workflows",
    icon: Workflow,
    title: "How to build reliable AI workflows",
    description:
      "A practical guide to designing AI-powered workflows that are predictable, maintainable, and easy to scale.",
    readTime: "8 min read",
  },

  {
    id: 2,
    slug: "automating-repetitive-tasks",
    category: "Automation",
    icon: Bot,
    title: "A practical guide to automating repetitive tasks",
    description:
      "Discover which repetitive processes are worth automating and how to turn them into efficient workflows.",
    readTime: "6 min read",
  },

  {
    id: 3,
    slug: "workflow-automation-best-practices",
    category: "Best Practices",
    icon: ListChecks,
    title: "7 principles for better workflow automation",
    description:
      "Simple principles for creating workflows that remain reliable, understandable, and easy to improve.",
    readTime: "7 min read",
  },

  {
    id: 4,
    slug: "identify-automation-opportunities",
    category: "Productivity",
    icon: Clock,
    title: "How to find the right tasks to automate",
    description:
      "Learn how to identify high-impact automation opportunities and prioritize the workflows that save the most time.",
    readTime: "5 min read",
  },

  {
    id: 5,
    slug: "ai-agents-for-business-workflows",
    category: "AI Agents",
    icon: Sparkles,
    title: "Where AI agents fit into modern workflows",
    description:
      "Understand how AI agents can handle decisions, adapt to changing inputs, and work alongside your existing processes.",
    readTime: "9 min read",
  },

  {
    id: 6,
    slug: "scaling-workflow-automation",
    category: "Guides",
    icon: ArrowUpRight,
    title: "From your first automation to a scalable system",
    description:
      "A step-by-step look at how to move from simple automations to reliable workflows that can grow with your team.",
    readTime: "8 min read",
  },

  {
    id: 7,
    slug: "workflow-monitoring-and-errors",
    category: "Engineering",
    icon: Activity,
    title: "How to monitor workflows and handle failures",
    description:
      "Learn how to design automation systems that are observable, resilient, and easier to troubleshoot when things go wrong.",
    readTime: "7 min read",
  },

  {
    id: 8,
    slug: "connecting-your-tools-with-automation",
    category: "Integrations",
    icon: Plug,
    title: "Connecting your tools with automated workflows",
    description:
      "Explore how integrations connect your everyday tools and help information move between systems automatically.",
    readTime: "6 min read",
  },

  {
    id: 9,
    slug: "measuring-automation-impact",
    category: "Insights",
    icon: BarChart3,
    title: "How to measure the impact of automation",
    description:
      "Go beyond tasks completed and learn which metrics actually show whether your automations are creating value.",
    readTime: "5 min read",
  },
];