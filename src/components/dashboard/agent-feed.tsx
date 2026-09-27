import { mockAgentRuns } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function AgentFeed() {
    return (
        <Card className="flex flex-col gap-4">
            <div>
                <h3 className="text-lg font-semibold">Active Agent Execution Feed</h3>
                <p className="text-sm text-slate-400">Live execution stream and resource consumption per run.</p>
            </div>
            <div className="divide-y divide-[var(--card-border)]">
                {mockAgentRuns.map((run) => (
                    <div key={run.id} className="flex items-center justify-between py-3">
                        <div className="flex flex-col">
                            <span className="font-medium text-sm">{run.agentName}</span>
                            <span className="text-xs text-slate-500">ID: {run.id} • {run.timestamp}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right text-xs">
                                <div>{run.tokensUsed.toLocaleString()} tokens</div>
                                <div className="text-slate-500">{run.latencyMs}ms</div>
                            </div>
                            <Badge status={run.status} />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
