import type { ComponentType, SVGProps } from 'react';

/**
 * Valid operational statuses for pipeline nodes in the DAG graph.
 */
export type DagNodeStatus = 'active' | 'idle';

/**
 * Valid operational statuses for active agent execution runs.
 */
export type AgentRunStatus = 'RUNNING' | 'COMPLETED' | 'FAILED';

/**
 * Filter options available in the active execution feed header.
 */
export type ExecutionFilter = 'ALL' | 'RUNNING' | 'COMPLETED' | 'FAILED';

/**
 * Supported icon identifier types for dynamic node icon lookup.
 */
export type TopologyIconName = 'Cpu' | 'ShieldCheck' | 'Radar' | 'Database';

/**
 * Domain model representing a node within the SVG pipeline topology.
 */
export interface DagNode {
    id: string;
    label: string;
    iconName: TopologyIconName;
    latencyMs: number;
    status: DagNodeStatus;
}

/**
 * Directed edge connection between two topology nodes.
 */
export interface DagEdge {
    from: string;
    to: string;
}

/**
 * Hourly snapshot data point for LLM token telemetry monitoring.
 */
export interface TokenTelemetryPoint {
    time: string;
    input: number;
    output: number;
}

/**
 * Event model representing an individual agent run execution.
 */
export interface AgentRun {
    id: string;
    agentName: string;
    tokensUsed: number;
    latencyMs: number;
    status: AgentRunStatus;
    timestamp: Date;
}
