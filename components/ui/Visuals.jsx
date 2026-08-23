import React from 'react';

export const BuildVisual = () => {
  return (
    <div className="relative w-full max-w-70 overflow-hidden rounded-xl border border-border bg-background shadow-xs">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[11px] font-medium">Nexora</span>
        </div>

        <div className="flex gap-1">
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 p-3.5">
        <div>
          <p className="text-[10px] text-muted-foreground">Workspace</p>
          <h4 className="mt-0.5 text-xs font-semibold">New project</h4>
        </div>

        {/* Input */}
        <div className="space-y-1">
          <span className="text-[10px] text-muted-foreground">Project name</span>
          <div className="rounded-md border border-border px-2.5 py-1 text-[11px]">
            Nexora
          </div>
        </div>

        {/* Create Button */}
        <button className="rounded-md bg-primary px-3 py-1.5 text-[11px] font-medium text-primary-foreground">
          Create project
        </button>

        {/* Status */}
        <div className="flex items-center gap-1.5 border-t border-border pt-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[10px] text-muted-foreground">Ready to build</span>
        </div>
      </div>
    </div>
  );
};

export const AutomateVisual = () => {
  return (
    <div className="relative w-full max-w-70 overflow-hidden rounded-xl border border-border bg-background shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div>
          <p className="text-[10px] text-muted-foreground">Workflow</p>
          <h4 className="mt-0.5 text-xs font-semibold">New automation</h4>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[9px] text-muted-foreground">Active</span>
        </div>
      </div>

      {/* Workflow */}
      <div className="p-3.5">
        {/* Trigger */}
        <div className="rounded-lg border border-border bg-muted/20 p-2">
          <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Trigger</p>
          <p className="mt-0.5 text-[11px] font-medium">New request received</p>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-1">
          <div className="h-3.5 w-px bg-border" />
        </div>

        {/* AI */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-2">
          <p className="text-[9px] uppercase tracking-wider text-primary">AI</p>
          <p className="mt-0.5 text-[11px] font-medium">Process the request</p>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-1">
          <div className="h-3.5 w-px bg-border" />
        </div>

        {/* Action */}
        <div className="rounded-lg border border-border bg-muted/20 p-2">
          <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Action</p>
          <p className="mt-0.5 text-[11px] font-medium">Send response</p>
        </div>

        {/* Status */}
        <div className="mt-3 flex items-center justify-between border-t border-border pt-2.5">
          <span className="text-[9px] text-muted-foreground">Last run</span>
          <span className="text-[9px] font-medium text-primary">Completed</span>
        </div>
      </div>
    </div>
  );
};

export const ConnectVisual = () => {
  return (
    <div className="relative w-full max-w-70 overflow-hidden rounded-xl border border-border bg-background shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div>
          <p className="text-[10px] text-muted-foreground">Workspace</p>
          <h4 className="mt-0.5 text-xs font-semibold">Connected services</h4>
        </div>

        <span className="text-[9px] font-medium text-primary">3 connected</span>
      </div>

      {/* Network */}
      <div className="relative h-44 p-3.5">
        {/* GitHub */}
        <div className="absolute left-3 top-4 rounded-md border border-border bg-background px-2 py-1">
          <span className="text-[10px] font-medium">GitHub</span>
        </div>

        {/* Slack */}
        <div className="absolute bottom-4 left-3 rounded-md border border-border bg-background px-2 py-1">
          <span className="text-[10px] font-medium">Slack</span>
        </div>

        {/* Database */}
        <div className="absolute bottom-4 right-3 rounded-md border border-border bg-background px-2 py-1">
          <span className="text-[10px] font-medium">Database</span>
        </div>

        {/* Center */}
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-primary/30 bg-primary/5">
          <span className="text-[10px] font-semibold text-primary">Nexora</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1.5 border-t border-border px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="text-[9px] text-muted-foreground">Everything is in sync</span>
      </div>
    </div>
  );
};

export const ScaleVisual = () => {
  return (
    <div className="relative w-full max-w-70 overflow-hidden rounded-xl border border-border bg-background shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div>
          <p className="text-[10px] text-muted-foreground">Analytics</p>
          <h4 className="mt-0.5 text-xs font-semibold">Growth overview</h4>
        </div>

        <span className="rounded-full border border-border px-1.5 py-0.5 text-[9px] text-muted-foreground">
          30 days
        </span>
      </div>

      {/* Chart */}
      <div className="p-3.5">
        <div className="mb-2 flex items-end justify-between">
          <div>
            <p className="text-[9px] text-muted-foreground">Monthly activity</p>
            <p className="mt-0.5 text-lg font-bold tracking-tight">18.4k</p>
          </div>

          <span className="text-[10px] font-medium text-primary">+42%</span>
        </div>

        {/* Chart */}
        <div className="relative h-20 overflow-hidden rounded-md border border-border bg-muted/10">
          <div className="absolute left-0 right-0 top-1/4 border-t border-border" />
          <div className="absolute left-0 right-0 top-2/4 border-t border-border" />
          <div className="absolute left-0 right-0 top-3/4 border-t border-border" />

          <svg
            viewBox="0 0 400 120"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 100 C50 95, 70 85, 110 88 S160 65, 200 70 S250 48, 290 52 S340 20, 400 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />
            <circle cx="400" cy="8" r="5" className="fill-primary" />
          </svg>
        </div>

        {/* Stats */}
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <div className="rounded-md border border-border p-2">
            <p className="text-[9px] text-muted-foreground">Workflows</p>
            <p className="mt-0.5 text-xs font-semibold">128</p>
          </div>

          <div className="rounded-md border border-border p-2">
            <p className="text-[9px] text-muted-foreground">Completed</p>
            <p className="mt-0.5 text-xs font-semibold">96.8%</p>
          </div>
        </div>

        {/* Status */}
        <div className="mt-2.5 flex items-center gap-1.5 border-t border-border pt-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-[9px] text-muted-foreground">System running smoothly</span>
        </div>
      </div>
    </div>
  );
};