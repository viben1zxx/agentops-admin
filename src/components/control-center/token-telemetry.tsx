"use client";

import { useEffect, useState } from "react";
import { CONTROL_CENTER_CONSTANTS } from "@/lib/constants";
import { generateSeededTelemetry } from "@/lib/mock-generator";

export function TokenTelemetry() {
    const [step, setStep] = useState(0);
    const metrics = generateSeededTelemetry(step);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => prev + 1);
        }, CONTROL_CENTER_CONSTANTS.TELEMETRY_REFRESH_MS);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            <MetricCard title="Tokens / Sec" value={metrics.tokensPerSecond} />
            <MetricCard title="Latency" value={`${metrics.latencyMs} ms`} />
            <MetricCard title="Active Nodes" value={metrics.activeNodes} />
        </div>
    );
}

function MetricCard({ title, value }: { title: string; value: string | number }) {
    return (
        <div className="rounded-lg border bg-card p-4 transition-all motion-reduce:transition-none">
            <p className="text-xs font-medium text-muted-foreground">{title}</p>
            <p className="mt-1 text-2xl font-bold">{value}</p>
        </div>
    );
}
