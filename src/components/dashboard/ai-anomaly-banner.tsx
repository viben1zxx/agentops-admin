'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export function AiAnomalyBanner() {
    const [resolved, setResolved] = useState(false);

    if (resolved) {
        return (
            <Card className="bg-emerald-950/30 border-emerald-800/50 flex items-center justify-between p-4 transition-all">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-200">
                        AI Guardrail Active: All agent execution loops are operating within nominal token limits.
                    </span>
                </div>
                <button
                    onClick={() => setResolved(false)}
                    className="text-xs text-slate-400 hover:text-slate-200 underline"
                >
                    Reset Simulation
                </button>
            </Card>
        );
    }

    return (
        <Card className="relative overflow-hidden bg-gradient-to-r from-rose-950/40 via-slate-900 to-amber-950/30 border-rose-800/60 p-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30 shrink-0">
                        <AlertTriangle className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                                AI Anomaly Detected
                            </span>
                            <span className="text-xs text-slate-400">2 minutes ago</span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-100 mt-1">
                            Infinite Loop Spike: <span className="font-mono text-rose-300">TokenLimit_Enforcer</span>
                        </h4>
                        <p className="text-xs text-slate-300 mt-0.5">
                            Agent generated 3,100 repetitive output tokens in 1.2s. Recommended action: Rate-limit agent run ID <code className="font-mono bg-slate-800 px-1 rounded">run-103</code>.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={() => setResolved(true)}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-900/30 transition-all"
                    >
                        <ShieldAlert className="w-4 h-4" />
                        Auto-Throttle Agent
                    </button>
                </div>
            </div>
        </Card>
    );
}
