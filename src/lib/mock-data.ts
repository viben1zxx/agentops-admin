import { AgentRun, TokenMetric, SystemHealth } from '@/types';

export const mockAgentRuns: AgentRun[] = [
    { id: 'run-101', agentName: 'SecurityConstellation_Agent', status: 'running', tokensUsed: 1420, latencyMs: 340, timestamp: '12:44:02' },
    { id: 'run-102', agentName: 'MLOps_Pipeline_Guard', status: 'completed', tokensUsed: 890, latencyMs: 190, timestamp: '12:43:55' },
    { id: 'run-103', agentName: 'TokenLimit_Enforcer', status: 'failed', tokensUsed: 3100, latencyMs: 1200, timestamp: '12:42:10' },
    { id: 'run-104', agentName: 'Data_Ingestion_Loop', status: 'paused', tokensUsed: 0, latencyMs: 0, timestamp: '12:40:00' },
];

export const mockTokenMetrics: TokenMetric[] = [
    { time: '00:00', inputTokens: 1200, outputTokens: 400 },
    { time: '04:00', inputTokens: 2100, outputTokens: 900 },
    { time: '08:00', inputTokens: 5400, outputTokens: 2300 },
    { time: '12:00', inputTokens: 8900, outputTokens: 4100 },
    { time: '16:00', inputTokens: 6200, outputTokens: 3100 },
    { time: '20:00', inputTokens: 9500, outputTokens: 5200 },
];

export const mockSystemHealth: SystemHealth[] = [
    { component: 'Inference Router', status: 'healthy', uptime: '99.98%' },
    { component: 'Guardrail Engine', status: 'healthy', uptime: '100%' },
    { component: 'Telemetry Pipeline', status: 'degraded', uptime: '98.50%' },
];
