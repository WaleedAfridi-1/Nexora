"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface IntegrationCardProps {
  name: string;
  description: string;
  category: string;
  bgColor: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const IntegrationCard = ({
  name,
  description,
  category,
  bgColor,
  Icon,
}: IntegrationCardProps) => {
  return (
    <div className="integration-card group relative bg-card/90 backdrop-blur-sm border border-border/60 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 ease-in-out p-2 md:p-3 rounded flex flex-col justify-between">
      <CardHeader className="w-full p-4 pb-4 border-b border-border/50 flex flex-row items-center gap-4">
        <div
          style={{ backgroundColor: `${bgColor}15`, color: bgColor }}
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
        >
          {Icon && <Icon className="w-6 h-6 object-center" />}
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-bold text-foreground tracking-tight">
            {name}
          </h4>
          <span className="text-xs font-mono font-medium text-primary mt-0.5 block">
            {category}
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-6 space-y-4">
        <p className="text-foreground-secondary text-sm md:text-base font-medium leading-relaxed">
          {description}
        </p>
      </CardContent>
    </div>
  );
};

export default IntegrationCard;