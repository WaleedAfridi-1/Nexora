import Header from "@/components/ui/resources/Header";
import React from "react";
import { resources } from "@/components/ui/resources/ResourcesCardData";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import GlowBackground from "@/components/ui/GlowBackground";
import CTA from "@/components/CTA";


const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const page = () => {
  return (
    <main className="bg-background w-full mt-40 px-4 md:px-8 py-10 flex flex-col gap-6">
        <GlowBackground className="top-36 z-999"/>
      <Header />

        {/* Cards container  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-32">
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

      {/* CTA  */}
      <CTA tag="READY TO GET STARTED?"  titleLineOne="Ready to automate" titleLineTwo="your workflow?" description="Start building with Nexora today."/>
    </main>
  );
};

export default page;
