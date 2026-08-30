import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Card } from "./ui/card";
import { resources } from "@/components/ui/resources/ResourcesCardData";
import Header from "@/components/ui/resources/Header";



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
      <Header/>

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
            {resources.slice(0,3).map((item) => {
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
