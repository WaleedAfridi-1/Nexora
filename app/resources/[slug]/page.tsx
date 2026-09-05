import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Quote } from "lucide-react";

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
import type { ResourceSection } from "../resourceContent";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexora-lyart-eight.vercel.app";

export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {
  const { slug } = await params;

  const resource = resources.find((item) => item.slug === slug);

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
    slug: string;
  }>;
}

/**
 * Renders a single content section based on its `type`.
 * Every resource's content array can mix paragraph / quote / numbered /
 * visual sections in any order — this switch renders exactly what each
 * resource defines.
 */
function renderSection(section: ResourceSection) {
  switch (section.type) {
    case "paragraph":
      return (
        <section
          key={section.id}
          id={`${section.id}-heading`}
          aria-labelledby={`${section.id}-heading-label`}
          className="scroll-mt-24 flex flex-col gap-5"
        >
          <h2
            id={`${section.id}-heading-label`}
            className="text-2xl md:text-[1.75rem] font-semibold text-foreground tracking-tight"
          >
            {section.title}
          </h2>
          <div className="flex flex-col gap-5 max-w-2xl">
            {section.paragraphs.map((p, ind) => (
              <p
                key={ind}
                className="text-[1.0625rem] text-foreground-secondary leading-[1.75]"
              >
                {p}
              </p>
            ))}
          </div>
        </section>
      );

    case "quote":
      return (
        <section
          key={section.id}
          id={`${section.id}-heading`}
          aria-labelledby={`${section.id}-heading-label`}
          className="scroll-mt-24 flex flex-col gap-5"
        >
          <h2
            id={`${section.id}-heading-label`}
            className="text-2xl md:text-[1.75rem] font-semibold text-foreground tracking-tight"
          >
            {section.title}
          </h2>
          <div className="flex flex-col gap-6 max-w-2xl">
            {section.paragraphs.map(
              (paragraph, ind) =>
                paragraph && (
                  <p
                    key={ind}
                    className="text-[1.0625rem] text-foreground-secondary leading-[1.75]"
                  >
                    {paragraph}
                  </p>
                )
            )}
            <div className="relative pl-9">
              <Quote
                className="absolute left-0 top-0.5 h-5 w-5 text-primary/50"
                strokeWidth={2.5}
                aria-hidden="true"
              />
              <blockquote className="text-xl font-medium text-foreground leading-snug">
                {section.quote}
              </blockquote>
            </div>
          </div>
        </section>
      );

    case "numbered":
      return (
        <section
          key={section.id}
          id={`${section.id}-heading`}
          aria-labelledby={`${section.id}-heading-label`}
          className="scroll-mt-24 flex flex-col gap-2"
        >
          <h2
            id={`${section.id}-heading-label`}
            className="text-2xl md:text-[1.75rem] font-semibold text-foreground tracking-tight mb-4"
          >
            {section.title}
          </h2>
          <div className="flex flex-col divide-y divide-border">
            {section.items.map((item) => (
              <NumberedItem
                key={item.number}
                number={item.number}
                title={item.title}
              >
                {item.paragraphs.map((p, ind) => (
                  <p
                    key={ind}
                    className="text-sm text-foreground-muted leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </NumberedItem>
            ))}
          </div>
        </section>
      );

    case "visual":
      return (
        <div
          key={section.id}
          id={`${section.id}-heading`}
          className="scroll-mt-24 relative h-140 md:h-145 rounded-xl border border-border bg-card overflow-hidden"
        >
          <Suspense
            fallback={<VisualFallback label="Loading workflow diagram" />}
          >
            {section.component === "workflow" ? (
              <WorkflowVisual />
            ) : (
              <ReliabilityWorkflow />
            )}
          </Suspense>
        </div>
      );

    default:
      return null;
  }
}

const Page = async ({ params }: pageProps) => {
  const { slug } = await params;

  const resource = resources.find((item) => item.slug === slug);
  if (!resource) return notFound();

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
      "@id": `${SITE_URL}/resources/${resource.slug}`,
    },
  };

  return (
    <main className="min-h-screen mt-20">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <ReadingProgressBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 md:px-6 pt-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
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
        <header className="flex flex-col gap-6 pb-10">
          <div
            className="flex flex-col gap-6 animate-[fade-up_0.5s_ease-out]
                       motion-reduce:animate-none"
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-primary">
                {resource.category}
              </span>
              <span className="text-foreground-muted">·</span>
              <time
                dateTime={resource.publishedDate}
                className="text-foreground-muted"
              >
                {resource.publishedDate}
              </time>
              <span className="text-foreground-muted">·</span>
              <span className="text-foreground-muted">{resource.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] text-foreground font-semibold leading-[1.08] tracking-tight max-w-3xl">
              {resource.title}
            </h1>

            <p className="text-foreground-secondary text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              {resource.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
              >
                N
              </div>
              <p className="text-sm font-medium text-foreground">
                Nexora Team
              </p>
            </div>

            <ShareButtons
              title={resource.title}
              url={`${SITE_URL}/resources/${resource.slug}`}
            />
          </div>
        </header>
      </div>

      {/* sticky TOC + article */}
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-12 flex gap-12">
        <TableOfContents sections={content} />

        <article className="min-w-0 flex-1 flex flex-col gap-16">
          {content.map((section) => renderSection(section))}

          {/* Author */}
          <section
            aria-labelledby="author-heading"
            className="pt-8 border-t border-border"
          >
            <p id="author-heading" className="sr-only">
              About the author
            </p>
            <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
              >
                N
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Written by the Nexora Team
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
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2
              id="resources-heading"
              className="text-2xl font-semibold tracking-tight text-foreground"
            >
              More from Nexora
            </h2>
            <Link
              href="/resources"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
            >
              View all
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {relatedResources.map((resource: any) => (
              <ResourceCard key={resource.href} resource={resource} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="cta-heading" className="mt-16">
          <div className="rounded-2xl bg-primary/5 border border-primary/15 px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h2
                id="cta-heading"
                className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground"
              >
                Ready to automate smarter?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground-secondary">
                Build reliable workflows with Nexora and spend less time
                managing repetitive work.
              </p>
            </div>
            <Link
              href="/pricing"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Get started
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;