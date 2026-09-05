import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

import WorkflowVisual from "@/components/ui/resources/WorkflowVisual";
import ReliabilityWorkflow from "@/components/ui/resources/WorkFlowTwo";
import NumberedItem from "@/components/ui/resources/NumberedItem";
import ResourceCard, {
  relatedResources,
} from "@/components/ui/resources/ResourcesCard";
import TableOfContents from "@/components/ui/resources/Tableofcontents";
import ReadingProgressBar from "@/components/ui/resources/Readingprogressbar";
import ShareButtons from "@/components/ui/resources/Sharebuttons";
import { resources } from "../resources";
import { resourceContent } from "../resourceContent";
import { notFound } from "next/navigation";




const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexora-lyart-eight.vercel.app";


export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {

  const { slug } = await params;

  const resource = resources.find(
    (item) => item.slug === slug
  );

  if (!resource) {
    return {};
  }

  const pagePath = `/resources/${resource.slug}`;

  return {
    title: `${resource.title} | Nexora`,
    description: resource.description,

    alternates: {
      canonical: `${SITE_URL}${pagePath}`,
    },

    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${SITE_URL}${pagePath}`,
      type: "article",
      publishedTime: resource.publishedDate,
      authors: ["Nexora Team"],
    },

    twitter: {
      card: "summary_large_image",
      title: resource.title,
      description: resource.description,
    },
  };
}



const VisualFallback = ({ label }: { label: string }) => (
  <div
    role="status"
    aria-label={label}
    className="h-full w-full animate-pulse rounded-xl border border-border bg-card"
  />
);

interface pageProps {
  params: Promise<{
    slug : string
  }>;
}



const Page = async ({params} : pageProps) => {

  const { slug } = await params;

  const resource = resources.find(
    (item) => item.slug === slug
  )
  if(!resource) return notFound();

  const content = resourceContent[resource.slug];
  if (!content) return notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: resource.title,
    description: resource.description,

    datePublished: resource.publishedDate,
    dateModified: resource.publishedDate,

    author: {
      "@type": "Organization",
      name: "Nexora Team",
    },

    publisher: {
      "@type": "Organization",
      name: "Nexora",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":  `${SITE_URL}/resources/${resource.slug}`,
    },
  };


  return (
    <main className="min-h-screen mt-20">
      <ReadingProgressBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 md:px-6 pt-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-1.5 text-sm text-foreground-muted">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <li>
              <Link
                href="/resources"
                className="hover:text-foreground transition-colors"
              >
                Resources
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <li aria-current="page" className="text-foreground truncate">
              {resource.slug.split("-").join(" ")}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="flex flex-col gap-4 pb-10 border-b border-border">
          <span className="w-fit px-3 py-1 text-xs font-medium text-primary bg-card border border-primary/40 rounded-full uppercase tracking-wide">
            {resource.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight tracking-tight max-w-3xl">
            {resource.title}
          </h1>

          <p className="text-foreground-secondary text-base md:text-lg max-w-2xl">
            {resource.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-xs font-semibold text-primary"
              >
                N
              </div>
              <div className="text-sm">
                <p className="font-medium text-foreground">Nexora Team</p>
                <p className="text-foreground-muted">
                  <time dateTime={resource.publishedDate}>{resource.publishedDate}</time>
                  {" · "}
                  {resource.readTime}
                </p>
              </div>
            </div>

            <ShareButtons title={resource.title} url={ `${SITE_URL}/resources/${resource.slug}`} />
          </div>
        </header>
      </div>

      {/*  sticky TOC + article */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 flex gap-12">
        <TableOfContents />

        <article className="min-w-0 flex-1 flex flex-col gap-16">
          
          <section
            id="introduction-heading"
            aria-labelledby="introduction-heading-label"
            className="scroll-mt-24 flex flex-col gap-5"
          >
            <h2
              id="introduction-heading-label"
              className="text-2xl md:text-3xl font-semibold text-foreground"
            >
              Introduction
            </h2>
            <div className="flex flex-col gap-5 max-w-2xl">
              <p className="text-base text-foreground-secondary leading-relaxed">
                AI workflows are becoming an important part of modern
                businesses. They allow teams to automate repetitive tasks,
                process large amounts of information, and make faster decisions
                without relying on manual processes for every step. From
                handling customer requests and qualifying leads to sending
                emails and organizing data, AI can help businesses reduce
                unnecessary work and focus their time on more important tasks.
              </p>
              <p className="text-base text-foreground-secondary leading-relaxed">
                However, simply adding AI to a workflow is only the beginning.
                As workflows become more complex, they need to remain
                predictable, consistent, and easy to manage. An AI system may
                produce different results depending on the input, which can
                create problems when its output is connected to other automated
                steps. Building a reliable workflow therefore requires careful
                planning, clear instructions, proper validation, and a way to
                monitor what happens at each stage.
              </p>
              <p className="text-base text-foreground-secondary leading-relaxed">
                The goal is not to remove humans from every process, but to
                create systems where AI handles the tasks it is best suited for
                while the overall workflow remains controlled and
                understandable. When designed correctly, AI workflows can scale
                with a business without becoming difficult to maintain or
                troubleshoot.
              </p>
            </div>
          </section>

          {/* Why reliability matters */}
          <section
            id="reliability-heading"
            aria-labelledby="reliability-heading-label"
            className="scroll-mt-24 flex flex-col gap-5"
          >
            <h2
              id="reliability-heading-label"
              className="text-2xl md:text-3xl font-semibold text-foreground"
            >
              Why reliability matters
            </h2>
            <div className="flex flex-col gap-5 max-w-2xl">
              <p className="text-base text-foreground-secondary leading-relaxed">
                AI workflows often connect multiple steps together. A small
                mistake in one step can affect everything that follows. For
                example, if an AI agent incorrectly classifies a customer
                request, the next action may also be triggered incorrectly.
              </p>

              <blockquote className="border-l-2 border-primary pl-5 py-1 text-lg font-medium text-foreground italic">
                A single failure can result in incorrect information, missed
                tasks, or actions triggered at the wrong time.
              </blockquote>

              <p className="text-base text-foreground-secondary leading-relaxed">
                When these workflows are used in real business processes,
                reliability becomes even more important. As the number of
                automated workflows grows, manually checking every step becomes
                difficult and defeats the purpose of automation. Reliable
                workflows should therefore be designed to handle unexpected
                inputs, validate important results, and make it easy for teams
                to understand what happened when something goes wrong.
              </p>
            </div>
          </section>

          {/* Visual */}
          <div className="relative h-140 md:h-145 rounded-xl border border-border bg-card overflow-hidden">
            <Suspense
              fallback={<VisualFallback label="Loading workflow diagram" />}
            >
              <WorkflowVisual />
            </Suspense>
          </div>

          {/* What makes an AI workflow reliable */}
          <section
            id="reliable-heading"
            aria-labelledby="reliable-heading-label"
            className="scroll-mt-24 flex flex-col gap-2"
          >
            <h2
              id="reliable-heading-label"
              className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
            >
              What makes an AI workflow reliable?
            </h2>

            <div className="flex flex-col divide-y divide-border">
              <NumberedItem number="01" title="Define clear inputs">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  A reliable workflow starts with a clear understanding of what
                  information each step should receive. AI models can produce
                  inconsistent results when the input is incomplete, ambiguous,
                  or contains unnecessary information.
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Before sending data to an AI step, define what the model needs
                  and remove anything that could introduce confusion. Clear
                  inputs make the workflow easier to understand, test, and
                  maintain as it grows.
                </p>
              </NumberedItem>

              <NumberedItem number="02" title="Keep AI decisions focused">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  AI works best when it is given a specific responsibility
                  within a workflow. Instead of asking one AI step to handle an
                  entire business process, break the process into smaller tasks
                  with clear responsibilities.
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  For example, an AI agent can classify a customer request,
                  while separate workflow steps handle validation, database
                  updates, and email delivery. This makes failures easier to
                  identify and individual steps easier to improve.
                </p>
              </NumberedItem>

              <NumberedItem number="03" title="Validate important outputs">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  AI-generated results should not always be passed directly to
                  the next step. Important outputs should be checked before they
                  trigger an action, especially when the workflow is handling
                  customer data, sending messages, or making business decisions.
                </p>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Adding validation creates a safety layer between AI and the
                  actions that follow. It helps prevent unexpected outputs from
                  turning into larger workflow failures.
                </p>
              </NumberedItem>
            </div>
          </section>

          {/* Designing a reliable workflow */}
          <section
            id="designing-heading"
            aria-labelledby="designing-heading-label"
            className="scroll-mt-24 flex flex-col gap-5"
          >
            <h2
              id="designing-heading-label"
              className="text-2xl md:text-3xl font-semibold text-foreground"
            >
              Designing a reliable workflow
            </h2>
            <div className="flex flex-col gap-5 max-w-2xl">
              <p className="text-base text-foreground-secondary leading-relaxed">
                Designing a reliable AI workflow starts with breaking the
                process into clear, manageable steps. Each step should have a
                specific responsibility, predictable inputs, and a defined
                outcome. Instead of relying on a single AI action to handle an
                entire process, businesses can combine AI with validation,
                business rules, and automated actions to create workflows that
                are easier to understand and maintain.
              </p>
              <p className="text-base text-foreground-secondary leading-relaxed">
                A well-designed workflow should also account for what happens
                when something goes wrong. AI outputs can sometimes be
                incomplete, unexpected, or difficult to interpret, so important
                decisions should have validation and fallback paths in place. By
                separating AI decisions from critical actions and monitoring
                each stage, teams can build workflows that remain reliable even
                as the process becomes more complex.
              </p>
            </div>
            <div className="relative h-112.5 md:h-160 rounded-xl border border-border bg-card overflow-hidden">
              <Suspense
                fallback={
                  <VisualFallback label="Loading reliability workflow diagram" />
                }
              >
                <ReliabilityWorkflow />
              </Suspense>
            </div>
          </section>

          {/* Common problems */}
          <section
            id="problems-heading"
            aria-labelledby="problems-heading-label"
            className="scroll-mt-24 flex flex-col gap-2"
          >
            <h2
              id="problems-heading-label"
              className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
            >
              Common problems to avoid
            </h2>
            <div className="flex flex-col divide-y divide-border">
              <NumberedItem number="01" title="Unclear AI instructions">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Unclear instructions can lead to inconsistent or unexpected AI
                  outputs. When an AI step does not have a clear objective or
                  enough context, its results can vary and affect the steps that
                  follow.
                </p>
              </NumberedItem>
              <NumberedItem number="02" title="No output validation">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Passing AI-generated output directly to the next action can
                  introduce unnecessary risk. Important results should be
                  validated before they trigger another step or affect a
                  business process.
                </p>
              </NumberedItem>
              <NumberedItem number="03" title="No failure handling">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  If a workflow fails without a fallback path, the entire
                  process can come to a stop. Reliable workflows should have
                  clear recovery or review steps for situations where an
                  automated action cannot be completed.
                </p>
              </NumberedItem>
            </div>
          </section>

          {/* Best practices */}
          <section
            id="best-practices-heading"
            aria-labelledby="best-practices-heading-label"
            className="scroll-mt-24 flex flex-col gap-2"
          >
            <h2
              id="best-practices-heading-label"
              className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
            >
              Best practices
            </h2>
            <div className="flex flex-col divide-y divide-border">
              <NumberedItem number="01" title="Keep workflows simple">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Break complex processes into smaller, manageable steps. Simple
                  workflows are easier to understand, monitor, and maintain.
                </p>
              </NumberedItem>
              <NumberedItem number="02" title="Give AI clear instructions">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Define what the AI should do, what information it should use,
                  and what kind of result it should produce.
                </p>
              </NumberedItem>
              <NumberedItem number="03" title="Validate critical outputs">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Check important AI-generated results before they trigger
                  actions that could affect customers, data, or business
                  processes.
                </p>
              </NumberedItem>
              <NumberedItem number="04" title="Monitor workflow runs">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Track workflow activity and results so you can quickly
                  identify failures, unexpected behavior, or areas that need
                  improvement.
                </p>
              </NumberedItem>
              <NumberedItem number="05" title="Always have a fallback">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Create a backup path for situations where an AI step fails or
                  produces an uncertain result. This keeps the workflow from
                  stopping completely.
                </p>
              </NumberedItem>
            </div>
          </section>

          {/* Author */}
          <section
            aria-labelledby="author-heading"
            className="pt-8 border-t border-border"
          >
            <p
              id="author-heading"
              className="text-xs font-medium uppercase tracking-wider text-foreground-muted mb-5"
            >
              About the author
            </p>
            <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-primary"
              >
                N
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Nexora Team
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  Building better workflows with automation and AI.
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>

      {/* Related resources */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 pb-12">
        <section
          aria-labelledby="resources-heading"
          className="border-t border-border pt-12"
        >
          <div className="mb-7">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Related Resources
            </p>
            <h2
              id="resources-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-foreground"
            >
              Keep exploring
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {relatedResources.map((resource: any) => (
              <ResourceCard key={resource.href} resource={resource} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="cta-heading" className="mt-12">
          <div className="rounded-2xl border border-border bg-card px-6 py-12 text-center md:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
              Get Started
            </p>
            <h2
              id="cta-heading"
              className="mx-auto mt-3 max-w-xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
            >
              Ready to automate smarter?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-foreground-secondary">
              Build reliable workflows with Nexora and spend less time managing
              repetitive work.
            </p>
            <Link
              href="/pricing"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
