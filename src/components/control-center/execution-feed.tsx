"use client";

import { CONTROL_CENTER_CONSTANTS } from "@/lib/constants";

const STATIC_FEED_ITEMS = Array.from({ length: CONTROL_CENTER_CONSTANTS.MAX_FEED_ITEMS }, (_, i) => ({
    id: `exec-${i + 1}`,
    event: `Pipeline Step #${i + 1} completed`,
    timestamp: `10:45:${10 + i} AM`,
}));

export function ExecutionFeed() {
    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold">Execution Log</h3>
            <ul className="space-y-2 text-xs">
                {STATIC_FEED_ITEMS.map((item) => (
                    <li
                        key={item.id}
                        className="flex justify-between border-b pb-1 last:border-none motion-reduce:animate-none"
                    >
                        <span className="font-mono text-muted-foreground">{item.event}</span>
                        <span className="text-muted-foreground/60">{item.timestamp}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
