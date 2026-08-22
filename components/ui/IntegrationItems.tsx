
import {
    SvgGithub,
    SvgGitlab,
    SvgDocker,
    SvgSlack,
    SvgDiscord,
    SvgPaypal,
    SvgStripe,
    SvgVercel,
    SvgZapier,
    SvgMake,
    SvgN8n,
    SvgOpenai,
    SvgGemini,
    SvgAnthropic,
    SvgHuggingface,
    SvgResend,
    SvgSendgrid,
    SvgTwilio
} from "./SVGs";



export interface IntegrationItem {
  name: string;
  category: string;
  description: string;
  brandColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const integrations: IntegrationItem[] = [
  // Build & Automate
  {
    name: "GitHub",
    category: "Build & Automate",
    description: "Manage source code, repositories and collaborative development.",
    brandColor: "#24292e",
    icon: SvgGithub,
  },
  {
    name: "GitLab",
    category: "Build & Automate",
    description: "Plan, build and deploy software with integrated development workflows.",
    brandColor: "#FC6D26",
    icon: SvgGitlab,
  },
  {
    name: "Vercel",
    category: "Build & Automate",
    description: "Deploy and scale modern web applications with ease.",
    brandColor: "#000000",
    icon: SvgVercel,
  },
  {
    name: "Docker",
    category: "Build & Automate",
    description: "Build, package and run applications in portable containers.",
    brandColor: "#2496ED",
    icon: SvgDocker,
  },
  {
    name: "Zapier",
    category: "Build & Automate",
    description: "Connect apps and automate repetitive workflows without custom code.",
    brandColor: "#FF4F00",
    icon: SvgZapier,
  },
  {
    name: "Make",
    category: "Build & Automate",
    description: "Create automated workflows by connecting apps and services visually.",
    brandColor: "#00A3FF",
    icon: SvgMake,
  },
  {
    name: "n8n",
    category: "Build & Automate",
    description: "Build flexible workflows and connect services with powerful automation.",
    brandColor: "#FF6D5A",
    icon: SvgN8n,
  },

  // AI
  {
    name: "OpenAI",
    category: "Project Management",
    description: "Build intelligent features using powerful AI models and APIs.",
    brandColor: "#10A37F",
    icon: SvgOpenai,
  },
  {
    name: "Google Gemini",
    category: "Project Management",
    description: "Add multimodal intelligence and generative AI capabilities to products.",
    brandColor: "#8E75FF",
    icon: SvgGemini,
  },
  {
    name: "Anthropic",
    category: "Project Management",
    description: "Build reliable AI experiences with advanced language models.",
    brandColor: "#D97757",
    icon: SvgAnthropic,
  },
  {
    name: "Hugging Face",
    category: "Project Management",
    description: "Access open machine learning models and AI development tools.",
    brandColor: "#FFD21E",
    icon: SvgHuggingface,
  },

  // Communication
  {
    name: "Resend",
    category: "Communication",
    description: "Send transactional emails reliably through a simple developer API.",
    brandColor: "#000000",
    icon: SvgResend,
  },
  {
    name: "SendGrid",
    category: "Communication",
    description: "Deliver transactional and marketing emails at scale.",
    brandColor: "#1A82E2",
    icon: SvgSendgrid,
  },
  {
    name: "Twilio",
    category: "Communication",
    description: "Add messaging, voice and communication features to your applications.",
    brandColor: "#F22F46",
    icon: SvgTwilio,
  },
  {
    name: "Slack",
    category: "Communication",
    description: "Connect team communication and workflow notifications with Nexora.",
    brandColor: "#4A154B",
    icon: SvgSlack,
  },
  {
    name: "Discord",
    category: "Communication",
    description: "Send notifications and connect community workflows through Discord.",
    brandColor: "#5865F2",
    icon: SvgDiscord,
  },

  // Payments
    {
    name: "PayPal",
    category: "Payments",
    description: "Accept online payments and manage transactions across platforms.",
    brandColor: "#003087",
    icon: SvgPaypal,
  },
  {
    name: "Stripe",
    category: "Payments",
    description: "Handle payments, subscriptions and billing securely.",
    brandColor: "#635BFF",
    icon: SvgStripe,
  },
];