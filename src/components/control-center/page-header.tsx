'use client';

import { useState, useEffect } from 'react';

/**
 * Header section providing main workspace titles, live status ping, and a real-time UTC clock.
 */
export function PageHeader() {
    const [timeString, setTimeString] = useState<string>('');

    useEffect(() => {
        const formatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'UTC',
        });

        const updateClock = () => {
            setTimeString(`${formatter.format(new Date())} UTC`);
        };

        updateClock();
        const timer = setInterval(updateClock, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header className="flex flex-col gap-4 border-b border-[var(--color-edge)] pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
                    AgentOps Control Center
                </h1>
                <p className="mt-1 text-xs text-[var(--color-ink-dim)] sm:text-sm">
                    Enterprise telemetry, DAG topology tracing, and LLM budget guardrails.
                </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
                <div
                    className="flex items-center gap-2 rounded-full border border-[var(--color-edge)] bg-[var(--color-panel-2)] px-3 py-1.5"
                    aria-label="System Operational Status: Live"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-ok)] opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-ok)]" />
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-wider text-[var(--color-ok)]">
                        LIVE
                    </span>
                </div>

                <div className="rounded-md border border-[var(--color-edge)] bg-[var(--color-panel)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--color-ink-dim)]">
                    {timeString || '00:00:00 UTC'}
                </div>
            </div>
        </header>
    );
}
