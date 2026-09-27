"use client";

import { useEffect, useState } from "react";
import { CONTROL_CENTER_CONSTANTS } from "@/lib/constants";

export function PipelineTopology() {
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsAnimating(document.visibilityState === "visible");
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    return (
        <div className="rounded-xl border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold tracking-wide text-foreground">
                    Pipeline Topology (DAG)
                </h3>
                <span className="text-xs text-muted-foreground">
                    Status: {isAnimating ? "Active" : "Paused (Background)"}
                </span>
            </div>

            <div
                style={{ height: `${CONTROL_CENTER_CONSTANTS.CHART_HEIGHT_PX}px` }}
                className="relative flex items-center justify-center rounded-lg border border-dashed bg-muted/20"
            >
                <svg className="h-full w-full">
                    <line
                        x1="10%" y1="50%" x2="90%" y2="50%"
                        stroke="currentColor"
                        strokeDasharray="6 6"
                        className={`stroke-primary/60 ${isAnimating ? "animate-[dash_2s_linear_infinite]" : ""
                            } motion-reduce:animate-none`}
                    />
                </svg>
            </div>
        </div>
    );
}
