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
        "AI workflows can automate work that previously required people to read information, make decisions, and move data between tools. But adding an AI model to a workflow does not automatically make the workflow reliable. Production systems need clear inputs, controlled decisions, validation, and predictable failure handling.",
        "The goal is not to make every step intelligent. The goal is to use AI where it adds value while keeping the rest of the workflow deterministic and easy to understand."
      ]
    },
    {
      type: "paragraph",
      id: "where-ai-helps",
      title: "Where AI actually helps",
      paragraphs: [
        "AI is most useful when a workflow deals with information that is difficult to handle with fixed rules alone. Examples include classifying support requests, extracting fields from documents, summarizing conversations, drafting replies, or deciding which workflow path an item should follow.",
        "For predictable operations such as moving a record, checking a required field, sending a notification, or updating a database, traditional automation is usually a better choice. Combining deterministic steps with targeted AI makes the overall system easier to operate."
      ]
    },
    {
      type: "quote",
      id: "reliability-principle",
      title: "A useful principle",
      paragraphs: [
        "Treat AI as one component inside a workflow rather than as the workflow itself. Give the model a specific responsibility and define what happens when its output is incomplete or uncertain."
      ],
      quote: "Use AI for judgment-heavy steps, and automation for everything that should be predictable."
    },
    {
      type: "numbered",
      id: "design-principles",
      title: "Four principles for reliable AI workflows",
      items: [
        {
          number: "01",
          title: "Define the input contract",
          paragraphs: [
            "Before calling an AI model, decide exactly what information it should receive. Normalize fields, remove unnecessary data, and make required values explicit.",
            "A clear input contract reduces inconsistent outputs and makes failures easier to reproduce."
          ]
        },
        {
          number: "02",
          title: "Constrain the output",
          paragraphs: [
            "Ask the model for a specific structure instead of unrestricted text when the next workflow step depends on the result. Structured outputs make validation and downstream processing much safer.",
            "Always validate the result before allowing the workflow to continue."
          ]
        },
        {
          number: "03",
          title: "Design for uncertainty",
          paragraphs: [
            "AI systems will occasionally produce low-confidence, incomplete, or unexpected results. Build a fallback path instead of assuming every response is correct.",
            "Depending on the use case, the fallback can retry the operation, request more information, route the item to a human, or stop the workflow safely."
          ]
        },
        {
          number: "04",
          title: "Keep observability from day one",
          paragraphs: [
            "Store enough execution information to understand what happened: trigger, relevant inputs, selected path, output status, and failure reason.",
            "Good observability turns a confusing AI failure into a traceable workflow event."
          ]
        }
      ]
    },
    {
      type: "visual",
      id: "workflow-visual",
      component: "workflow"
    },
    {
      type: "paragraph",
      id: "production-checklist",
      title: "Before putting it into production",
      paragraphs: [
        "Test the workflow with normal, incomplete, duplicated, and unexpected inputs. Check that validation catches malformed AI responses and that failures do not leave systems in a partially updated state.",
        "Start with a narrow workflow, measure its results, and expand only after the behavior is predictable. Production reliability usually comes from small boundaries and clear fallback paths rather than from increasingly complex prompts."
      ]
    }
  ],

  "automating-repetitive-tasks": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Repetitive work is often the easiest place to start with automation, but not every repetitive task is worth automating. A good automation removes manual effort without creating a new maintenance problem.",
        "The best candidates usually have a clear trigger, repeat frequently, follow a recognizable process, and involve information that already exists in digital systems."
      ]
    },
    {
      type: "paragraph",
      id: "spot-the-pattern",
      title: "Start with the pattern, not the tool",
      paragraphs: [
        "Instead of asking which automation tool to use, first document what actually happens today. Identify the trigger, the inputs, the decisions, the actions, and the final result.",
        "For example, a new customer request might arrive through a form, be categorized, added to a CRM, assigned to a team member, and followed by an email. Once the pattern is visible, the automation becomes much easier to design."
      ]
    },
    {
      type: "numbered",
      id: "automation-candidates",
      title: "Four tasks that are usually strong candidates",
      items: [
        {
          number: "01",
          title: "Data entry and synchronization",
          paragraphs: [
            "If the same information is repeatedly copied from one system to another, automation can reduce errors and save significant time.",
            "Examples include syncing form submissions with a CRM or updating a project record when a customer status changes."
          ]
        },
        {
          number: "02",
          title: "Notifications and follow-ups",
          paragraphs: [
            "Automated reminders are useful when a predictable event should trigger a message. This prevents routine follow-up from depending on someone's memory.",
            "Keep notification rules focused so teams do not end up with unnecessary alerts."
          ]
        },
        {
          number: "03",
          title: "Routine document processing",
          paragraphs: [
            "Invoices, forms, applications, and internal documents often contain repeatable fields that can be extracted and routed automatically.",
            "Validation is important when extracted information affects financial or operational decisions."
          ]
        },
        {
          number: "04",
          title: "Simple approvals and routing",
          paragraphs: [
            "Rules-based requests can often be routed automatically based on department, amount, priority, or request type.",
            "More complex decisions can be handed to an AI step or a human reviewer instead of forcing everything into fixed rules."
          ]
        }
      ]
    },
    {
      type: "quote",
      id: "automation-rule",
      title: "A practical rule",
      paragraphs: [
        "If a task happens often, follows the same basic sequence, and has a measurable outcome, it is worth investigating as an automation candidate."
      ],
      quote: "Automate the process people repeat, not the process people are still trying to understand."
    },
    {
      type: "paragraph",
      id: "start-small",
      title: "Start with one workflow",
      paragraphs: [
        "A common mistake is trying to automate an entire department at once. A better approach is to choose one workflow with a clear owner and measurable time cost.",
        "Build the smallest useful version, run it alongside the manual process, and compare the results. Once the workflow is stable, add edge cases and expand its scope."
      ]
    },
    {
      type: "paragraph",
      id: "measure-results",
      title: "Measure what changed",
      paragraphs: [
        "Track execution volume, time saved, failure rate, manual interventions, and the quality of the final result. These metrics tell you whether the automation is actually improving the process.",
        "The strongest automations are not simply the ones that run without humans. They are the ones that reduce unnecessary work while keeping the process accurate and understandable."
      ]
    }
  ],

  "workflow-automation-best-practices": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "A workflow can work perfectly during its first week and still become difficult to maintain later. As more integrations, conditions, and edge cases are added, small design decisions start affecting reliability.",
        "Good workflow automation is therefore less about building the most complicated flow and more about creating a system that another person can understand, monitor, and change safely."
      ]
    },
    {
      type: "numbered",
      id: "principles",
      title: "Seven principles for better automation",
      items: [
        {
          number: "01",
          title: "Keep workflows focused",
          paragraphs: [
            "One workflow should have a clear purpose. Splitting unrelated business processes makes testing and troubleshooting much easier."
          ]
        },
        {
          number: "02",
          title: "Use clear names",
          paragraphs: [
            "Name workflows, steps, conditions, and outputs according to what they do. Clear naming becomes especially valuable when a team owns dozens of automations."
          ]
        },
        {
          number: "03",
          title: "Validate important data",
          paragraphs: [
            "Do not assume an upstream system always sends valid information. Validate required fields and stop or route invalid records before they reach sensitive operations."
          ]
        },
        {
          number: "04",
          title: "Make failures explicit",
          paragraphs: [
            "Every important external action can fail. Define retries, fallback actions, and notifications instead of allowing errors to disappear silently."
          ]
        },
        {
          number: "05",
          title: "Avoid unnecessary steps",
          paragraphs: [
            "Extra transformations and integrations increase maintenance cost. If a step does not contribute to the final outcome, consider removing it."
          ]
        },
        {
          number: "06",
          title: "Design for idempotency",
          paragraphs: [
            "A retry should not accidentally create duplicate records, payments, messages, or other side effects. Use unique identifiers and safe update strategies where possible."
          ]
        },
        {
          number: "07",
          title: "Monitor the outcome",
          paragraphs: [
            "A workflow is not finished when it runs successfully once. Monitor execution volume, failures, latency, and business results over time."
          ]
        }
      ]
    },
    {
      type: "visual",
      id: "reliability-visual",
      component: "reliability"
    },
    {
      type: "quote",
      id: "maintainability",
      title: "Think like the next maintainer",
      paragraphs: [
        "Every workflow eventually needs to be changed. Design it so a teammate can understand the trigger, decisions, integrations, and failure paths without reverse-engineering the entire system."
      ],
      quote: "A good automation is one you can safely change six months later."
    },
    {
      type: "paragraph",
      id: "review-cycle",
      title: "Review workflows regularly",
      paragraphs: [
        "Integrations change, APIs evolve, business rules get updated, and teams stop using tools. Schedule periodic reviews to remove obsolete steps and verify that important workflows still match the real process.",
        "Treat workflows as production software: document them, monitor them, test important changes, and give ownership to someone who is responsible for their behavior."
      ]
    }
  ],

  "identify-automation-opportunities": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Most teams have more automation opportunities than they realize. The challenge is choosing the right ones. Automating a low-value task may save a few minutes while an overlooked handoff can cost hours every week.",
        "The most useful starting point is to map how work moves through the organization and identify where people repeatedly wait, copy information, check the same conditions, or perform manual follow-ups."
      ]
    },
    {
      type: "numbered",
      id: "opportunity-signals",
      title: "Four signals that a task is worth automating",
      items: [
        {
          number: "01",
          title: "High frequency",
          paragraphs: [
            "A small time saving becomes significant when a task happens hundreds of times. Measure weekly or monthly volume instead of looking at one execution."
          ]
        },
        {
          number: "02",
          title: "Manual handoffs",
          paragraphs: [
            "When information repeatedly moves between people or systems, there is often an opportunity to automate routing, synchronization, or notifications."
          ]
        },
        {
          number: "03",
          title: "Rule-based decisions",
          paragraphs: [
            "If people repeatedly make the same decision using a small set of conditions, the decision can often be represented as workflow logic."
          ]
        },
        {
          number: "04",
          title: "Frequent delays",
          paragraphs: [
            "Tasks that sit in queues waiting for someone to notice or follow up are strong candidates for event-driven reminders and routing."
          ]
        }
      ]
    },
    {
      type: "quote",
      id: "prioritization",
      title: "Prioritize by impact",
      paragraphs: [
        "A useful automation is not necessarily the most technically interesting one. Prioritize opportunities using frequency, time cost, error rate, business importance, and implementation effort."
      ],
      quote: "Start where automation removes friction from a process people already depend on."
    },
    {
      type: "paragraph",
      id: "score-opportunities",
      title: "Create a simple opportunity score",
      paragraphs: [
        "For each candidate, estimate how often it occurs, how long it takes, how often mistakes happen, and how much effort automation would require. A simple scoring model can quickly separate high-impact opportunities from nice-to-have ideas.",
        "Also consider risk. A workflow that affects customer communication or financial records deserves stronger validation than a workflow that only creates an internal reminder."
      ]
    },
    {
      type: "paragraph",
      id: "validate-first",
      title: "Validate the process before automating it",
      paragraphs: [
        "Do not automate a broken process just because it is repetitive. First remove unnecessary approvals, duplicate data entry, or unclear ownership. Then automate the improved process.",
        "This prevents automation from making inefficient work happen faster."
      ]
    }
  ],

  "ai-agents-for-business-workflows": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Traditional automation is excellent when the path from trigger to outcome is known in advance. AI agents become useful when the workflow needs to interpret information, choose between actions, or adapt to changing inputs.",
        "An agent should not replace every workflow rule. Its value comes from handling the parts of a process where rigid logic becomes difficult to maintain."
      ]
    },
    {
      type: "paragraph",
      id: "agent-vs-automation",
      title: "Agents vs. traditional automation",
      paragraphs: [
        "A traditional workflow might say: if a request is marked urgent, assign it to the priority queue. An AI agent might read the request, determine the likely intent, gather relevant context, and recommend the appropriate next action.",
        "The agent can make the process more flexible, but it also introduces uncertainty. That means permissions, validation, monitoring, and human review become more important."
      ]
    },
    {
      type: "numbered",
      id: "good-use-cases",
      title: "Where agents fit well",
      items: [
        {
          number: "01",
          title: "Understanding unstructured input",
          paragraphs: [
            "Agents can interpret emails, conversations, documents, and requests that do not follow a fixed format."
          ]
        },
        {
          number: "02",
          title: "Selecting the next action",
          paragraphs: [
            "When several possible actions exist and the correct path depends on context, an agent can recommend or select a route within defined boundaries."
          ]
        },
        {
          number: "03",
          title: "Gathering context",
          paragraphs: [
            "An agent can retrieve information from approved tools and combine it before producing a result, reducing manual context switching."
          ]
        },
        {
          number: "04",
          title: "Handling exceptions",
          paragraphs: [
            "Agents can help classify unusual cases and prepare them for human review instead of forcing every exception into a large set of rigid rules."
          ]
        }
      ]
    },
    {
      type: "quote",
      id: "guardrails",
      title: "Agents need boundaries",
      paragraphs: [
        "Give agents only the tools and permissions required for their job. Define which actions are automatic, which require approval, and what should happen when the agent is uncertain."
      ],
      quote: "The best agent is not the one with the most freedom. It is the one with the clearest boundaries."
    },
    {
      type: "paragraph",
      id: "human-in-loop",
      title: "Keep humans in the right places",
      paragraphs: [
        "High-impact actions should often include a review step, especially when mistakes can affect customers, money, security, or compliance. The goal is not to keep humans involved everywhere, but to put review where it provides meaningful risk reduction.",
        "Over time, monitor which cases require human intervention. If the same cases repeatedly pass review, parts of the process may eventually become safe to automate."
      ]
    },
    {
      type: "paragraph",
      id: "production-agent",
      title: "Build the agent as a workflow component",
      paragraphs: [
        "In production, an agent works best inside a larger controlled workflow: trigger, context retrieval, agent decision, validation, action, and logging. This makes the system observable and prevents an unpredictable model response from directly controlling the entire process.",
        "Start with a narrow role, measure accuracy and intervention rate, and expand its responsibilities gradually."
      ]
    }
  ],

  "scaling-workflow-automation": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "The first automation is usually simple. One trigger starts a few actions and the workflow solves a specific problem. As usage grows, however, reliability, ownership, permissions, monitoring, and maintenance become just as important as the workflow itself.",
        "Scaling automation means building an operating model around workflows, not simply creating more of them."
      ]
    },
    {
      type: "numbered",
      id: "scaling-stages",
      title: "The path from one workflow to a system",
      items: [
        {
          number: "01",
          title: "Prove the workflow",
          paragraphs: [
            "Start with one clearly defined process. Confirm that the automation actually improves the manual workflow before investing in additional complexity."
          ]
        },
        {
          number: "02",
          title: "Standardize patterns",
          paragraphs: [
            "As workflows multiply, use consistent naming, error handling, authentication patterns, logging, and documentation."
          ]
        },
        {
          number: "03",
          title: "Introduce ownership",
          paragraphs: [
            "Every critical workflow should have someone responsible for its behavior, dependencies, and ongoing maintenance."
          ]
        },
        {
          number: "04",
          title: "Centralize visibility",
          paragraphs: [
            "A growing automation estate needs a shared view of executions, failures, latency, and operational health so problems are discovered quickly."
          ]
        }
      ]
    },
    {
      type: "paragraph",
      id: "reliability-at-scale",
      title: "Reliability becomes the priority",
      paragraphs: [
        "At small scale, a failed workflow may be fixed manually. At larger scale, the same failure can affect hundreds or thousands of records. Add retries where they are safe, use idempotent operations, and isolate failures so one bad item does not stop unrelated work.",
        "Also pay attention to rate limits and third-party API dependencies. A workflow that works perfectly with ten executions can behave very differently when usage increases."
      ]
    },
    {
      type: "quote",
      id: "scaling-principle",
      title: "Scale the operating model",
      paragraphs: [
        "The difficult part of scaling is rarely creating another automation. It is maintaining consistent behavior across many automations and integrations."
      ],
      quote: "Scale standards and visibility before you scale workflow count."
    },
    {
      type: "paragraph",
      id: "governance",
      title: "Add lightweight governance",
      paragraphs: [
        "Define who can create, edit, disable, and approve production workflows. Keep credentials and secrets managed centrally, and avoid giving every workflow more access than it needs.",
        "Good governance should reduce risk without turning every small automation into a lengthy approval process."
      ]
    }
  ],

  "workflow-monitoring-and-errors": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "A workflow that fails silently is worse than a workflow that fails loudly. If a customer update, notification, or data synchronization stops without anyone noticing, the business may continue operating with incorrect information.",
        "Monitoring gives teams the visibility needed to know whether workflows are running, failing, slowing down, or producing unexpected results."
      ]
    },
    {
      type: "numbered",
      id: "monitoring-basics",
      title: "What to monitor",
      items: [
        {
          number: "01",
          title: "Execution status",
          paragraphs: [
            "Track successful, failed, skipped, and retried executions. A rising failure rate can reveal problems before users report them."
          ]
        },
        {
          number: "02",
          title: "Latency",
          paragraphs: [
            "Monitor how long important workflows take. A workflow can remain technically successful while becoming too slow for the process it supports."
          ]
        },
        {
          number: "03",
          title: "External dependencies",
          paragraphs: [
            "APIs, databases, queues, and third-party services can fail independently. Record which dependency caused an error so troubleshooting starts at the right place."
          ]
        },
        {
          number: "04",
          title: "Business outcomes",
          paragraphs: [
            "Technical success does not always mean business success. Check whether the workflow produced the expected record, message, assignment, or customer outcome."
          ]
        }
      ]
    },
    {
      type: "visual",
      id: "reliability-visual",
      component: "reliability"
    },
    {
      type: "quote",
      id: "failure-handling",
      title: "Make failures actionable",
      paragraphs: [
        "An error message should help answer three questions: what failed, why it failed, and what should happen next. Generic errors force teams to investigate from scratch."
      ],
      quote: "Good monitoring does not prevent every failure; it makes failures easy to understand and recover from."
    },
    {
      type: "paragraph",
      id: "recovery",
      title: "Design a recovery path",
      paragraphs: [
        "Use retries for temporary failures such as network errors or rate limits, but avoid retrying permanent validation errors indefinitely. For sensitive actions, consider a dead-letter or review queue where failed items can be inspected before replay.",
        "Keep enough execution context to safely retry an item. A retry should not create duplicate side effects or overwrite newer information."
      ]
    },
    {
      type: "paragraph",
      id: "alerts",
      title: "Alert on what matters",
      paragraphs: [
        "Too many alerts quickly become background noise. Create alerts around meaningful thresholds: repeated failures, critical workflow downtime, unusual volume, or long-running executions.",
        "The best alert is one that reaches the right person with enough context to take action."
      ]
    }
  ],

  "connecting-your-tools-with-automation": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Modern teams work across many tools: CRM platforms, project management systems, email, chat, forms, databases, analytics platforms, and internal applications. When these systems are disconnected, people become the integration layer by copying information between them.",
        "Workflow automation connects those systems so an event in one tool can trigger useful work in another."
      ]
    },
    {
      type: "paragraph",
      id: "integration-pattern",
      title: "Think in events and outcomes",
      paragraphs: [
        "A useful integration starts with an event: a new lead arrives, a ticket changes status, a payment succeeds, or a form is submitted. The workflow then transforms the relevant data and performs one or more actions.",
        "Keeping the event, transformation, and outcome clear makes integrations easier to test and change."
      ]
    },
    {
      type: "numbered",
      id: "integration-principles",
      title: "Four principles for dependable integrations",
      items: [
        {
          number: "01",
          title: "Use stable identifiers",
          paragraphs: [
            "When synchronizing records, rely on stable IDs rather than names or other values that can change. This reduces duplicate records and incorrect updates."
          ]
        },
        {
          number: "02",
          title: "Validate external data",
          paragraphs: [
            "Different tools use different schemas and assumptions. Validate fields before sending data to the next system and handle missing values explicitly."
          ]
        },
        {
          number: "03",
          title: "Respect API limits",
          paragraphs: [
            "Third-party APIs may enforce request limits, pagination, timeouts, or authentication rules. Design retries and batching around the provider's constraints."
          ]
        },
        {
          number: "04",
          title: "Protect credentials",
          paragraphs: [
            "API keys, tokens, and connection secrets should never be embedded directly in workflow logic or exposed in logs. Use secure credential storage and least-privilege access."
          ]
        }
      ]
    },
    {
      type: "quote",
      id: "integration-principle",
      title: "Integration is more than connection",
      paragraphs: [
        "Connecting two tools is easy to demonstrate. Making the connection reliable when data is missing, duplicated, delayed, or rejected is what makes it production-ready."
      ],
      quote: "A production integration is designed for the cases where the happy path does not happen."
    },
    {
      type: "paragraph",
      id: "sync-strategy",
      title: "Choose the right synchronization strategy",
      paragraphs: [
        "Real-time event-driven workflows are useful when a change needs an immediate response. Scheduled synchronization can be better when systems do not provide reliable events or when processing can happen in batches.",
        "Avoid synchronizing everything by default. Move only the information required for the business process and define which system owns each important field."
      ]
    },
    {
      type: "paragraph",
      id: "integration-testing",
      title: "Test the edges",
      paragraphs: [
        "Test missing fields, duplicate events, expired credentials, API failures, unexpected formats, and delayed responses. These cases are common in real integrations and should be part of the design rather than surprises after launch.",
        "With clear ownership and monitoring, integrations become infrastructure that teams can rely on instead of another source of manual work."
      ]
    }
  ],

  "measuring-automation-impact": [
    {
      type: "paragraph",
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "An automation can execute thousands of times and still provide little business value. Counting executions tells you how much the system ran, not whether the organization actually improved.",
        "Measuring automation impact means connecting workflow activity to outcomes such as time saved, faster response, fewer errors, lower operational cost, or better customer experience."
      ]
    },
    {
      type: "numbered",
      id: "key-metrics",
      title: "Five metrics worth tracking",
      items: [
        {
          number: "01",
          title: "Time saved",
          paragraphs: [
            "Estimate how long the manual process took before automation and compare it with the remaining human effort. Track the result over a representative period rather than one example."
          ]
        },
        {
          number: "02",
          title: "Automation rate",
          paragraphs: [
            "Measure the percentage of eligible work completed without manual intervention. This shows how much of the intended process is actually automated."
          ]
        },
        {
          number: "03",
          title: "Failure and intervention rate",
          paragraphs: [
            "Track how often workflows fail or require human correction. A high automation rate with frequent corrections may not represent a real improvement."
          ]
        },
        {
          number: "04",
          title: "Processing time",
          paragraphs: [
            "Compare how long it takes for an item to move from trigger to outcome. Automation can create value by reducing waiting time even when the total labor saving is modest."
          ]
        },
        {
          number: "05",
          title: "Business outcome",
          paragraphs: [
            "Connect the workflow to a meaningful business result such as qualified leads, resolved tickets, completed onboarding steps, or reduced operational errors."
          ]
        }
      ]
    },
    {
      type: "quote",
      id: "measurement-principle",
      title: "Measure outcomes, not activity",
      paragraphs: [
        "The purpose of automation is to improve a process. The strongest metric is therefore the one that shows whether the process became faster, cheaper, more accurate, or easier to operate."
      ],
      quote: "A successful automation changes the outcome, not just the number of workflow executions."
    },
    {
      type: "paragraph",
      id: "baseline",
      title: "Create a baseline first",
      paragraphs: [
        "Before launching an automation, capture a simple baseline: average processing time, manual effort, error rate, volume, and any existing business metric that matters. Without a baseline, it is difficult to prove that the new workflow created value.",
        "After launch, compare similar periods and account for changes in workload. A busy month may naturally produce more activity, so raw totals can be misleading."
      ]
    },
    {
      type: "paragraph",
      id: "roi",
      title: "Think about ROI",
      paragraphs: [
        "For larger automation initiatives, estimate the value of saved labor and reduced errors against implementation, maintenance, infrastructure, and integration costs. The goal is not perfect financial precision; it is a realistic view of whether the automation is worth maintaining.",
        "Review these numbers periodically. A workflow that was valuable at one stage of the business may need to be redesigned as volume, tools, and processes change."
      ]
    }
  ]
};
