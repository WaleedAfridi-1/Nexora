import React from "react";

interface NumberedItemProps {
  number: string;
  title: string;
  children: React.ReactNode;
  headingLevel?: "h2" | "h3";
}

/**
 * Renders a numbered content block (used for "What makes a workflow
 * reliable", "Common problems to avoid", "Best practices", etc).
 * Replaces ~8 near-identical copy-pasted JSX blocks in the original page.
 */
const NumberedItem = ({
  number,
  title,
  children,
  headingLevel = "h3",
}: NumberedItemProps) => {
  const Heading = headingLevel;

  return (
    <div className="w-full flex flex-col gap-3 pt-10 mt-4">
      <span
        className="w-fit px-3 py-1 text-sm text-primary"
        aria-hidden="true"
      >
        {number}
      </span>
      <Heading className="text-lg ml-4 md:text-xl font-semibold text-foreground">
        {title}
      </Heading>
      <div className="w-full flex flex-col gap-6 px-4 md:w-4/5">
        {children}
      </div>
    </div>
  );
};

export default NumberedItem;