import { DagNode, DagEdge, TokenTelemetryPoint, AgentRun } from '@/types/control-center';

/**
 * Provides the initial node dataset for the DAG pipeline topology graph.
 */
export function getInitialDagNodes(): DagNode[] {
    return [
        {
            id: 'node-orchestrator',
            label: 'Orchestrator Core',
            iconName: 'Cpu',
            latencyMs: 12,
            status: 'active',
        },
        {
            id: 'node-guardrail',
            label: 'Guardrail Llama-Guard',
            iconName: 'ShieldCheck',
            latencyMs: 40,
            status: 'active',
        },
        {
            id: 'node-security',
            label: 'SecurityConstellation',
            iconName: 'Radar',
            latencyMs: 120,
            status: 'active',
        },
        {
            id: 'node-memory',
            label: 'Pinecone Vector Memory',
            iconName: 'Database',
            latencyMs: 25,
            status: 'idle',
        },
    ];
}

/**
 * Defines vertical connection edges between pipeline topology nodes.
 */
export function getDagEdges(): DagEdge[] {
    return [
        { from: 'node-orchestrator', to: 'node-guardrail' },
        { from: 'node-guardrail', to: 'node-security' },
        { from: 'node-security', to: 'node-memory' },
    ];
}

/**
 * Generates deterministic token telemetry points for 24-hour monitoring.
 * Uses math formulas rather than random numbers to guarantee matching SSR and client hydration.
 */
export function getTokenTelemetryData(): TokenTelemetryPoint[] {
    const points: TokenTelemetryPoint[] = [];

    for (let hour = 0; hour < 24; hour++) {
        const timeLabel = `${hour.toString().padStart(2, '0')}:00`;
        // Deterministic trigonometric wave pattern
        const inputVal = Math.floor(2500 + Math.sin(hour / 2) * 1200 + hour * 80);
        const outputVal = Math.floor(1100 + Math.cos(hour / 2) * 600 + hour * 45);

        points.push({
            time: timeLabel,
            input: inputVal,
            output: outputVal,
        });
    }

    return points;
}

/**
 * Provides seeded initial agent runs including required reference datasets.
 */
export function getInitialAgentRuns(): AgentRun[] {
    const now = new Date('2026-09-24T12:44:02.000Z');

    return [
        {
            id: 'run-101',
            agentName: 'SecurityConstellation_Agent',
            tokensUsed: 1420,
            latencyMs: 340,
            status: 'RUNNING',
            timestamp: new Date(now.getTime() - 1000 * 2),
        },
        {
            id: 'run-102',
            agentName: 'MLOps_Pipeline_Guard',
            tokensUsed: 890,
            latencyMs: 120,
            status: 'COMPLETED',
            timestamp: new Date(now.getTime() - 1000 * 12),
        },
        {
            id: 'run-103',
            agentName: 'TokenLimit_Enforcer',
            tokensUsed: 3100,
            latencyMs: 1230,
            status: 'FAILED',
            timestamp: new Date(now.getTime() - 1000 * 35),
        },
        {
            id: 'run-104',
            agentName: 'Data_Ingestion_Loop',
            tokensUsed: 620,
            latencyMs: 85,
            status: 'COMPLETED',
            timestamp: new Date(now.getTime() - 1000 * 60),
        },
        {
            id: 'run-105',
            agentName: 'PromptGuard_Validator',
            tokensUsed: 1890,
            latencyMs: 210,
            status: 'COMPLETED',
            timestamp: new Date(now.getTime() - 1000 * 95),
        },
        {
            id: 'run-106',
            agentName: 'VectorMemory_Indexer',
            tokensUsed: 4200,
            latencyMs: 890,
            status: 'RUNNING',
            timestamp: new Date(now.getTime() - 1000 * 140),
        },
        {
            id: 'run-107',
            agentName: 'Audit_Trail_Logger',
            tokensUsed: 410,
            latencyMs: 45,
            status: 'COMPLETED',
            timestamp: new Date(now.getTime() - 1000 * 190),
        },
        {
            id: 'run-108',
            agentName: 'Inference_Router',
            tokensUsed: 2750,
            latencyMs: 610,
            status: 'FAILED',
            timestamp: new Date(now.getTime() - 1000 * 240),
        },
    ];
}

/**
 * Deterministically creates a new agent run instance for live feed streaming.
 */
export function createStreamAgentRun(sequence: number): AgentRun {
    const agentPool = [
        'SecurityConstellation_Agent',
        'MLOps_Pipeline_Guard',
        'TokenLimit_Enforcer',
        'VectorMemory_Indexer',
        'Inference_Router',
    ];

    const statusPool: Array<'RUNNING' | 'COMPLETED' | 'FAILED'> = [
        'RUNNING',
        'COMPLETED',
        'COMPLETED',
        'FAILED',
    ];

    const agentName = agentPool[sequence % agentPool.length];
    const status = statusPool[sequence % statusPool.length];
    const tokensUsed = 500 + ((sequence * 370) % 3500);
    const latencyMs = 50 + ((sequence * 125) % 950);

    return {
        id: `run-${108 + sequence}`,
        agentName,
        tokensUsed,
        latencyMs,
        status,
        timestamp: new Date(),
    };
}
