export type ParagraphSection = {
  type: "paragraph";
  id: string;
  title: string;
  paragraphs: string[];
};

export type NumberedSection = {
  type: "numbered";
  id: string;
  title: string;
  items: {
    number: string;
    title: string;
    paragraphs: string[];
  }[];
};

export type QuoteSection = {
  type: "quote";
  id: string;
  title: string;
  paragraphs: string[];
  quote: string;
};

export type VisualSection = {
  type: "visual";
  id: string;
  component: "workflow" | "reliability";
};

export type ResourceSection =
  | ParagraphSection
  | NumberedSection
  | QuoteSection
  | VisualSection;

export const resourceContent: Record<string, ResourceSection[]> = {
  "building-reliable-ai-workflows": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "AI workflows are becoming an important part of modern businesses. They allow teams to automate repetitive tasks, process large amounts of information, and make faster decisions without relying on manual processes for every step.",

        "However, simply adding AI to a workflow is only the beginning. As workflows become more complex, they need to remain predictable, consistent, and easy to manage.",

        "The goal is not to remove humans from every process, but to create systems where AI handles the tasks it is best suited for while the overall workflow remains controlled and understandable.",
      ],
    },

    {
      type: "quote",
      id: "reliability",
      title: "Why reliability matters",
      paragraphs: [
        "AI workflows often connect multiple steps together. A small mistake in one step can affect everything that follows.",

        "When these workflows are used in real business processes, reliability becomes even more important.",
      ],
      quote:
        "A single failure can result in incorrect information, missed tasks, or actions triggered at the wrong time.",
    },

    {
      type: "visual",
      id: "workflow-visual",
      component: "workflow",
    },

    {
      type: "numbered",
      id: "reliable",
      title: "What makes an AI workflow reliable?",
      items: [
        {
          number: "01",
          title: "Define clear inputs",
          paragraphs: [
            "A reliable workflow starts with a clear understanding of what information each step should receive.",

            "Clear inputs make the workflow easier to understand, test, and maintain as it grows.",
          ],
        },

        {
          number: "02",
          title: "Keep AI decisions focused",
          paragraphs: [
            "AI works best when it is given a specific responsibility within a workflow.",

            "Instead of asking one AI step to handle an entire business process, break the process into smaller tasks with clear responsibilities.",
          ],
        },

        {
          number: "03",
          title: "Validate important outputs",
          paragraphs: [
            "AI-generated results should not always be passed directly to the next step.",

            "Adding validation creates a safety layer between AI and the actions that follow.",
          ],
        },
      ],
    },

    {
      type: "paragraph",
      id: "designing",
      title: "Designing a reliable workflow",
      paragraphs: [
        "Designing a reliable AI workflow starts with breaking the process into clear, manageable steps.",

        "A well-designed workflow should also account for what happens when something goes wrong. Important decisions should have validation and fallback paths in place.",
      ],
    },

    {
      type: "visual",
      id: "reliability-visual",
      component: "reliability",
    },

    {
      type: "numbered",
      id: "problems",
      title: "Common problems to avoid",
      items: [
        {
          number: "01",
          title: "Unclear AI instructions",
          paragraphs: [
            "Unclear instructions can lead to inconsistent or unexpected AI outputs.",
          ],
        },

        {
          number: "02",
          title: "No output validation",
          paragraphs: [
            "Passing AI-generated output directly to the next action can introduce unnecessary risk.",
          ],
        },

        {
          number: "03",
          title: "No failure handling",
          paragraphs: [
            "If a workflow fails without a fallback path, the entire process can come to a stop.",
          ],
        },
      ],
    },

    {
      type: "numbered",
      id: "best-practices",
      title: "Best practices",
      items: [
        {
          number: "01",
          title: "Keep workflows simple",
          paragraphs: [
            "Break complex processes into smaller, manageable steps.",
          ],
        },

        {
          number: "02",
          title: "Give AI clear instructions",
          paragraphs: [
            "Define what the AI should do, what information it should use, and what kind of result it should produce.",
          ],
        },

        {
          number: "03",
          title: "Validate critical outputs",
          paragraphs: [
            "Check important AI-generated results before they trigger actions.",
          ],
        },

        {
          number: "04",
          title: "Monitor workflow runs",
          paragraphs: [
            "Track workflow activity and results so you can quickly identify failures.",
          ],
        },

        {
          number: "05",
          title: "Always have a fallback",
          paragraphs: [
            "Create a backup path for situations where an AI step fails.",
          ],
        },
      ],
    },
  ],
};