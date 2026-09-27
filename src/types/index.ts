export type AgentStatus = 'running' | 'completed' | 'failed' | 'paused';

export interface AgentRun {
    id: string;
    agentName: string;
    status: AgentStatus;
    tokensUsed: number;
    latencyMs: number;
    timestamp: string;
}

export interface TokenMetric {
    time: string;
    inputTokens: number;
    outputTokens: number;
}

export interface SystemHealth {
    component: string;
    status: 'healthy' | 'degraded' | 'down';
    uptime: string;
}
